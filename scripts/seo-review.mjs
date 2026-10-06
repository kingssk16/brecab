import fs from "node:fs/promises";
import assert from "node:assert/strict";

const local = "http://127.0.0.1:3001";
const live = "https://brecab.vercel.app";
const decode = (text = "") => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const meta = (html, name) => decode(html.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`))?.[1]);
const canonical = (html) => html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
const plain = (html = "") => decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const normalized = (url) => url.replace(/\/$/, "");
const snapshot = (html) => ({ title: decode(html.match(/<title>(.*?)<\/title>/)?.[1]), description: meta(html, "description"), canonical: canonical(html) });

const sitemapResponse = await fetch(`${local}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, "Sitemap ska svara 200");
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 22, "Alla 22 innehållssidor ska ingå i sitemap");
assert.equal(new Set(urls).size, urls.length, "Sitemap ska sakna dubbletter");
const rows = [];
for (let index = 0; index < urls.length; index += 4) {
  const batch = await Promise.all(urls.slice(index, index + 4).map(async (url) => {
    const path = new URL(url).pathname;
    const [afterResponse, beforeResponse] = await Promise.all([fetch(`${local}${path}`), fetch(`${live}${path}`)]);
    assert.equal(afterResponse.status, 200, `${path} ska svara 200`);
    assert.equal(beforeResponse.status, 200, `Publicerad jämförelsesida ${path} ska svara 200`);
    const [afterHtml, beforeHtml] = await Promise.all([afterResponse.text(), beforeResponse.text()]);
    const after = snapshot(afterHtml);
    assert.ok(after.title && after.description, `${path}: titel och beskrivning`);
    assert.equal(normalized(after.canonical), normalized(url), `${path}: canonical`);
    assert.equal(meta(afterHtml, "og:title"), after.title, `${path}: korrekt delningstitel`);
    assert.equal(meta(afterHtml, "og:description"), after.description, `${path}: korrekt delningsbeskrivning`);
    assert.equal(normalized(meta(afterHtml, "og:url")), normalized(url), `${path}: korrekt delningsadress`);
    assert.equal(meta(afterHtml, "og:locale"), "sv_SE", `${path}: svenska vid delning`);
    assert.equal(meta(afterHtml, "twitter:title"), after.title, `${path}: Twitter-titel`);
    assert.equal(meta(afterHtml, "twitter:card"), "summary_large_image", `${path}: delningskort`);
    assert.match(meta(afterHtml, "robots"), /index, follow/, `${path}: indexering tillåten`);
    assert.equal((afterHtml.match(/<h1[ >]/g) ?? []).length, 1, `${path}: en huvudrubrik`);
    assert.match(afterHtml, /<html lang="sv"/, `${path}: svenska`);
    const schemas = [...afterHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
    const organisation = schemas.find((data) => data["@type"] === "Organization");
    assert.equal(organisation?.telephone, "+46706602076", `${path}: telefon i företagsdata`);
    assert.ok(schemas.some((data) => data["@type"] === "WebSite"), `${path}: webbplatsdata`);
    const breadcrumb = schemas.find((data) => data["@type"] === "BreadcrumbList");
    if (path !== "/") {
      assert.ok(breadcrumb, `${path}: brödsmulor`);
      assert.equal(normalized(breadcrumb.itemListElement.at(-1).item), normalized(url), `${path}: sista brödsmulan`);
    }
    if (path.startsWith("/tjanster/")) {
      const service = schemas.find((data) => data["@type"] === "Service");
      assert.ok(service, `${path}: tjänstedata`);
      assert.equal(service.provider["@id"], organisation["@id"], `${path}: korrekt tjänsteleverantör`);
      assert.equal(service.areaServed.name, "Boden", `${path}: verksamhetsort`);
      assert.match(afterHtml, /FRÅGOR OM DITT UPPDRAG/, `${path}: synlig frågesektion`);
      assert.ok(plain(afterHtml.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1]).includes("BODEN"), `${path}: lokal huvudrubrik`);
      const image = await fetch(new URL(meta(afterHtml, "og:image")).pathname.startsWith("/projects/") ? `${local}${new URL(meta(afterHtml, "og:image")).pathname}` : meta(afterHtml, "og:image"));
      assert.equal(image.status, 200, `${path}: delningsbild finns`);
    }
    return { path, label: path === "/" ? "Startsidan" : breadcrumb?.itemListElement.at(-1).name, before: snapshot(beforeHtml), after, heading: plain(afterHtml.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1]), schemas: schemas.map((data) => data["@type"]) };
  }));
  rows.push(...batch);
}
assert.equal(new Set(rows.map((row) => row.after.title)).size, rows.length, "Unika sidtitlar");
assert.equal(new Set(rows.map((row) => row.after.description)).size, rows.length, "Unika beskrivningar");
const robots = await (await fetch(`${local}/robots.txt`)).text();
assert.match(robots, /Allow: \//, "Robots tillåter läsning");
assert.ok(robots.includes(`${live}/sitemap.xml`), "Robots hänvisar till rätt sitemap");
const queryHtml = await (await fetch(`${local}/kontakt?tjanst=dranering`)).text();
assert.equal(canonical(queryHtml), `${live}/kontakt`, "Kontaktförfrågan får canonical utan parameter");
for (const [oldPath, target] of [["/kontakta-oss", "/kontakt"], ["/arbetsomr-den", "/tjanster"], ["/kvalit", "/kvalitet"], ["/milj", "/miljo"]]) {
  const response = await fetch(`${local}${oldPath}`, { redirect: "manual" });
  assert.equal(response.status, 308, `${oldPath}: permanent omdirigering`);
  assert.equal(new URL(response.headers.get("location"), local).pathname, target, `${oldPath}: rätt mål`);
}
const missing = await fetch(`${local}/tjanster/finns-inte`);
assert.equal(missing.status, 404, "Okänd tjänst ska ge 404");
assert.match(await missing.text(), /<meta name="robots" content="noindex"/, "404 ska vara noindex");
await fs.mkdir("review", { recursive: true });
await fs.writeFile("review/seo-data.json", JSON.stringify({ checked: "2026-10-06", rows }, null, 2));
const template = await fs.readFile("scripts/seo-preview.template.html", "utf8");
await fs.writeFile("review/seo-preview.html", template.replace("__SEO_DATA__", JSON.stringify(rows).replace(/</g, "\\u003c")));
console.log(`PASS: ${rows.length} sidor, unika metadata, delningskort, canonical, sitemap, robots, företagsdata, 16 tjänstescheman och brödsmulor.`);
console.log("PASS: kontaktparametrar, fyra permanenta omdirigeringar och noindex på 404.");
console.log("Förhandsvisning: review/seo-preview.html");

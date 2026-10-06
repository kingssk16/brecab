import http from "node:http";
import fs from "node:fs/promises";

const html = await fs.readFile(new URL("../review/seo-preview.html", import.meta.url));
http.createServer((req, res) => {
  if (req.url !== "/" && req.url !== "/seo-preview.html") {
    res.writeHead(404);
    res.end("Hittades inte");
    return;
  }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" });
  res.end(html);
}).listen(3002, "127.0.0.1", () => console.log("SEO-förhandsvisning: http://127.0.0.1:3002"));

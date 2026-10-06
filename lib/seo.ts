import type { Metadata } from "next";
import { services } from "@/lib/brecab-content";

export const siteUrl = "https://brecab.vercel.app";
export const businessId = `${siteUrl}/#organisation`;
export const websiteId = `${siteUrl}/#website`;
export const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).href;

type SeoPage = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const mainPageSeo: Record<string, SeoPage> = {
  "/": {
    title: "Markarbete & snöröjning i Boden | BRECAB",
    description: "BRECAB i Boden hjälper dig med markarbete, dränering, garageinfarter, snöröjning och yttre skötsel. Ring 070-6602076 och berätta om ditt uppdrag.",
  },
  "/tjanster": {
    title: "Markarbeten, snöröjning & skötsel i Boden | BRECAB",
    description: "Utforska BRECABs tjänster i Boden: markanläggning, dränering, plattläggning, snöröjning, sandning, gräsklippning och transport. Hitta rätt hjälp för ditt uppdrag.",
    image: "/projects/markanlaggning-hjullastare.png",
    imageAlt: "Hjullastare vid markarbete intill ett flerbostadshus",
  },
  "/om-oss": {
    title: "Om BRECAB – maskin- & markentreprenad i Boden",
    description: "Lär känna BRECAB, ett entreprenadföretag i Boden inom maskin och markanläggning. Vi tar ett helhetsansvar för stora och små uppdrag året runt.",
  },
  "/kontakt": {
    title: "Kontakta BRECAB i Boden – telefon & förfrågan",
    description: "Behöver du hjälp med markarbete, snöröjning eller skötsel i Boden? Ring BRECAB på 070-6602076 eller mejla info@brecab.se för att diskutera ditt uppdrag.",
  },
  "/kvalitet": {
    title: "Kvalitetspolicy & arbetssätt | BRECAB i Boden",
    description: "Läs hur BRECAB arbetar med kvalitet, planering och ansvar i entreprenaduppdrag. Vår kvalitetspolicy omfattar alla medarbetare och hela verksamheten.",
  },
  "/miljo": {
    title: "Miljöpolicy, hälsa & säkerhet | BRECAB i Boden",
    description: "BRECABs miljöarbete omfattar hälsa, säkerhet, resurshushållning och ansvar för omgivningen. Läs vår miljöpolicy och hur vi arbetar med förbättringar.",
  },
};

export const serviceSeo: Record<string, { title: string; description: string; heading: string }> = {
  markanlaggning: {
    title: "Markanläggning & markarbete i Boden | BRECAB",
    heading: "Markanläggning i Boden",
    description: "Markanläggning i Boden för tomter, fastigheter och gemensamma utemiljöer. BRECAB hjälper med grundarbete, gräs- och grusytor. Diskutera ditt projekt med oss.",
  },
  garageinfarter: {
    title: "Garageinfarter i Boden – ombyggnad & urgrävning | BRECAB",
    heading: "Garageinfarter i Boden",
    description: "Bygga om en garageinfart i Boden? BRECAB utför ombyggnad och urgrävning av infarter. Berätta om underlaget, storleken och dina önskemål för ett kostnadsförslag.",
  },
  dranering: {
    title: "Dränering i Boden – markarbete vid husgrund | BRECAB",
    heading: "Dränering i Boden",
    description: "BRECAB utför dränering, utgrävning och isoleringsarbete i Boden. Vi går igenom fastighetens förutsättningar med dig och diskuterar omfattning och kostnadsförslag.",
  },
  "utgravning-isolering": {
    title: "Utgrävning & isolering i Boden | BRECAB",
    heading: "Utgrävning & isolering i Boden",
    description: "Utgrävning och isolering som del av ditt markprojekt i Boden. BRECAB planerar arbetet med hänsyn till byggnader och markens användning. Berätta om ditt behov.",
  },
  grasytor: {
    title: "Anläggning av gräsytor i Boden | BRECAB",
    heading: "Gräsytor i Boden",
    description: "BRECAB hjälper med markarbete för gräsytor i Boden, på privata tomter och vid fastigheter. Beskriv marken och ytans storlek så går vi igenom förberedelserna.",
  },
  grusytor: {
    title: "Grusytor & grusade infarter i Boden | BRECAB",
    heading: "Grusytor i Boden",
    description: "Anläggning av grusytor i Boden för infarter, gångar och gårdsplaner. BRECAB går igenom användning och markarbete med dig. Kontakta oss om ditt uppdrag.",
  },
  "plattlaggning-kantsten": {
    title: "Plattläggning & kantsten i Boden | BRECAB",
    heading: "Plattläggning & kantsten i Boden",
    description: "Plattläggning och kantstensläggning i Boden för gångar, uppfarter och andra markytor. BRECAB hjälper med enskilda uppdrag och större anläggningsarbeten.",
  },
  lekplatsbyggnationer: {
    title: "Lekplatsbyggnation & markarbete i Boden | BRECAB",
    heading: "Lekplatsbyggnationer i Boden",
    description: "BRECAB utför lekplatsbyggnationer och tillhörande markarbete i Boden. Vi går igenom plats, utformning och omfattning med beställaren innan uppdraget börjar.",
  },
  snoplogning: {
    title: "Snöröjning i Boden – plogning & skottning | BRECAB",
    heading: "Snöröjning i Boden",
    description: "Snöplogning och snöskottning i Boden för privata och gemensamma ytor. BRECAB tar hand om vinterunderhållet enligt överenskommelse. Beskriv dina ytor för oss.",
  },
  halkbekampning: {
    title: "Halkbekämpning & sandning i Boden | BRECAB",
    heading: "Halkbekämpning & sandning i Boden",
    description: "BRECAB utför halkbekämpning och sandning i Boden för gångvägar, gårdar och andra vinterytor. Diskutera omfattning och samordning med snöröjningen med oss.",
  },
  snotransport: {
    title: "Snötransport i Boden – hjälp med snöhögar | BRECAB",
    heading: "Snötransport i Boden",
    description: "Behöver snöhögar och upplag tas om hand i Boden? BRECAB hjälper med snötransport och går igenom åtkomst, mängd och samordning med övrig snöröjning.",
  },
  hyvling: {
    title: "Hyvling av vinterytor i Boden | BRECAB",
    heading: "Hyvling av vinterytor i Boden",
    description: "Hyvling av vinterytor med packad snö och ojämnheter i Boden. Kontakta BRECAB och beskriv underlaget så diskuterar vi vilken maskininsats som passar ytan.",
  },
  vinterredskap: {
    title: "Maskininsatser & vinterredskap i Boden | BRECAB",
    heading: "Vinterredskap i Boden",
    description: "Maskiner och vinterredskap för vinterarbete i Boden. BRECAB går igenom ytornas förutsättningar och diskuterar arbetssätt och maskininsats för ditt uppdrag.",
  },
  grasklippning: {
    title: "Gräsklippning i Boden för tomter & fastigheter | BRECAB",
    heading: "Gräsklippning i Boden",
    description: "Gräsklippning i Boden för privatpersoner, företag, bostadsrättsföreningar och offentlig verksamhet. BRECAB planerar skötseln efter yta, åtkomst och dina behov.",
  },
  sopning: {
    title: "Sopning i Boden – sand, grus & yttre skötsel | BRECAB",
    heading: "Sopning i Boden",
    description: "BRECAB hjälper med sopning i Boden, exempelvis sand och grus efter vintern. Berätta om underlag, storlek och önskad tidpunkt så planerar vi skötseluppdraget.",
  },
  transport: {
    title: "Transport vid mark- & maskinuppdrag i Boden | BRECAB",
    heading: "Transport i Boden",
    description: "Behöver du transport i samband med ett mark- eller maskinuppdrag i Boden? Kontakta BRECAB med material, mängd och sträcka så diskuterar vi förutsättningarna.",
  },
};

export function pageMetadata(path: string, page: SeoPage): Metadata {
  const image = { url: page.image ?? "/projects/loader-side.jpeg", alt: page.imageAlt ?? "Brecabs hjullastare med snöplog" };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      type: "website",
      locale: "sv_SE",
      siteName: "BRECAB",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [image] },
  };
}

export function serviceMetadata(service: (typeof services)[number]): Metadata {
  const seo = serviceSeo[service.slug];
  if (!seo) throw new Error(`SEO-innehåll saknas för ${service.slug}`);
  return pageMetadata(`/tjanster/${service.slug}`, { ...seo, image: `/projects/${service.image}`, imageAlt: service.alt });
}

export function breadcrumbData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export const organisationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": businessId,
  name: "BRECAB",
  url: siteUrl,
  email: "info@brecab.se",
  telephone: "+46706602076",
  logo: absoluteUrl("/brecab-official-logo.png"),
  image: absoluteUrl("/projects/loader-side.jpeg"),
  areaServed: { "@type": "City", name: "Boden" },
  description: "Maskin- och markentreprenad i Boden. Markarbete, vinterunderhåll, yttre skötsel och transport.",
  contactPoint: { "@type": "ContactPoint", telephone: "+46706602076", email: "info@brecab.se", contactType: "kundservice", availableLanguage: "sv" },
};

export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: "BRECAB",
  url: siteUrl,
  inLanguage: "sv-SE",
  publisher: { "@id": businessId },
};

export function serviceData(service: (typeof services)[number]) {
  const path = `/tjanster/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: serviceSeo[service.slug].heading,
    serviceType: service.title,
    description: service.detail,
    url: absoluteUrl(path),
    image: absoluteUrl(`/projects/${service.image}`),
    areaServed: { "@type": "City", name: "Boden" },
    provider: { "@id": businessId },
  };
}

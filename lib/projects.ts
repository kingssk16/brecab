export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  orientation?: "landscape" | "portrait";
};

export const projects: Project[] = [
  {
    slug: "vintervag-entreprenad",
    title: "Vinterväg Entreprenad",
    location: "Boden",
    category: "Maskintjänster",
    year: "2026",
    summary:
      "Snabb snöröjning och formstark maskinberedskap för vägar, planer och fastighetsytor.",
    image: "/projects/loader-side.jpeg"
  },
  {
    slug: "skogsbilvag",
    title: "Skogsbilväg",
    location: "Norrbotten",
    category: "Markarbete",
    year: "2026",
    summary:
      "Planering, bärlager och vinteranpassad framkomlighet för tunga fordon.",
    image: "/projects/snow-road.jpeg"
  },
  {
    slug: "precision-i-sno",
    title: "Precision i snö",
    location: "Boden",
    category: "Snöröjning",
    year: "2026",
    summary:
      "Frontblad, flipperskopa och erfaren förare ger rena ytor även i svår sikt.",
    image: "/projects/loader-front.jpeg"
  },
  {
    slug: "l60h-maskinpark",
    title: "Volvo L60H",
    location: "Brecab depå",
    category: "Maskinpark",
    year: "2026",
    summary:
      "Robust maskinkapacitet för transport, lastning, schakt och vinterservice.",
    image: "/projects/l60h-detail.jpeg"
  },
  {
    slug: "kvallsberedskap",
    title: "Kvällsberedskap",
    location: "Norra Sverige",
    category: "Jour",
    year: "2026",
    summary:
      "Belysta insatser i mörker med tydliga rutiner, hög säkerhet och snabb respons.",
    image: "/projects/loader-dusk.jpeg"
  },
  {
    slug: "falt-och-ytor",
    title: "Fält och ytor",
    location: "Boden",
    category: "Transport",
    year: "2026",
    summary:
      "Öppna ytor och långa transportleder förbereds för produktion och drift.",
    image: "/projects/winter-field.jpeg"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

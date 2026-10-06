import type { MetadataRoute } from "next";
import { services } from "@/lib/brecab-content";
import { absoluteUrl, mainPageSeo } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.keys(mainPageSeo),
    ...services.map((s) => `/tjanster/${s.slug}`),
  ].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/tjanster" ? 0.9 : 0.7,
  }));
}

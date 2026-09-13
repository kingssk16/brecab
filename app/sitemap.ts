import type { MetadataRoute } from "next";
import { services } from "@/lib/brecab-content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/tjanster",
    "/om-oss",
    "/kontakt",
    "/kvalitet",
    "/miljo",
    ...services.map((s) => `/tjanster/${s.slug}`),
  ].map((path) => ({
    url: `https://brecab.vercel.app${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/tjanster" ? 0.9 : 0.7,
  }));
}

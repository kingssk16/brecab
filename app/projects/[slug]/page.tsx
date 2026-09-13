import { permanentRedirect } from "next/navigation";
import { services } from "@/lib/brecab-content";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mapped: Record<string, string> = {
    "sno-transport": "snotransport",
    uppfart: "garageinfarter",
    lekparksbyggnationer: "lekplatsbyggnationer",
  };
  const candidate = mapped[slug] || slug;
  permanentRedirect(
    services.some((s) => s.slug === candidate)
      ? `/tjanster/${candidate}`
      : "/tjanster",
  );
}

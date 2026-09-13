import type { Metadata } from "next";
import { PageIntro, ContactBand } from "@/components/brecab-ui";
import { ServiceCatalog } from "@/components/brecab-services";
export const metadata: Metadata = {
  title: "Våra tjänster",
  description:
    "Alla Brecabs tjänster i Boden: markanläggning, dränering, garageinfarter, plattläggning, snöröjning, sandning, gräsklippning, sopning och transport.",
  alternates: { canonical: "/tjanster" },
};
export default function Services() {
  return (
    <main id="main">
      <PageIntro
        label="Våra tjänster"
        title={"MARKEN ÄR VÅRT JOBB.\nBEHOVET ÄR DITT."}
        text="Från en enskild insats till ett samlat entreprenadåtagande. Här hittar du det vi kan hjälpa dig med i Boden, under hela året."
      />
      <ServiceCatalog />
      <ContactBand />
    </main>
  );
}

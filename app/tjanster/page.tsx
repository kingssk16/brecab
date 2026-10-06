import { PageIntro, ContactBand } from "@/components/brecab-ui";
import { ServiceCatalog } from "@/components/brecab-services";
import { mainPageSeo, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/tjanster", mainPageSeo["/tjanster"]);
export default function Services() {
  return (
    <main id="main">
      <PageIntro
        path="/tjanster"
        label="Våra tjänster"
        title={"MARKEN ÄR VÅRT JOBB.\nBEHOVET ÄR DITT."}
        text="Här hittar du det vi kan hjälpa dig med."
      />
      <ServiceCatalog />
      <ContactBand />
    </main>
  );
}

import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";
import { ScrollReveal } from "@/components/scroll-reveal";
import { qualityPolicy, qualityWork } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kvalité",
  description: "Brecabs kvalitetspolicy och kvalitetsarbete."
};

export default function QualityPage() {
  return (
    <ScrollReveal>
      <PolicyPage
        eyebrow="Kvalitet"
        title="Rätt kvalitet, i rätt tid."
        lead="BRECAB:s kvalitetspolicy kännetecknas av en ständig strävan efter att förbättra våra tjänster och skapa trygghet för kunden."
        points={qualityPolicy}
        workTitle="Vårt kvalitetsarbete"
        workPoints={qualityWork}
        image="/projects/loader-side-alt.jpeg"
      />
    </ScrollReveal>
  );
}

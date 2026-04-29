import type { Metadata } from "next";

import { PolicyPage } from "@/components/policy-page";
import { ScrollReveal } from "@/components/scroll-reveal";
import { environmentPolicy, environmentWork } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Miljö",
  description: "Brecabs miljöpolicy och miljöarbete."
};

export default function EnvironmentPage() {
  return (
    <ScrollReveal>
      <PolicyPage
        eyebrow="Miljö"
        title="Ansvar för människor, maskiner och miljö."
        lead="BRECAB:s miljöpolicy bekräftar företagets engagemang för hälsa, säkerhet och en långsiktigt hållbar utveckling."
        points={environmentPolicy}
        workTitle="Vårt miljöarbete"
        workPoints={environmentWork}
        image="/projects/winter-field.jpeg"
      />
    </ScrollReveal>
  );
}

import type { Metadata } from "next";
import { Mountain, Route, Truck } from "lucide-react";

import { ServiceCard3D } from "@/components/3d/service-card";
import { RadialSeasonServices } from "@/components/radial-season-services";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Tjänster",
  description: "Markarbete, maskintjänster och transport från Brecab."
};

const services = [
  {
    title: "Markarbete",
    text: "Gräsytor, grusytor, dräneringar, plattläggning, kantsten och grundarbete där precision avgör slutresultatet.",
    metric: "01 / Earthworks",
    icon: Mountain
  },
  {
    title: "Maskintjänster",
    text: "Modern hjullastare, snöblad, flipperskopa och erfaren förare redo för produktion och jour.",
    metric: "02 / Machinery",
    icon: Route
  },
  {
    title: "Transport",
    text: "Snötransport, materialflöden, massor och samordning så projektet håller rytmen.",
    metric: "03 / Transport",
    icon: Truck
  }
];

export default function ServicesPage() {
  return (
    <ScrollReveal>
      <main className="min-h-screen bg-background pb-24">
        <RadialSeasonServices />
        <section className="mx-auto grid max-w-7xl items-end gap-10 px-4 pt-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-[0.35em] text-primary">Tjänster</p>
            <h1 className="reveal mt-4 font-display text-5xl font-bold leading-none sm:text-7xl">
              Entreprenad med kontroll i varje lager.
            </h1>
          </div>
          <p className="reveal max-w-2xl text-base leading-8 text-muted-foreground">
            Brecab utför arbeten åt kunder stora som små: kommuner, landsting,
            företag, bostadsrättsföreningar och privatpersoner.
          </p>
        </section>
        <section className="mx-auto mt-16 grid max-w-7xl gap-5 px-4 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard3D
              key={service.title}
              title={service.title}
              text={service.text}
              metric={service.metric}
            >
              <service.icon size={128} strokeWidth={1} className="text-primary" />
            </ServiceCard3D>
          ))}
        </section>
      </main>
    </ScrollReveal>
  );
}

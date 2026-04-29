import type { Metadata } from "next";
import Image from "next/image";
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

const fleet = [
  {
    name: "Volvo L60H",
    role: "Hjullastare för snöröjning, lastning och markarbete.",
    image: "/projects/loader-side.jpeg",
    tag: "Vinter / Mark"
  },
  {
    name: "Volvo L60H",
    role: "Extra maskinkapacitet för parallella uppdrag och beredskap.",
    image: "/projects/loader-front.jpeg",
    tag: "Beredskap"
  },
  {
    name: "Volvo L60E",
    role: "Stabil hjullastare för service, materialhantering och ytarbeten.",
    image: "/projects/l60h-detail.jpeg",
    tag: "Lastning"
  },
  {
    name: "Mercedes Actros 2551",
    role: "Lastbil för transport, massor och logistik mellan arbetsplatser.",
    image: "/projects/loader-rear.jpeg",
    tag: "Transport"
  },
  {
    name: "Cat 301.8",
    role: "Kompakt grävare för dränering, finplanering och trånga ytor.",
    image: "/projects/field-clear.jpeg",
    tag: "Grävning"
  }
];

export default function ServicesPage() {
  return (
    <ScrollReveal>
      <main className="min-h-screen pb-24">
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
        <section className="mx-auto mt-20 max-w-7xl px-4">
          <div className="reveal mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Maskinpark</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
              Maskiner för året runt-drift.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Brecab kombinerar hjullastare, transport och kompakt grävkapacitet
              för att kunna växla snabbt mellan vinterunderhåll, markarbete och logistik.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {fleet.map((machine) => (
              <article
                key={`${machine.name}-${machine.tag}`}
                className="reveal hover-card-3d group overflow-hidden rounded-md border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-md bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary backdrop-blur">
                    {machine.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-bold">{machine.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{machine.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </ScrollReveal>
  );
}

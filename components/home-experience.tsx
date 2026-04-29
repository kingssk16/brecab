"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, ShieldCheck, Truck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { oldSiteMessages, serviceExamples } from "@/lib/site-content";

export function HomeExperience() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1.05, 1]);

  return (
    <ScrollReveal>
      <main className="bg-background">
        <section className="relative min-h-[100svh] overflow-hidden noise">
          <motion.div style={{ scale: imageScale }} className="absolute inset-0 hero-mask">
            <Image
              src="/projects/loader-side.jpeg"
              alt="Brecab hjullastare i vintermiljö"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/20" />
          <div className="absolute inset-0 industrial-grid opacity-50" />

          <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1600px] items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8">
            <motion.div style={{ y: heroY }} className="max-w-3xl">
              <p className="reveal mb-5 text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Markarbete / Maskin / Transport
              </p>
              <h1 className="reveal font-display text-5xl font-bold leading-[0.95] sm:text-7xl xl:text-8xl">
                Brecab
              </h1>
              <p className="reveal mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                {oldSiteMessages.intro}
              </p>
              <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Starta projekt <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/projects">Se arbeten</Link>
                </Button>
              </div>
            </motion.div>

            <div className="reveal hover-card-3d animate-float-soft relative h-[360px] min-h-[280px] overflow-hidden rounded-md border border-white/10 shadow-machine sm:h-[460px] lg:h-[min(70svh,620px)]">
              <Image
                src="/projects/loader-front.jpeg"
                alt="Brecab plogmaskin framifrån"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
                  Boden / Vinterberedskap
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Riktig maskinkraft. Inga kompromisser.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1600px] gap-4 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-20">
          {[
            ["Respons", "Jourklar maskinkapacitet när väder och produktion kräver det.", Gauge],
            ["Säkerhet", "Tydliga metoder, rätt maskin och kontinuerlig riskbedömning.", ShieldCheck],
            ["Logistik", "Transporter och arbetsflöden planeras för låg friktion.", Truck]
          ].map(([title, text, Icon]) => (
            <article key={title as string} className="reveal hover-card-3d rounded-md border border-border bg-card p-6">
              <Icon className="mb-8 text-primary" size={26} />
              <h2 className="font-display text-2xl font-bold">{title as string}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text as string}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto grid w-full max-w-[1600px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_0.25fr] lg:px-8 lg:py-20">
          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Från gamla Brecab
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
              {oldSiteMessages.headline}
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
              Nedan följer ett antal exempel på olika typer av arbete som vi utför.
              För ytterligare arbetstyper, se tjänster eller kontakta oss.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {serviceExamples.map((service) => (
                <div
                  key={service}
                  className="hover-card-3d rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
          <aside className="reveal grid gap-4 lg:block lg:space-y-4">
            {[oldSiteMessages.sideOneTitle, oldSiteMessages.sideTwoTitle].map((title, index) => (
              <div key={title} className="hover-card-3d rounded-md border border-border bg-card p-5">
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {index === 0 ? oldSiteMessages.sideOne : oldSiteMessages.sideTwo}
                </p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </ScrollReveal>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

import { ScrollReveal } from "@/components/scroll-reveal";
import { oldSiteMessages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Om Brecab",
  description: "Historien och arbetsmetoden bakom Brecab."
};

const timeline = [
  ["Start", "En liten maskinentreprenör med fokus på praktisk problemlösning."],
  ["Maskinpark", "Investering i robust utrustning för mark, snö och transport."],
  ["Idag", "Brecab arbetar med precision, snabb respons och tydliga processer."]
];

export default function AboutPage() {
  return (
    <ScrollReveal>
      <main className="min-h-screen px-4 pb-24 pt-32">
        <section className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-[0.35em] text-primary">Om oss</p>
            <h1 className="reveal mt-4 font-display text-5xl font-bold leading-none sm:text-7xl">
              Lugn precision i ett tungt landskap.
            </h1>
          </div>
          <p className="reveal text-base leading-8 text-muted-foreground">
            {oldSiteMessages.intro}
          </p>
        </section>
        <section className="mx-auto mt-16 grid max-w-7xl gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal hover-card-3d relative min-h-[520px] overflow-hidden rounded-md border border-border">
            <Image src="/projects/loader-rear.jpeg" alt="Brecab maskin bakifran" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="space-y-4">
            <article className="reveal hover-card-3d rounded-md border border-border bg-card p-6">
              <h2 className="font-display text-2xl font-bold">{oldSiteMessages.promise}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {oldSiteMessages.sideOne}
              </p>
            </article>
            {timeline.map(([label, text], index) => (
              <article key={label} className="reveal hover-card-3d rounded-md border border-border bg-card p-6">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{label}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </ScrollReveal>
  );
}

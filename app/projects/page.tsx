import type { Metadata } from "next";

import { ProjectGrid } from "@/components/project-grid";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Projekt",
  description: "Brecabs projekt och maskinbilder fran verkliga uppdrag."
};

export default function ProjectsPage() {
  return (
    <ScrollReveal>
      <main className="min-h-screen px-4 pb-24 pt-32">
        <section className="mx-auto mb-14 max-w-7xl">
          <p className="reveal text-xs font-bold uppercase tracking-[0.35em] text-primary">Projekt</p>
          <h1 className="reveal mt-4 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">
            Riktiga bilder, byggda för att kännas filmiska.
          </h1>
        </section>
        <section className="mx-auto max-w-7xl">
          <ProjectGrid />
        </section>
      </main>
    </ScrollReveal>
  );
}

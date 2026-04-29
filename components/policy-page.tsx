import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function PolicyPage({
  eyebrow,
  title,
  lead,
  points,
  workTitle,
  workPoints,
  image = "/projects/l60h-detail.jpeg"
}: {
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
  workTitle: string;
  workPoints: string[];
  image?: string;
}) {
  return (
    <main className="min-h-screen px-4 pb-24 pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.62fr_0.38fr]">
        <div>
          <p className="reveal text-xs font-bold uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>
          <h1 className="reveal mt-4 font-display text-5xl font-bold leading-none sm:text-7xl">
            {title}
          </h1>
          <p className="reveal mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            {lead}
          </p>
        </div>
        <div className="reveal hover-card-3d relative min-h-[360px] overflow-hidden rounded-md border border-border">
          <Image src={image} alt={title} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
        </div>
      </section>
      <section className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-[1fr_0.42fr]">
        <div className="reveal hover-card-3d rounded-md border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-3xl font-bold">{eyebrow}</h2>
          <div className="mt-6 grid gap-4">
            {points.map((point) => (
              <p key={point} className="text-sm leading-7 text-muted-foreground">
                {point}
              </p>
            ))}
          </div>
        </div>
        <aside className="reveal hover-card-3d rounded-md border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">{workTitle}</h2>
          <div className="mt-5 space-y-4">
            {workPoints.map((point) => (
              <p key={point} className="text-sm leading-7 text-muted-foreground">
                {point}
              </p>
            ))}
          </div>
          <Button asChild className="mt-8 w-full">
            <Link href="/contact">Kontakta Brecab</Link>
          </Button>
        </aside>
      </section>
    </main>
  );
}

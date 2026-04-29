import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta Brecab för markarbete, maskintjänster och transport i Boden."
};

export default function ContactPage() {
  return (
    <ScrollReveal>
      <main className="min-h-screen px-4 pb-24 pt-32">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="reveal text-xs font-bold uppercase tracking-[0.35em] text-primary">Kontakt</p>
            <h1 className="reveal mt-4 font-display text-5xl font-bold leading-none sm:text-7xl">
              Berätta vad som ska flyttas, formas eller hållas öppet.
            </h1>
            <div className="reveal mt-10 space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-3"><Phone size={18} className="text-primary" /> För personlig rådgivning och kostnadsförslag</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-primary" /> info@brecab.se</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Boden</p>
            </div>
          </div>
          <div className="reveal hover-card-3d rounded-md border border-border bg-card p-6 shadow-machine md:p-8">
            <ContactForm />
          </div>
        </section>
        <section className="mx-auto mt-16 max-w-7xl">
          <div className="reveal hover-card-3d relative overflow-hidden rounded-md border border-border bg-card">
            <iframe
              title="Karta över Boden"
              src="https://www.openstreetmap.org/export/embed.html?bbox=21.60%2C65.78%2C21.78%2C65.88&layer=mapnik&marker=65.8252%2C21.6886"
              className="h-[420px] w-full border-0 grayscale"
              loading="lazy"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
              <div className="animate-bounce-soft rounded-md border border-primary/40 bg-background/95 px-4 py-2 text-sm font-bold shadow-machine backdrop-blur">
                Brecab / Boden
              </div>
              <MapPin className="-mt-1 fill-primary text-primary drop-shadow-lg" size={42} />
            </div>
          </div>
        </section>
      </main>
    </ScrollReveal>
  );
}

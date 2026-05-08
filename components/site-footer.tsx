import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const services = ["Markarbete", "Maskintjänster", "Transport", "Snöröjning"];

const links = [
  { href: "/services", label: "Tjänster" },
  { href: "/projects", label: "Projekt" },
  { href: "/about", label: "Om oss" },
  { href: "/quality", label: "Kvalitet" },
  { href: "/environment", label: "Miljö" },
  { href: "/contact", label: "Kontakt" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/70 px-4 py-12 backdrop-blur-xl sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="footer-reveal max-w-xl">
          <Link
            href="/"
            className="logo-3d block w-[220px] max-w-full rounded-md border border-white/15 bg-white p-2 shadow-machine"
          >
            <Image
              src="/brecab-logo.png"
              alt="Brecab"
              width={638}
              height={182}
              sizes="220px"
              className="h-auto w-full"
            />
          </Link>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
            Brecab utför markarbete, maskintjänster, snöröjning och transport i Boden
            med tydlig planering, rätt maskinkapacitet och hög kvalitet i varje uppdrag.
          </p>
        </div>

        <div className="footer-reveal">
          <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Kontakt</h2>
          <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail size={17} className="shrink-0 text-primary" />
              info@brecab.se
            </p>
            <a
              href="tel:+46702532035"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <Phone size={17} className="shrink-0 text-primary" />
              Anders Eriksson, +46 70-253 20 35
            </a>
            <a
              href="tel:+46705466968"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <Phone size={17} className="shrink-0 text-primary" />
              Peter Eriksson, +46 70-546 69 68
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={17} className="shrink-0 text-primary" />
              Boden
            </p>
          </div>
        </div>

        <div className="footer-reveal">
          <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Tjänster</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer-reveal">
          <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Genvägar</h2>
          <ul className="mt-5 grid gap-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-muted-foreground transition hover:translate-x-1 hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-reveal mx-auto mt-10 flex w-full max-w-[1600px] flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Brecab. Alla rättigheter förbehållna.</p>
        <p>Entreprenad, maskin och transport i Norrbotten.</p>
      </div>
    </footer>
  );
}

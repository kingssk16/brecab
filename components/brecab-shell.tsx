"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, MapPin, ArrowRight } from "lucide-react";
export function Wordmark() {
  return (
    <span className="brand-logo">
      <Image
        src="/brecab-official-logo.png"
        alt="BRECAB"
        width={638}
        height={182}
        priority
      />
    </span>
  );
}
const links = [
  ["/tjanster", "Våra tjänster"],
  ["/om-oss", "Om Brecab"],
  ["/kvalitet", "Kvalitet"],
  ["/miljo", "Miljö"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>
            <MapPin size={12} aria-hidden="true" /> BODEN, NORRBOTTEN
          </span>
          <span>Maskin & markentreprenad. Året runt.</span>
          <a href="mailto:info@brecab.se">
            info@brecab.se <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" aria-label="BRECAB – startsida">
            <Wordmark />
          </Link>
          <nav aria-label="Huvudmeny" className="desktop-nav">
            {links.map(([url, text]) => (
              <Link
                key={url}
                href={url}
                aria-current={pathname.startsWith(url) ? "page" : undefined}
              >
                {text}
              </Link>
            ))}
          </nav>
          <Link className="button button-brand header-contact" href="/kontakt">
            Prata med oss <ArrowUpRight size={18} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Stäng menyn" : "Öppna menyn"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Mobilmeny">
            {[...links, ["/kontakt", "Kontakta oss"]].map(([url, text]) => (
              <Link key={url} href={url} onClick={() => setOpen(false)}>
                {text}
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="BRECAB – startsida">
              <Wordmark />
            </Link>
            <p>
              Marken under fötterna.
              <br />
              Tryggheten i att jobbet blir gjort.
            </p>
            <span className="footer-location">
              <MapPin size={16} /> Boden, Norrbotten
            </span>
          </div>
          <div>
            <h2>Hitta rätt</h2>
            {links.map(([url, text]) => (
              <Link key={url} href={url}>
                {text}
              </Link>
            ))}
          </div>
          <div>
            <h2>Vad behöver du hjälp med?</h2>
            <p>Stort eller litet. Börja med att berätta.</p>
            <Link className="footer-email" href="mailto:info@brecab.se">
              info@brecab.se <ArrowUpRight size={20} />
            </Link>
            <Link className="text-link" href="/kontakt">
              Till kontaktsidan <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BRECAB</span>
          <span>Vi gör jobbet åt er.</span>
          <Link href="/miljo">
            Med omtanke om vår omgivning <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

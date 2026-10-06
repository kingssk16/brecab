import Link from "next/link";
import { Eyebrow } from "@/components/brecab-ui";
import type { services } from "@/lib/brecab-content";

export function ServiceFaq({ service }: { service: (typeof services)[number] }) {
  const subject = service.title.toLocaleLowerCase("sv");
  return (
    <section className="faq-section">
      <div className="container faq-grid">
        <div>
          <Eyebrow>BRA ATT VETA</Eyebrow>
          <h2>FRÅGOR OM DITT UPPDRAG.</h2>
          <p className="faq-intro">Här är några saker som är bra att veta innan vi planerar arbetet tillsammans.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>Vad behöver ni veta om {subject}?</summary>
            <p>{service.prompt} Ange också var i Boden arbetet ska utföras och om du har en önskad tidpunkt.</p>
          </details>
          <details>
            <summary>Hur får jag ett kostnadsförslag?</summary>
            <p>Ring <a href="tel:+46706602076">070-6602076</a> eller <Link href={`/kontakt?tjanst=${service.slug}`}>skicka en förfrågan om {subject}</Link>. Vi går igenom behov, omfattning och förutsättningar innan vi kommer överens om arbetet.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

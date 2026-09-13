import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, Eyebrow } from "@/components/brecab-ui";
import { InquiryForm } from "@/components/brecab-inquiry";
import { services } from "@/lib/brecab-content";
export const metadata: Metadata = {
  title: "Kontakta oss",
  description:
    "Kontakta BRECAB i Boden för personlig rådgivning och kostnadsförslag. Mejla info@brecab.se om ditt markarbete, vinterunderhåll eller skötseluppdrag.",
  alternates: { canonical: "/kontakt" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ tjanst?: string; tjanster?: string }>;
}) {
  const { tjanst, tjanster } = await searchParams;
  const selected = Array.from(
    new Set(
      (tjanster || tjanst || "")
        .split(",")
        .filter((slug) => services.some((s) => s.slug === slug)),
    ),
  );
  return (
    <main id="main">
      <PageIntro
        label="Kontakta oss"
        title={"ETT BRA JOBB BÖRJAR\nMED ETT SAMTAL."}
        text="Stora planer eller ett litet jobb? Hör av dig för personlig rådgivning, ett kostnadsförslag eller en diskussion om dina behov."
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <Eyebrow>VI HÖRS</Eyebrow>
            <h2>
              VAD KAN VI
              <br />
              GÖRA FÖR DIG?
            </h2>
            <p>
              Skicka ett mejl och berätta vad du behöver hjälp med. Ju mer vi
              vet om platsen och arbetet, desto bättre kan vi diskutera en
              lösning.
            </p>
            <a className="contact-email" href="mailto:info@brecab.se">
              info@brecab.se <ArrowUpRight size={28} />
            </a>
            <div className="contact-facts">
              <div>
                <span>HÄR FINNS VI</span>Boden, Norrbotten
              </div>
              <div>
                <span>VI ARBETAR MED</span>Privatpersoner, företag,
                bostadsrättsföreningar, kommuner och regioner
              </div>
              <div>
                <span>VÅRT SÄTT ATT ARBETA</span>Rätt kvalitet, i rätt tid, till
                ett konkurrenskraftigt pris.
              </div>
            </div>
          </div>
          <InquiryForm key={selected.join(",")} initialServices={selected} />
        </div>
      </section>
      <section className="faq-section">
        <div className="container faq-grid">
          <div>
            <Eyebrow>BRA ATT VETA</Eyebrow>
            <h2>
              INNAN VI
              <br />
              SÄTTER IGÅNG.
            </h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Kan jag få hjälp med ett mindre arbete?</summary>
              <p>
                Ja. Brecab utför både stora och små uppdrag. Beskriv vad du
                behöver hjälp med så går vi igenom förutsättningarna
                tillsammans.
              </p>
            </details>
            <details>
              <summary>Arbetar ni även åt privatpersoner?</summary>
              <p>
                Ja. Vi arbetar åt privatpersoner, företag,
                bostadsrättsföreningar, kommuner och regioner.
              </p>
            </details>
            <details>
              <summary>Vad behöver ni veta för ett kostnadsförslag?</summary>
              <p>
                Berätta vad du vill få gjort, var arbetet ska utföras och gärna
                ungefärlig omfattning och önskad tidpunkt. Vi diskuterar sedan
                dina behov och ett kostnadsförslag.
              </p>
            </details>
            <details>
              <summary>Kan flera tjänster ingå i samma uppdrag?</summary>
              <p>
                Vi ser entreprenadskapet som ett helhetsåtagande. Välj gärna
                flera tjänster i förfrågan, så diskuterar vi hur de kan
                samordnas och vad som ska ingå.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

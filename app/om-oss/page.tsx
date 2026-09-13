import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, ContactBand, Eyebrow } from "@/components/brecab-ui";
export const metadata: Metadata = {
  title: "Om Brecab",
  description:
    "BRECAB är ett entreprenadföretag inom maskin och markanläggning i Boden. Vi ser entreprenadskapet som ett helhetsåtagande – för stora och små kunder.",
  alternates: { canonical: "/om-oss" },
};
export default function About() {
  return (
    <main id="main">
      <PageIntro
        label="Om Brecab"
        title={"VI STÄRKER DIN\nSVAGASTE LÄNK."}
        text="Vi är BRECAB. Ett entreprenadföretag inom maskin och markanläggning, hemma i Boden. Vi gör jobbet åt dig."
      />
      <div className="about-intro-image">
        <Image
          src="/projects/loader-side.jpeg"
          alt="Brecabs hjullastare i vinterskogen"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <section className="section">
        <div className="container about-text-grid">
          <div>
            <Eyebrow>ETT HELHETSÅTAGANDE</Eyebrow>
            <h2>
              DU SKA KUNNA
              <br />
              LITA PÅ ATT
              <br />
              DET BLIR GJORT.
            </h2>
          </div>
          <div>
            <p>
              Vi ser entreprenadskapet som ett helhetsåtagande. Du som kund ska
              inte behöva vara orolig för kvaliteten på jobben, om det är för
              halkigt på trottoarerna eller om det behöver snöröjas. Det är vi
              som entreprenörer som ansvarar för att vårt åtagande sköts enligt
              överenskommelsen.
            </p>
            <p>
              När vi utför ett arbete eller en tjänst ser vi till att det sker i
              rätt tid, till en kvalitet som uppfyller och helst överträffar
              dina formulerade förväntningar och till ett konkurrenskraftigt
              pris.
            </p>
            <Link href="/kvalitet" className="text-link">
              Så arbetar vi med kvalitet <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container about-text-grid">
          <div>
            <Eyebrow light>ERFARENHET SOM GÖR SKILLNAD</Eyebrow>
            <h2>
              ETT BRA JOBB.
              <br />
              TILL EN RIMLIG
              <br />
              KOSTNAD.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              En bra entreprenör behöver inte kosta skjortan. Det handlar om att
              utföra jobben på ett kostnadseffektivt och kvalitativt sätt. Detta
              kan vi erbjuda tack vare vår långa erfarenhet i branschen och vår
              kunniga personal.
            </p>
            <p>
              Vi utför arbeten åt alla kunder, stora som små: kommuner,
              regioner, företag, bostadsrättsföreningar och privatpersoner.
              Inget arbete är för stort och inget är heller för litet.
            </p>
            <div className="client-types">
              {[
                "Privatpersoner",
                "Företag",
                "Bostadsrättsföreningar",
                "Kommuner & regioner",
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

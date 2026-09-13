import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ContactBand } from "@/components/brecab-ui";
export const metadata: Metadata = {
  title: "Miljö, hälsa & säkerhet",
  description:
    "Läs Brecabs miljöpolicy och miljöarbete: resurshushållning, arbetsmiljö, säkerhet och ständiga förbättringar för en långsiktigt hållbar utveckling.",
  alternates: { canonical: "/miljo" },
};
export default function Environment() {
  return (
    <main id="main">
      <PageIntro
        label="Miljö"
        title={"VI JOBBAR HÄR.\nVI BRYR OSS OM HÄR."}
        text="Hälsa, säkerhet och omtanke om miljön är naturliga delar av vårt sätt att arbeta. Vårt miljöarbete omfattar hela verksamheten."
      />
      <section className="section">
        <div className="container policy-layout">
          <aside className="policy-aside">
            <p>VÅRT ANSVAR</p>
            <a href="#policy">Vår miljöpolicy</a>
            <a href="#principer">Våra miljöprinciper</a>
            <a href="#arbete">Vårt miljöarbete</a>
            <Link href="/kvalitet">Läs också om vårt kvalitetsarbete ↗</Link>
          </aside>
          <article className="policy-copy">
            <h2 id="policy">VÅR MILJÖPOLICY</h2>
            <p>
              BRECABs miljöpolicy bekräftar företagets engagemang för att
              säkerställa människors hälsa och säkerhet och att värna om miljön.
              Den omfattar alla anställda i sina arbeten och alla
              affärsverksamheter som tillhör BRECAB.
            </p>
            <ul>
              <li>
                Vi anser att god hälsa, bra arbetsmiljö och god omgivningsmiljö
                är naturliga delar i vårt sätt att styra all vår
                affärsverksamhet.
              </li>
              <li>
                Vi utfärdar gemensamma standarder för hälsa, säkerhet och miljö
                och kräver att alla delar av verksamheten efterlever dessa samt
                lokalt tillämpliga myndighetsföreskrifter.
              </li>
              <li>
                Vi sätter mål för hälsa, säkerhet och miljö och håller cheferna
                i verksamheten ansvariga för att uppnå dessa genom ständiga
                förbättringar.
              </li>
              <li>
                Vi utbildar, motiverar och vägleder våra anställda till att
                arbeta ansvarsfullt för hälsa, säkerhet och miljö.
              </li>
              <li>
                Vi strävar efter att minimera avfallsmängder, främja
                miljöanpassat kretsloppstänkande och hushålla med material,
                råvaror och energi.
              </li>
              <li>
                Vi utför våra tjänster på ett säkert sätt och med hänsyn till
                människor, egendom och miljö.
              </li>
              <li>
                Valet och kraven på leverantörer och underentreprenörer präglas
                av vår syn på miljön, så att de i samverkan med oss kan bidra
                till våra miljömål.
              </li>
            </ul>
            <h2 id="principer">MILJÖHÄNSYN I VARJE BESLUT</h2>
            <ul>
              <li>
                Miljöhänsyn ska tas i varje beslut på alla nivåer i
                organisationen.
              </li>
              <li>
                Miljöarbetet ska bedrivas aktivt och framsynt. Det ska leda till
                ständig förbättring och ha högre ambitioner än lagstiftningens
                krav.
              </li>
              <li>
                Vår verksamhet ska styras av optimal hushållning med råvaror och
                energi, begränsningar av miljöstörande utsläpp, hänsyn till
                natur- och kulturvärden samt främjande av kretsloppsprincipen.
              </li>
              <li>
                En öppen dialog ska föras med intressenter, medarbetare, kunder,
                myndigheter och allmänhet om verksamhetens miljöpåverkan.
              </li>
            </ul>
            <h2 id="arbete">VÅRT MILJÖARBETE</h2>
            <p>
              BRECABs övergripande, långsiktiga ambition är att miljöarbetet ska
              bidra till en långsiktigt hållbar utveckling.
            </p>
            <p>
              Vår ständiga strävan är att vidareutvecklas inom miljöområdet,
              finna nya miljöanpassade metoder och material och öka vår kunskap
              om miljön.
            </p>
            <p>
              Miljömedvetenheten inom företaget ökar successivt och nya idéer
              kommer fram allt oftare. Vi har en ständig kommunikation med våra
              medarbetare om miljöarbetet och låter dem vara involverade i
              verksamheten.
            </p>
            <p>
              Våra medarbetare är engagerade och öppna för att prova och
              utveckla nya metoder som minskar belastningen på vår miljö.
            </p>
          </article>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

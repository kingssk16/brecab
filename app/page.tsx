import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  MoveUpRight,
  Snowflake,
  Truck,
  Shovel,
  Sprout,
} from "lucide-react";
import { ContactBand, Eyebrow, ServiceFeature } from "@/components/brecab-ui";
import { mainPageSeo, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/", mainPageSeo["/"]);
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <Image
          className="hero-photo"
          src="/projects/loader-side.jpeg"
          alt="Brecabs gula hjullastare med snöplog i ett vinterlandskap i Boden"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow light>DIN ENTREPRENÖR I BODEN</Eyebrow>
            <h1>
              MARKARBETE.
              <br />
              <span>SNÖRÖJNING.</span>
              <span className="hero-location">I BODEN. ÅRET RUNT.</span>
            </h1>
            <p>
              Brecab hjälper dig med markarbete, snöröjning och yttre skötsel i Boden.
              Från första spadtaget till vinterns sista snöfall – vi gör jobbet åt dig.
            </p>
            <div className="hero-actions">
              <Link href="/kontakt" className="button button-brand">
                Berätta om ditt projekt <ArrowUpRight size={20} />
              </Link>
              <Link href="/tjanster" className="button button-outline">
                Våra tjänster <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#tjanster">
              <span className="scroll-icon">
                <ArrowDown size={18} />
              </span>{" "}
              Upptäck vad vi kan göra
            </a>
          </div>
        </div>
      </section>
      <div className="trade-strip">
        <div className="container">
          <span>
            <Shovel size={19} /> MARK & ANLÄGGNING
          </span>
          <span>
            <Snowflake size={20} /> VINTERUNDERHÅLL
          </span>
          <span>
            <Sprout size={20} /> YTTRE SKÖTSEL
          </span>
          <span>
            <Truck size={21} /> TRANSPORT
          </span>
        </div>
      </div>
      <section className="section services-section" id="tjanster">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>DET HÄR KAN VI HJÄLPA DIG MED</Eyebrow>
              <h2>
              MARKENTREPRENAD.
              <br />I ALLA SÄSONGER.
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                En entreprenör för marken runt dig. Vi hjälper privatpersoner,
                företag, bostadsrättsföreningar och offentlig verksamhet.
              </p>
              <Link className="text-link" href="/tjanster">
                Se alla våra tjänster <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
          <div className="feature-grid">
            <ServiceFeature
              number="01"
              title="Mark & anläggning"
              text="Ett ordentligt grundarbete gör skillnad. Från dränering och garageinfarter till färdiga gräs- och grusytor."
              image="/projects/markanlaggning-hjullastare.png"
              alt="Hjullastare som arbetar med marken intill ett flerbostadshus"
              href="/tjanster#mark"
            />
            <ServiceFeature
              number="02"
              title="Vinterunderhåll"
              text="När vintern kommer behöver vardagen fortsätta. Vi hjälper till med snöröjning, sandning och snötransport."
              image="/projects/snow-road.jpeg"
              alt="Hjullastare med plog på en snötäckt väg"
              href="/tjanster#vinter"
            />
            <ServiceFeature
              number="03"
              title="Yttre skötsel"
              text="Välskötta ytor att trivas på. Gräsklippning, sopning och skötsel som håller utemiljön i ordning."
              image="/projects/grasklippning.png"
              alt="Gräsklippare vid en välskött gräsyta"
              href="/tjanster#skotsel"
            />
          </div>
          <Link className="transport-row" href="/tjanster/transport">
            <Truck size={25} />
            <span>Behöver du hjälp med transport?</span>
            <span>
              Vi hjälper dig vidare <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </section>
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-photo">
            <Image
              src="/projects/loader-dusk.jpeg"
              alt="Brecabs hjullastare med tända arbetsljus i vinterkvällen"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="photo-caption">
              <span>HEMMA I BODEN.</span>
              <span>REDO FÖR JOBBET.</span>
            </div>
          </div>
          <div className="about-copy">
            <Eyebrow light>DET HÄR ÄR BRECAB</Eyebrow>
            <h2>
              REJÄLA MASKINER.
              <br />
              <span>
                ÄNNU REJÄLARE
                <br />
                ENGAGEMANG.
              </span>
            </h2>
            <p>
              Vi är ett entreprenadföretag inom maskin och markanläggning,
              verksamt i Boden. Med lång erfarenhet i branschen och kunnig
              personal tar vi ansvar för hela vårt åtagande.
            </p>
            <p>
              För oss handlar ett bra jobb om rätt kvalitet, rätt tid och ett
              konkurrenskraftigt pris. Och om att du ska känna dig trygg från
              början till slut.
            </p>
            <div className="about-values">
              <span>
                <Check size={17} /> Ett helhetsåtagande
              </span>
              <span>
                <Check size={17} /> Kunnig personal
              </span>
              <span>
                <Check size={17} /> Stora och små uppdrag
              </span>
            </div>
            <Link className="text-link light-link" href="/om-oss">
              Lär känna Brecab <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section approach">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>ETT SAMARBETE SOM FUNGERAR</Eyebrow>
              <h2>
                FRÅN FÖRSTA KONTAKT
                <br />
                TILL ETT VÄL UTFÖRT JOBB.
              </h2>
            </div>
            <p className="heading-aside">
              Inget arbete är för stort.
              <br />
              Och inget är heller för litet.
            </p>
          </div>
          <div className="steps">
            <article>
              <span className="step-no">
                01 <MoveUpRight size={23} />
              </span>
              <h3>Vi lyssnar.</h3>
              <p>
                Berätta vad du behöver hjälp med. Tillsammans går vi igenom
                behov, förutsättningar och omfattning.
              </p>
            </article>
            <article>
              <span className="step-no">
                02 <MoveUpRight size={23} />
              </span>
              <h3>Vi planerar.</h3>
              <p>
                Vi diskuterar ett kostnadsförslag och kommer överens om arbetet,
                så att du vet vad som ska göras.
              </p>
            </article>
            <article>
              <span className="step-no">
                03 <Check size={24} />
              </span>
              <h3>Vi gör jobbet.</h3>
              <p>
                Vi ansvarar för att vårt uppdrag utförs enligt överenskommelsen,
                med omsorg om kvalitet och omgivning.
              </p>
            </article>
          </div>
          <div className="responsibility">
            <Link href="/kvalitet">
              <span>GENOMTÄNKT I VARJE STEG</span>
              <h3>
                Kvalitet som en del av jobbet. <ArrowUpRight />
              </h3>
              <p>Alla medarbetare har ansvar för resultatet.</p>
            </Link>
            <Link href="/miljo">
              <span>MED BLICKEN FRAMÅT</span>
              <h3>
                Omtanke om vår omgivning. <ArrowUpRight />
              </h3>
              <p>Vårt arbete för hälsa, säkerhet och miljö.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container faq-grid">
          <div>
            <Eyebrow>DIN ENTREPRENÖR I BODEN</Eyebrow>
            <h2>VAD BEHÖVER DU HJÄLP MED?</h2>
            <p className="faq-intro">Vi hjälper privatpersoner, företag, bostadsrättsföreningar, kommuner och regioner med stora och små uppdrag.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Vilka markarbeten utför Brecab?</summary>
              <p>Vi hjälper med <Link href="/tjanster/markanlaggning">markanläggning</Link>, <Link href="/tjanster/dranering">dränering</Link>, <Link href="/tjanster/garageinfarter">garageinfarter</Link>, <Link href="/tjanster/plattlaggning-kantsten">plattläggning och kantsten</Link>, samt gräsytor, grusytor, utgrävning och isolering. Arbetet planeras efter platsen och hur ytan ska användas.</p>
            </details>
            <details>
              <summary>Kan ni hjälpa med snöröjning och sandning?</summary>
              <p>Ja. Vi utför <Link href="/tjanster/snoplogning">snöplogning och snöskottning</Link>, <Link href="/tjanster/halkbekampning">halkbekämpning och sandning</Link> samt <Link href="/tjanster/snotransport">snötransport</Link>. Tillsammans går vi igenom vilka ytor som ska skötas och vad som ska ingå i vinterunderhållet.</p>
            </details>
            <details>
              <summary>Hur får jag ett kostnadsförslag?</summary>
              <p>Ring <a href="tel:+46706602076">070-6602076</a> eller <Link href="/kontakt">berätta om ditt uppdrag</Link>. Ange var arbetet ska utföras, ungefärlig omfattning och önskad tidpunkt, så diskuterar vi behov och förutsättningar med dig.</p>
            </details>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

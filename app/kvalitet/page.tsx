import Link from "next/link";
import { PageIntro, ContactBand } from "@/components/brecab-ui";
import { mainPageSeo, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("/kvalitet", mainPageSeo["/kvalitet"]);
export default function Quality() {
  return (
    <main id="main">
      <PageIntro
        path="/kvalitet"
        label="Kvalitet"
        title={"ETT VÄL UTFÖRT JOBB.\nI VARJE LED."}
        text="Kvalitet är ett gemensamt ansvar. Från planering och ledarskap till den som utför arbetet på plats."
      />
      <section className="section">
        <div className="container policy-layout">
          <aside className="policy-aside">
            <p>VÅRT ANSVAR</p>
            <a href="#policy">Vår kvalitetspolicy</a>
            <a href="#arbete">Vårt kvalitetsarbete</a>
            <Link href="/miljo">Läs också om vårt miljöarbete ↗</Link>
          </aside>
          <article className="policy-copy">
            <h2 id="policy">VÅR KVALITETSPOLICY</h2>
            <p>
              BRECABs kvalitetspolicy kännetecknas av en ständig strävan efter
              att förbättra våra tjänster för att öka deras värde för våra
              kunder. Den omfattar alla anställda i sina arbeten och alla
              affärsverksamheter som tillhör BRECAB.
            </p>
            <ul>
              <li>
                Rätt kvalitet är alla medarbetares ansvar och skapar lönsamhet
                och trygghet för oss alla. Varje medarbetare ska ha den kunskap
                som behövs för att åstadkomma rätt kvalitet i sitt arbete.
              </li>
              <li>
                Totalkvalitet är vår övergripande strategi. Den skapas genom ett
                engagerat ledarskap med målsättningen att genomföra ständiga
                förbättringar och uppnå förväntat resultat.
              </li>
              <li>
                De tjänster vi levererar ska vara kostnadseffektiva, ge
                arbetstillfredsställelse och utföras under säkra förhållanden.
              </li>
              <li>
                Planerad samverkan och systematisk återföring av erfarenheter
                från kunder, leverantörer och utfört arbete gör att vi blir
                effektiva och kan tillgodose våra kunders krav och behov på kort
                och lång sikt.
              </li>
              <li>
                En grundläggande princip är att den som utför arbetet också
                svarar för kvaliteten i arbetet.
              </li>
              <li>
                Vi sätter mål för kvaliteten och håller cheferna i verksamheten
                ansvariga för att uppnå dessa genom ständiga förbättringar.
              </li>
              <li>
                Vårt arbete ska kännetecknas av rätt utförande i alla våra
                åtaganden.
              </li>
              <li>
                Vi skapar förtroende hos våra kunder genom att leverera
                produkter och tjänster med rätt kvalitet, i rätt tid och till
                konkurrensmässiga priser.
              </li>
            </ul>
            <h2 id="arbete">VÅRT KVALITETSARBETE</h2>
            <p>
              Kvalitetsutveckling innebär en ständig strävan efter att förbättra
              våra produkter och tjänster för att öka deras värde för våra
              kunder. Inom BRECAB är detta en uppgift för samtliga medarbetare.
            </p>
            <p>
              Vår ledning styr alla verksamheter med avseende på kvalitet, miljö
              och arbetsmiljö. På så sätt ska vi åstadkomma en effektiv och
              lönsam verksamhet och rätt kvalitet hos slutprodukten.
            </p>
          </article>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}

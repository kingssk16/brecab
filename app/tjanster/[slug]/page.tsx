import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { services, groups } from "@/lib/brecab-content";
import { ContactBand, Eyebrow } from "@/components/brecab-ui";
import { StructuredData } from "@/components/structured-data";
import { ServiceFaq } from "@/components/service-faq";
import { breadcrumbData, serviceData, serviceMetadata, serviceSeo } from "@/lib/seo";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return serviceMetadata(s);
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const group = groups.find((g) => g.id === s.group)!;
  const related = services.filter((item) => item.group === s.group && item.slug !== s.slug);
  return (
    <main id="main">
      <StructuredData data={serviceData(s)} />
      <StructuredData data={breadcrumbData([{ name: "Hem", path: "/" }, { name: "Tjänster", path: "/tjanster" }, { name: s.title, path: `/tjanster/${s.slug}` }])} />
      <section className="detail-hero">
        <div>
          <nav className="breadcrumb" aria-label="Brödsmulor">
            <Link href="/">Hem</Link>
            <span>/</span>
            <Link href="/tjanster">Tjänster</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{s.title}</span>
          </nav>
          <Eyebrow>{group.title}</Eyebrow>
          <h1>{serviceSeo[s.slug].heading.toLocaleUpperCase("sv")}</h1>
          <p>{s.intro}</p>
          <Link
            href={`/kontakt?tjanst=${s.slug}`}
            className="button button-brand"
          >
            Prata med oss om {s.title.toLocaleLowerCase("sv").split(" & ")[0]}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="detail-image">
          <Image
            src={`/projects/${s.image}`}
            alt={s.alt}
            fill
            priority
            sizes="(max-width: 560px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="section">
        <div className="container detail-content">
          <div>
            <Eyebrow>ETT UPPDRAG UTIFRÅN DINA BEHOV</Eyebrow>
            <h2>SÅ KAN VI HJÄLPA DIG.</h2>
            <p>{s.detail}</p>
            <p>
              Vi arbetar i Boden åt privatpersoner, företag, bostadsrättsföreningar,
              kommuner och regioner. Kontakta oss för personlig rådgivning och
              ett kostnadsförslag.
            </p>
            <Link className="text-link" href={`/tjanster#${s.group}`}>
              Alla tjänster inom {group.title.toLocaleLowerCase("sv")}{" "}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <aside className="detail-note">
            <h3>Bra att berätta för oss</h3>
            <p>{s.prompt}</p>
            <Link href={`/kontakt?tjanst=${s.slug}`} className="text-link">
              Berätta om ditt projekt <ArrowUpRight size={18} />
            </Link>
          </aside>
        </div>
      </section>
      <ServiceFaq service={s} />
      {related.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="related-heading">
              <Eyebrow>PLANERA HELA UPPDRAGET</Eyebrow>
              <h2>FLER TJÄNSTER INOM {group.title.toLocaleUpperCase("sv")}.</h2>
            </div>
            <ul className="related-services">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/tjanster/${item.slug}`}><span>{item.title}</span><ArrowUpRight size={20} aria-hidden="true" /></Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <ContactBand />
    </main>
  );
}

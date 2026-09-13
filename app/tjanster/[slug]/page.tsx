import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { services, groups } from "@/lib/brecab-content";
import { ContactBand, Eyebrow } from "@/components/brecab-ui";
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
  return {
    title: s?.title || "Tjänsten hittades inte",
    description: s
      ? `${s.intro} ${s.title} i Boden med BRECAB. Kontakta oss för rådgivning och kostnadsförslag.`
      : undefined,
    alternates: { canonical: `/tjanster/${slug}` },
    openGraph: s
      ? {
          title: `${s.title} | BRECAB i Boden`,
          description: s.intro,
          images: [{ url: `/projects/${s.image}`, alt: s.alt }],
        }
      : undefined,
  };
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
  return (
    <main id="main">
      <section className="detail-hero">
        <div>
          <div className="breadcrumb">
            <Link href="/">Hem</Link>
            <span>/</span>
            <Link href="/tjanster">Tjänster</Link>
          </div>
          <Eyebrow>{group.title}</Eyebrow>
          <h1>{s.title.toLocaleUpperCase("sv")}</h1>
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
              Vi arbetar åt privatpersoner, företag, bostadsrättsföreningar,
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
      <ContactBand />
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbData } from "@/lib/seo";
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container contact-band-inner">
        <div>
          <Eyebrow>VI TAR NÄSTA STEG TILLSAMMANS</Eyebrow>
          <h2>
            VAD SKA VI
            <br />
            GÖRA FÖR DIG?
          </h2>
        </div>
        <div>
          <p>
            En ny uppfart, en snöfri gård eller ett större markarbete? Berätta
            om dina behov så pratar vi om en lösning.
          </p>
          <Link className="button button-dark" href="/kontakt">
            Berätta om ditt projekt <ArrowUpRight size={21} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function PageIntro({
  label,
  title,
  text,
  path,
}: {
  label: string;
  title: string;
  text: string;
  path: string;
}) {
  return (
    <section className="page-intro">
      <StructuredData data={breadcrumbData([{ name: "Hem", path: "/" }, { name: label, path }])} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Brödsmulor">
          <Link href="/">Hem</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{label}</span>
        </nav>
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        <p className="intro-description">{text}</p>
      </div>
    </section>
  );
}
export function ServiceFeature({
  number,
  title,
  text,
  image,
  href,
  alt,
}: {
  number: string;
  title: string;
  text: string;
  image: string;
  href: string;
  alt: string;
}) {
  return (
    <Link href={href} className="service-feature">
      <div className="service-feature-image">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 560px) 100vw, 33vw"
        />
        <span className="service-number">{number}</span>
        <span className="round-arrow">
          <ArrowUpRight size={24} />
        </span>
      </div>
      <div className="service-feature-copy">
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="text-link">
          Utforska tjänsterna <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      images: [project.image]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pb-24">
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">{project.category}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl">
            {project.title}
          </h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.65fr_0.35fr]">
        <div>
          <p className="text-lg leading-9 text-muted-foreground">{project.summary}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Plats", project.location],
              ["Ar", project.year],
              ["Kategori", project.category]
            ].map(([label, value]) => (
              <div key={label} className="hover-card-3d rounded-md border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
                <p className="mt-3 font-display text-xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hover-card-3d rounded-md border border-border bg-card p-6">
          <h2 className="font-display text-2xl font-bold">Nasta steg</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Vill du planera liknande arbete? Skicka en kort beskrivning sa aterkommer
            Brecab med maskinupplagg och tidplan.
          </p>
          <Button asChild className="mt-6 w-full">
            <Link href="/contact">Kontakta Brecab</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

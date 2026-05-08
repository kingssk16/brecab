"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ElementType } from "react";
import {
  ArrowRight,
  Brush,
  CalendarDays,
  Leaf,
  Mountain,
  Route,
  Shovel,
  Snowflake,
  Sun,
  Trees,
  Zap
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SeasonKey = "all" | "winter" | "spring" | "summer" | "autumn";

type Job = {
  title: string;
  text: string;
  image: string;
  icon: ElementType;
};

type Season = {
  id: SeasonKey;
  title: string;
  period: string;
  status: "översikt" | "beredskap" | "planering" | "produktion";
  energy: number;
  icon: ElementType;
  image: string;
  summary: string;
  jobs: Job[];
};

const jobCatalog = {
  snowPlowing: {
    title: "Snöplogning",
    text: "Vägar, planer, infarter och fastighetsytor hålls öppna med rätt maskin för förhållandet.",
    image: "/projects/loader-front.jpeg",
    icon: Snowflake
  },
  sanding: {
    title: "Halkbekämpning / sandning",
    text: "Sandning och beredskap när temperatur och nederbörd gör ytor osäkra.",
    image: "/projects/halkbekampning.png",
    icon: Shovel
  },
  snowTransport: {
    title: "Snötransport",
    text: "Flytt av snömassor och tydlig logistik när ytor måste frigöras snabbt.",
    image: "/projects/sno-transport.png",
    icon: Route
  },
  grading: {
    title: "Hyvling",
    text: "Jämning av vintervägar och packade snöytor för bättre framkomlighet och säkrare underlag.",
    image: "/projects/hyvling.png",
    icon: Shovel
  },
  winterReadiness: {
    title: "Vinterberedskap",
    text: "Genomgång av uppdrag, ytor och prioriteringar innan första snön kommer.",
    image: "/projects/loader-dusk.jpeg",
    icon: Snowflake
  },
  sweeping: {
    title: "Sopning",
    text: "Rengöring efter vinter, sand och grus på ytor där ordning och framkomlighet behövs.",
    image: "/projects/sopning.png",
    icon: Brush
  },
  driveways: {
    title: "Garageinfarter",
    text: "Ombyggnad, urgrävning och förberedande markarbete för starka infarter.",
    image: "/projects/uppfart.png",
    icon: Mountain
  },
  drainage: {
    title: "Dränering",
    text: "Markförberedelser och vattenhantering för torrare och mer hållbara ytor.",
    image: "/projects/dranering.png",
    icon: Shovel
  },
  earthworks: {
    title: "Markanläggning",
    text: "Grusytor, gräsytor, plattläggning och kantsten där finish och funktion ska möta varandra.",
    image: "/projects/markanlaggning.png",
    icon: Mountain
  },
  playgrounds: {
    title: "Lekparksbyggnationer",
    text: "Noggranna marklager och ytor där säkerhet, dränering och form spelar roll.",
    image: "/projects/lekplatsbyggnationer.png",
    icon: Trees
  },
  mowing: {
    title: "Gräsklippning",
    text: "Skötsel av större grönytor för kommuner, företag och bostadsrättsföreningar.",
    image: "/projects/grasklippning.png",
    icon: Brush
  },
  gravelSurfaces: {
    title: "Grusytor",
    text: "Justering, materialflytt och bärlager för ytor som ska hålla rätt nivå och funktion.",
    image: "/projects/grusytor.png",
    icon: Mountain
  },
  transport: {
    title: "Transport",
    text: "Materialflöden och massor flyttas med tydlig planering så arbetsplatsen håller rytmen.",
    image: "/projects/transport.png",
    icon: Route
  }
} satisfies Record<string, Job>;

const winterJobs: Job[] = [
  jobCatalog.snowPlowing,
  jobCatalog.sanding,
  jobCatalog.snowTransport,
  jobCatalog.grading,
  jobCatalog.winterReadiness
];

const springJobs: Job[] = [
  jobCatalog.sanding,
  jobCatalog.snowTransport,
  jobCatalog.sweeping
];

const summerJobs: Job[] = [
  jobCatalog.driveways,
  jobCatalog.drainage,
  jobCatalog.earthworks,
  jobCatalog.playgrounds,
  jobCatalog.mowing,
  jobCatalog.gravelSurfaces,
  jobCatalog.transport
];

const autumnJobs: Job[] = [
  jobCatalog.winterReadiness,
  jobCatalog.gravelSurfaces,
  jobCatalog.transport,
  jobCatalog.sanding,
  jobCatalog.earthworks
];

const allJobs = Object.values(jobCatalog);

const seasons: Season[] = [
  {
    id: "all",
    title: "Alla",
    period: "Hela året",
    status: "översikt",
    energy: 100,
    icon: CalendarDays,
    image: "/projects/loader-side.jpeg",
    summary: "Se hela spannet av arbeten Brecab kan utföra över året.",
    jobs: allJobs
  },
  {
    id: "winter",
    title: "Vinter",
    period: "Nov - Apr",
    status: "beredskap",
    energy: 96,
    icon: Snowflake,
    image: "/projects/loader-front.jpeg",
    summary: "Snabb vinterinsats i Boden med plogning, halkbekämpning, snötransport och beredskap.",
    jobs: winterJobs
  },
  {
    id: "spring",
    title: "Vår",
    period: "Apr - Jun",
    status: "planering",
    energy: 78,
    icon: Leaf,
    image: "/projects/sopning.png",
    summary: "Vårens uppdrag samlar sandning, snötransport och sopning när vädret växlar.",
    jobs: springJobs
  },
  {
    id: "summer",
    title: "Sommar",
    period: "Jun - Sep",
    status: "produktion",
    energy: 88,
    icon: Sun,
    image: "/projects/loader-side.jpeg",
    summary: "Säsongen för infarter, dränering, markanläggning, grönytor, grusytor och transport.",
    jobs: summerJobs
  },
  {
    id: "autumn",
    title: "Höst",
    period: "Sep - Nov",
    status: "planering",
    energy: 82,
    icon: Trees,
    image: "/projects/l60h-detail.jpeg",
    summary: "Höstens fokus är vinterberedskap, grusytor, transport, sandning och markanläggning.",
    jobs: autumnJobs
  }
];

const statusLabel: Record<Season["status"], string> = {
  översikt: "ÖVERSIKT",
  beredskap: "BEREDSKAP",
  planering: "PLANERING",
  produktion: "PRODUKTION"
};

export function RadialSeasonServices() {
  const [activeId, setActiveId] = useState<SeasonKey>("all");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const timer = window.setInterval(() => {
      setRotationAngle((value) => (value + 0.2) % 360);
    }, 50);

    return () => window.clearInterval(timer);
  }, [autoRotate]);

  const activeSeason = useMemo(
    () => seasons.find((season) => season.id === activeId) ?? seasons[0],
    [activeId]
  );

  const selectSeason = (season: Season, index: number) => {
    setActiveId(season.id);
    setAutoRotate(false);
    setRotationAngle(270 - (index / seasons.length) * 360);
  };

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        <Image
          src={activeSeason.image}
          alt={activeSeason.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15 transition duration-700"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,194,255,.12),transparent_31%),linear-gradient(180deg,rgba(255,255,255,.86),rgba(248,251,252,.96)_88%)]" />
        <div className="absolute inset-0 industrial-grid opacity-45" />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal max-w-xl">
          <Badge className="border-primary/40 bg-primary/15 text-primary" variant="outline">
            Tjänster efter årstid
          </Badge>
          <h1 className="mt-5 font-display text-5xl font-bold leading-none sm:text-7xl">
            Välj säsong. Se vad Brecab kan göra.
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Klicka på en årstid i orbitalen. Jobben under uppdateras direkt med
            relevanta tjänster, bilder och kort förklaring. Välj Alla för att se hela utbudet.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {seasons.map((season, index) => (
              <Button
                key={season.id}
                variant={season.id === activeId ? "default" : "outline"}
                size="sm"
                onClick={() => selectSeason(season, index)}
                className={season.id === activeId ? undefined : "border-border bg-background/80"}
              >
                {season.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div
            className="relative mx-auto flex h-[500px] w-full max-w-[620px] items-center justify-center"
            onMouseEnter={() => setAutoRotate(false)}
            onMouseLeave={() => setAutoRotate(true)}
          >
            <div className="absolute h-[390px] w-[390px] rounded-full border border-border" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-primary/20" />
            <div className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-primary/40 bg-primary/15 shadow-glow backdrop-blur-xl">
              <Zap className="text-primary" size={34} />
            </div>

            {seasons.map((season, index) => {
              const angle = ((index / seasons.length) * 360 + rotationAngle) % 360;
              const radian = (angle * Math.PI) / 180;
              const radius = 195;
              const x = (radius * Math.cos(radian)).toFixed(3);
              const y = (radius * Math.sin(radian)).toFixed(3);
              const isActive = season.id === activeId;
              const Icon = season.icon;

              return (
                <button
                  key={season.id}
                  type="button"
                  onClick={() => selectSeason(season, index)}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 transition duration-500"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <span
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full border-2 backdrop-blur-xl transition duration-300",
                      isActive
                        ? "scale-125 border-primary bg-primary text-primary-foreground shadow-glow"
                        : "border-border bg-background/85 text-foreground hover:border-primary"
                    )}
                  >
                    <Icon size={24} />
                  </span>
                  <span className={cn("text-sm font-bold", isActive ? "text-primary" : "text-muted-foreground")}>
                    {season.title}
                  </span>
                </button>
              );
            })}
          </div>

          <Card className="mx-auto mt-6 w-full max-w-[520px] border-border bg-card/90 text-card-foreground shadow-machine backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-3">
                <Badge variant="outline" className="border-border text-foreground">
                  {statusLabel[activeSeason.status]}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">{activeSeason.period}</span>
              </div>
              <CardTitle className="mt-3 text-2xl">{activeSeason.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">
              <p>{activeSeason.summary}</p>
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  style={{ width: `${activeSeason.energy}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeSeason.jobs.map((job) => (
            <Link
              key={job.title}
              href="/contact"
              aria-label={`Planera uppdrag for ${job.title}`}
              className="hover-card-3d group block overflow-hidden rounded-md border border-border bg-card backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <job.icon className="absolute bottom-4 left-4 text-primary" size={26} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold">{job.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{job.text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Planera uppdrag <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

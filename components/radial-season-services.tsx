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

const winterJobs: Job[] = [
  {
    title: "Snöplogning",
    text: "Vägar, planer, infarter och fastighetsytor hålls öppna med rätt maskin för förhållandet.",
    image: "/projects/loader-front.jpeg",
    icon: Snowflake
  },
  {
    title: "Halkbekämpning",
    text: "Sandning och beredskap när temperatur och nederbörd gör ytor osäkra.",
    image: "/projects/snow-road.jpeg",
    icon: Shovel
  },
  {
    title: "Snötransport",
    text: "Flytt av snömassor och tydlig logistik när ytor måste frigöras snabbt.",
    image: "/projects/loader-dusk.jpeg",
    icon: Route
  }
];

const springJobs: Job[] = [
  {
    title: "Sopning",
    text: "Rengöring efter vinter, sand och grus på ytor där ordning och framkomlighet behövs.",
    image: "/projects/blade-cabin.jpeg",
    icon: Brush
  },
  {
    title: "Garageinfarter",
    text: "Ombyggnad, urgrävning och förberedande markarbete för starka infarter.",
    image: "/projects/loader-side.jpeg",
    icon: Mountain
  },
  {
    title: "Dränering",
    text: "Markförberedelser och vattenhantering för torrare och mer hållbara ytor.",
    image: "/projects/loader-side-alt.jpeg",
    icon: Shovel
  }
];

const summerJobs: Job[] = [
  {
    title: "Markanläggning",
    text: "Grusytor, gräsytor, plattläggning och kantsten där finish och funktion ska möta varandra.",
    image: "/projects/loader-side.jpeg",
    icon: Mountain
  },
  {
    title: "Lekparksbyggnation",
    text: "Noggranna marklager och ytor där säkerhet, dränering och form spelar roll.",
    image: "/projects/field-clear.jpeg",
    icon: Trees
  },
  {
    title: "Gräsklippning",
    text: "Skötsel av större grönytor för kommuner, företag och bostadsrättsföreningar.",
    image: "/projects/winter-field.jpeg",
    icon: Brush
  }
];

const autumnJobs: Job[] = [
  {
    title: "Grusytor",
    text: "Justering, materialflytt och bärlager innan frost och vinterdrift tar vid.",
    image: "/projects/l60h-detail.jpeg",
    icon: Mountain
  },
  {
    title: "Transport",
    text: "Materialflöden och massor flyttas med tydlig planering så arbetsplatsen håller rytmen.",
    image: "/projects/loader-rear.jpeg",
    icon: Route
  },
  {
    title: "Vinterberedskap",
    text: "Genomgång av uppdrag, ytor och prioriteringar innan första snön kommer.",
    image: "/projects/loader-dusk.jpeg",
    icon: Snowflake
  }
];

const allJobs = [...winterJobs, ...springJobs, ...summerJobs, ...autumnJobs];

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
    summary: "Snabb vinterinsats i Boden med plogning, halkbekämpning och snötransport.",
    jobs: winterJobs
  },
  {
    id: "spring",
    title: "Vår",
    period: "Apr - Jun",
    status: "planering",
    energy: 78,
    icon: Leaf,
    image: "/projects/blade-cabin.jpeg",
    summary: "När vintern släpper tar Brecab hand om sopning, grus och återställning.",
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
    summary: "Säsongen för markanläggning, grusytor, gräsklippning och byggnation.",
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
    summary: "Höstens fokus är förberedelse: ytor, bärlager och vinterklar logistik.",
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
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={activeSeason.image}
          alt={activeSeason.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-28 transition duration-700"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,194,255,.24),transparent_31%),linear-gradient(180deg,rgba(0,0,0,.58),#020608_88%)]" />
        <div className="absolute inset-0 industrial-grid opacity-25" />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal max-w-xl">
          <Badge className="border-primary/40 bg-primary/15 text-primary" variant="outline">
            Tjänster efter årstid
          </Badge>
          <h1 className="mt-5 font-display text-5xl font-bold leading-none sm:text-7xl">
            Välj säsong. Se vad Brecab kan göra.
          </h1>
          <p className="mt-6 text-base leading-8 text-white/72">
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
                className="border-white/15"
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
            <div className="absolute h-[390px] w-[390px] rounded-full border border-white/10" />
            <div className="absolute h-[290px] w-[290px] rounded-full border border-primary/20" />
            <div className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-primary/40 bg-primary/15 shadow-glow backdrop-blur-xl">
              <Zap className="text-primary" size={34} />
            </div>

            {seasons.map((season, index) => {
              const angle = ((index / seasons.length) * 360 + rotationAngle) % 360;
              const radian = (angle * Math.PI) / 180;
              const radius = 195;
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);
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
                        : "border-white/35 bg-black/55 text-white hover:border-primary"
                    )}
                  >
                    <Icon size={24} />
                  </span>
                  <span className={cn("text-sm font-bold", isActive ? "text-primary" : "text-white/70")}>
                    {season.title}
                  </span>
                </button>
              );
            })}
          </div>

          <Card className="mx-auto mt-6 w-full max-w-[520px] border-white/15 bg-black/70 text-white shadow-machine backdrop-blur-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-3">
                <Badge variant="outline" className="border-white/25 text-white">
                  {statusLabel[activeSeason.status]}
                </Badge>
                <span className="font-mono text-xs text-white/50">{activeSeason.period}</span>
              </div>
              <CardTitle className="mt-3 text-2xl">{activeSeason.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-white/72">
              <p>{activeSeason.summary}</p>
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
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
              className="hover-card-3d group block overflow-hidden rounded-md border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <job.icon className="absolute bottom-4 left-4 text-primary" size={26} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold">{job.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{job.text}</p>
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

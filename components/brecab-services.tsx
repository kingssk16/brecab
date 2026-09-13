"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Search,
  X,
  Check,
  Plus,
  LayoutGrid,
  List,
  ArrowRight,
} from "lucide-react";
import { groups, services } from "@/lib/brecab-content";
const normalize = (text: string) =>
  text
    .toLocaleLowerCase("sv")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
export function ServiceCatalog() {
  const [filter, setFilter] = useState("alla");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      setFilter(groups.some((g) => g.id === hash) ? hash : "alla");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const matches = services.filter(
    (s) =>
      (filter === "alla" || filter === s.group) &&
      normalize(`${s.title} ${s.intro} ${s.detail}`).includes(
        normalize(query.trim()),
      ),
  );
  function select(id: string) {
    setFilter(id);
    window.history.replaceState(
      null,
      "",
      id === "alla" ? "/tjanster" : `#${id}`,
    );
  }
  function toggle(slug: string) {
    setSelected((current) =>
      current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [...current, slug],
    );
  }
  return (
    <>
      <div className="service-filter">
        <div className="container" role="group" aria-label="Visa tjänster inom">
          <button
            className={`filter-button ${filter === "alla" ? "active" : ""}`}
            aria-pressed={filter === "alla"}
            onClick={() => select("alla")}
          >
            Alla tjänster ({services.length})
          </button>
          {groups.map((g) => (
            <button
              key={g.id}
              className={`filter-button ${filter === g.id ? "active" : ""}`}
              aria-pressed={filter === g.id}
              onClick={() => select(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>
      <div className="catalog">
        <div className="container">
          <div className="catalog-tools">
            <div className="service-search">
              <Search size={20} aria-hidden="true" />
              <label className="sr-only" htmlFor="service-search">
                Sök bland tjänster
              </label>
              <input
                id="service-search"
                type="search"
                placeholder="Sök efter t.ex. dränering, snö eller gräs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  aria-label="Rensa sökningen"
                  onClick={() => setQuery("")}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <div
              className="view-controls"
              role="group"
              aria-label="Visningsläge"
            >
              <button
                aria-label="Visa som kort"
                aria-pressed={view === "grid"}
                onClick={() => setView("grid")}
              >
                <LayoutGrid size={19} />
              </button>
              <button
                aria-label="Visa som lista"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
              >
                <List size={21} />
              </button>
            </div>
          </div>
          <div className="catalog-caption">
            <p role="status" aria-live="polite">
              {matches.length} {matches.length === 1 ? "tjänst" : "tjänster"}
              {query ? ` för ”${query}”` : " att få hjälp med"}
            </p>
            <p>Välj gärna flera tjänster till din förfrågan.</p>
          </div>
          {matches.length === 0 && (
            <div className="search-empty">
              <Search size={32} />
              <h2>VI HITTADE INGEN MATCHNING.</h2>
              <p>
                Prova ett annat ord eller visa alla tjänster. Du kan också
                beskriva behovet direkt för oss.
              </p>
              <button
                className="button button-brand"
                onClick={() => {
                  setQuery("");
                  select("alla");
                }}
              >
                Visa alla tjänster
              </button>
              <Link className="text-link" href="/kontakt">
                Kontakta oss <ArrowUpRight size={18} />
              </Link>
            </div>
          )}
          {groups
            .filter((g) => matches.some((s) => s.group === g.id))
            .map((g) => (
              <section className="service-group" id={g.id} key={g.id}>
                <div className="service-group-heading">
                  <h2>{g.title.toLocaleUpperCase("sv")}</h2>
                  <span>
                    {matches.filter((s) => s.group === g.id).length} tjänster
                  </span>
                </div>
                <div
                  className={`catalog-grid ${view === "list" ? "catalog-list" : ""}`}
                >
                  {matches
                    .filter((s) => s.group === g.id)
                    .map((s) => (
                      <article
                        className={`catalog-card ${selected.includes(s.slug) ? "is-selected" : ""}`}
                        key={s.slug}
                      >
                        <Link
                          href={`/tjanster/${s.slug}`}
                          className="catalog-image"
                          aria-label={`Läs om ${s.title}`}
                        >
                          <Image
                            src={`/projects/${s.image}`}
                            alt={s.alt}
                            fill
                            sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, 33vw"
                          />
                        </Link>
                        <div className="catalog-body">
                          <Link href={`/tjanster/${s.slug}`}>
                            <h3>{s.title}</h3>
                          </Link>
                          <p>{s.intro}</p>
                          <div className="catalog-actions">
                            <Link
                              className="text-link"
                              href={`/tjanster/${s.slug}`}
                            >
                              Läs mer <ArrowUpRight size={17} />
                            </Link>
                            <button
                              className="select-service"
                              aria-label={`${selected.includes(s.slug) ? "Ta bort" : "Lägg till"} ${s.title} ${selected.includes(s.slug) ? "ur" : "i"} förfrågan`}
                              aria-pressed={selected.includes(s.slug)}
                              onClick={() => toggle(s.slug)}
                            >
                              {selected.includes(s.slug) ? (
                                <Check size={17} />
                              ) : (
                                <Plus size={17} />
                              )}{" "}
                              {selected.includes(s.slug) ? "Tillagd" : "Välj"}
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
        </div>
      </div>
      {selected.length > 0 && (
        <aside className="inquiry-tray" aria-label="Valda tjänster">
          <div className="container">
            <div>
              <strong>
                {selected.length}{" "}
                {selected.length === 1 ? "tjänst vald" : "tjänster valda"}
              </strong>
              <p>
                {selected
                  .map((slug) => services.find((s) => s.slug === slug)!.title)
                  .join(" · ")}
              </p>
            </div>
            <button className="tray-clear" onClick={() => setSelected([])}>
              Rensa
            </button>
            <Link
              href={`/kontakt?tjanster=${selected.join(",")}#forfragan`}
              className="button button-brand"
            >
              Gå vidare <ArrowRight size={19} />
            </Link>
          </div>
        </aside>
      )}
    </>
  );
}

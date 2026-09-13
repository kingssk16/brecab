"use client";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Mail,
  Pencil,
} from "lucide-react";
import { groups, services } from "@/lib/brecab-content";
type Details = {
  customer: string;
  place: string;
  timing: string;
  message: string;
  name: string;
  email: string;
  phone: string;
  company: string;
};
export function InquiryForm({
  initialServices,
}: {
  initialServices: string[];
}) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(initialServices);
  const [details, setDetails] = useState<Details>({
    customer: "Privatperson",
    place: "",
    timing: "Flexibelt / enligt överenskommelse",
    message: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const titleRef = useRef<HTMLHeadingElement>(null);
  const update = (key: keyof Details, value: string) =>
    setDetails((current) => ({ ...current, [key]: value }));
  const names =
    selected
      .map((slug) => services.find((s) => s.slug === slug)?.title)
      .filter(Boolean)
      .join(", ") || "Rådgivning / hjälp att välja tjänst";
  const draft = `Hej BRECAB!\n\nJag önskar rådgivning och kostnadsförslag.\n\nTjänster: ${names}\nKundtyp: ${details.customer}\nPlats: ${details.place || "Ej angiven"}\nÖnskad tidpunkt: ${details.timing}\n\nOm uppdraget:\n${details.message}\n\nKontaktperson: ${details.name}\nE-post: ${details.email}${details.phone ? `\nTelefon: ${details.phone}` : ""}${details.company ? `\nFöretag / organisation: ${details.company}` : ""}\n\nVänliga hälsningar,\n${details.name}`;
  const mailto = `mailto:info@brecab.se?subject=${encodeURIComponent(`Förfrågan: ${names.length > 100 ? "flera tjänster" : names}`)}&body=${encodeURIComponent(draft)}`;
  function move(next: number) {
    setStep(next);
    setCopyState("idle");
    requestAnimationFrame(() =>
      titleRef.current?.focus({ preventScroll: false }),
    );
  }
  function toggle(slug: string) {
    setSelected((current) =>
      current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [...current, slug],
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }
  return (
    <form
      id="forfragan"
      className="inquiry-form inquiry-wizard"
      onSubmit={(e) => {
        e.preventDefault();
        if (step < 2) move(step + 1);
      }}
    >
      <ol className="wizard-progress" aria-label="Förfrågans steg">
        {["Ditt uppdrag", "Kontakt", "Granska"].map((name, index) => (
          <li
            key={name}
            aria-current={step === index ? "step" : undefined}
            className={step >= index ? "is-current" : ""}
          >
            <span>{step > index ? <Check size={15} /> : index + 1}</span>
            {name}
          </li>
        ))}
      </ol>
      <h2 ref={titleRef} tabIndex={-1}>
        {
          [
            "Vad ska vi hjälpa dig med?",
            "Hur når vi dig?",
            "Ser allt rätt ut?",
          ][step]
        }
      </h2>
      <p className="wizard-intro">
        {
          [
            "Beskriv ditt behov. Du behöver inte ha alla svar för att höra av dig.",
            "Ange dina kontaktuppgifter så att Brecab kan återkomma till dig.",
            "Granska din förfrågan. Öppna sedan ett e-postutkast eller kopiera texten till ditt eget mejl.",
          ][step]
        }
      </p>
      {step === 0 && (
        <fieldset className="wizard-fields">
          <legend className="sr-only">Beskriv ditt uppdrag</legend>
          <div className="field">
            <label htmlFor="customer">Jag kontaktar er som</label>
            <select
              id="customer"
              value={details.customer}
              onChange={(e) => update("customer", e.target.value)}
            >
              {[
                "Privatperson",
                "Företag",
                "Bostadsrättsförening",
                "Kommun / region",
                "Annan organisation",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <fieldset className="service-choices">
            <legend>
              Vad gäller det?{" "}
              <span>Välj en eller flera, eller lämna öppet.</span>
            </legend>
            {groups.map((g) => (
              <details
                key={g.id}
                open={
                  selected.some(
                    (slug) =>
                      services.find((s) => s.slug === slug)?.group === g.id,
                  ) || undefined
                }
              >
                <summary>
                  {g.title}
                  <span>
                    {selected.filter(
                      (slug) =>
                        services.find((s) => s.slug === slug)?.group === g.id,
                    ).length || "+"}
                  </span>
                </summary>
                <div>
                  {services
                    .filter((s) => s.group === g.id)
                    .map((s) => (
                      <label key={s.slug}>
                        <input
                          type="checkbox"
                          checked={selected.includes(s.slug)}
                          onChange={() => toggle(s.slug)}
                        />
                        <span>{s.title}</span>
                      </label>
                    ))}
                </div>
              </details>
            ))}
          </fieldset>
          <div className="field-row">
            <div className="field">
              <label htmlFor="place">Var ska arbetet utföras?</label>
              <input
                id="place"
                maxLength={160}
                value={details.place}
                onChange={(e) => update("place", e.target.value)}
                placeholder="Område eller adress"
              />
            </div>
            <div className="field">
              <label htmlFor="timing">När behövs hjälpen?</label>
              <select
                id="timing"
                value={details.timing}
                onChange={(e) => update("timing", e.target.value)}
              >
                {[
                  "Flexibelt / enligt överenskommelse",
                  "Så snart som möjligt",
                  "Inom 1–3 månader",
                  "Längre fram",
                  "Löpande / säsongsavtal",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Berätta om uppdraget *</label>
            <textarea
              id="message"
              required
              maxLength={1800}
              rows={5}
              value={details.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Vad vill du få gjort? Beskriv gärna ungefärlig storlek, nuvarande förutsättningar och önskat resultat."
            />
            <span className="field-hint">
              {details.message.length}/1 800 tecken
            </span>
          </div>
        </fieldset>
      )}
      {step === 1 && (
        <fieldset className="wizard-fields">
          <legend className="sr-only">Dina kontaktuppgifter</legend>
          <div className="field">
            <label htmlFor="name">Ditt namn *</label>
            <input
              id="name"
              autoComplete="name"
              required
              maxLength={100}
              value={details.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="För- och efternamn"
            />
          </div>
          <div className="field">
            <label htmlFor="email">E-postadress *</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              value={details.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="namn@exempel.se"
            />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Telefon <span className="optional">(valfritt)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              value={details.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="Ditt telefonnummer"
            />
          </div>
          {details.customer !== "Privatperson" && (
            <div className="field">
              <label htmlFor="company">Företag / organisation</label>
              <input
                id="company"
                autoComplete="organization"
                maxLength={160}
                value={details.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>
          )}
          <div className="wizard-reassurance">
            <Mail size={21} />
            <p>
              Din förfrågan förbereds till <strong>info@brecab.se</strong>.
              Inget skickas förrän du själv skickar mejlet i ditt e-postprogram.
            </p>
          </div>
        </fieldset>
      )}
      {step === 2 && (
        <div className="inquiry-review">
          <div className="review-heading">
            <h3>Ditt uppdrag</h3>
            <button type="button" onClick={() => move(0)}>
              <Pencil size={14} /> Ändra
            </button>
          </div>
          <dl>
            <div>
              <dt>Tjänster</dt>
              <dd>{names}</dd>
            </div>
            <div>
              <dt>Kundtyp</dt>
              <dd>{details.customer}</dd>
            </div>
            <div>
              <dt>Plats</dt>
              <dd>{details.place || "Ej angiven"}</dd>
            </div>
            <div>
              <dt>Tidpunkt</dt>
              <dd>{details.timing}</dd>
            </div>
          </dl>
          <p className="review-message">{details.message}</p>
          <div className="review-heading">
            <h3>Kontaktuppgifter</h3>
            <button type="button" onClick={() => move(1)}>
              <Pencil size={14} /> Ändra
            </button>
          </div>
          <p>
            {details.name}
            <br />
            {details.email}
            {details.phone && (
              <>
                <br />
                {details.phone}
              </>
            )}
            {details.company && (
              <>
                <br />
                {details.company}
              </>
            )}
          </p>
          <a href={mailto} className="button button-brand send-draft">
            <Mail size={18} /> Öppna i e-postprogram <ArrowUpRight size={18} />
          </a>
          <button type="button" className="copy-draft" onClick={copy}>
            <Copy size={17} />
            {copyState === "copied"
              ? "Förfrågan är kopierad"
              : "Kopiera förfrågan"}
          </button>
          <p role="status" className="copy-status">
            {copyState === "error"
              ? "Kopieringen fungerade inte. Öppna meddelandet nedan och markera texten manuellt."
              : copyState === "copied"
                ? "Klistra in texten i ett mejl till info@brecab.se."
                : ""}
          </p>
          <details className="draft-text">
            <summary>Visa hela e-postmeddelandet</summary>
            <pre>{draft}</pre>
          </details>
        </div>
      )}
      <div className="wizard-actions">
        {step > 0 && (
          <button
            type="button"
            className="wizard-back"
            onClick={() => move(step - 1)}
          >
            <ArrowLeft size={17} /> Tillbaka
          </button>
        )}
        {step < 2 && (
          <button type="submit" className="button button-brand">
            {step === 0 ? "Nästa: kontaktuppgifter" : "Granska förfrågan"}
            <ArrowRight size={18} />
          </button>
        )}
      </div>
      <p className="form-note">
        * Obligatoriska fält. Uppgifterna finns bara i den här sidan och
        försvinner när du lämnar eller laddar om den. Inget sparas på en server.
      </p>
    </form>
  );
}

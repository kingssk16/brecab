"use client";

import { FormEvent, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "sending" | "sent" | "error";

const endpoint = "https://formsubmit.co/ajax/info@brecab.se";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("FormSubmit kunde inte ta emot meddelandet.");
      }

      formRef.current?.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} className="grid gap-4" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Ny förfrågan från brecab.se" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Namn" autoComplete="name" required />
        <Input name="phone" placeholder="Telefon" autoComplete="tel" required />
      </div>
      <Input name="email" placeholder="E-post" autoComplete="email" type="email" required />
      <Input name="project" placeholder="Typ av uppdrag" required />
      <Textarea name="message" placeholder="Kort beskrivning" required minLength={10} />
      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Skickar..." : "Skicka förfrågan"}
      </Button>

      <p className="min-h-5 text-sm text-muted-foreground" aria-live="polite">
        {status === "sent" && "Tack! Förfrågan är skickad. Vi återkommer så snart vi kan."}
        {status === "error" &&
          "Det gick inte att skicka just nu. Mejla gärna direkt till info@brecab.se."}
      </p>
    </form>
  );
}

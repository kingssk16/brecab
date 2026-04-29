"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".reveal, .fade-up, .text-fade-up, .footer-reveal");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    },
    { scope: root }
  );

  return <div ref={root}>{children}</div>;
}

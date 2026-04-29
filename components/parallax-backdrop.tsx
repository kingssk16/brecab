"use client";

import { useEffect } from "react";

export function ParallaxBackdrop() {
  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--parallax-y", `${window.scrollY * -0.04}px`);
        document.documentElement.style.setProperty("--parallax-y-deep", `${window.scrollY * -0.022}px`);
        frame = 0;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--pointer-x", `${x}%`);
      document.documentElement.style.setProperty("--pointer-y", `${y}%`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="parallax-backdrop" aria-hidden="true">
      <div className="parallax-glow" />
      <div className="parallax-grid-deep" />
      <div className="depth-panel depth-panel-one" />
      <div className="depth-panel depth-panel-two" />
      <div className="floating-cube floating-cube-one">
        <span />
      </div>
      <div className="floating-cube floating-cube-two">
        <span />
      </div>
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
    </div>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export function ServiceCard3D({
  title,
  text,
  metric,
  children
}: {
  title: string;
  text: string;
  metric: string;
  children: ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 180, damping: 18 });

  return (
    <Link
      href="/contact"
      aria-label={`Boka genomgang om ${title}`}
      className="group block"
    >
      <motion.article
        className="relative min-h-[360px] overflow-hidden rounded-md border border-border bg-card p-6 shadow-machine"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(event.clientX - rect.left - rect.width / 2);
          y.set(event.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        whileHover={{ y: -8 }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
              <span>{metric}</span>
              <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h2 className="font-display text-3xl font-bold">{title}</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{text}</p>
          </div>
          <span className="text-sm font-bold text-primary">
            Boka genomgang
          </span>
        </div>
        <div className="absolute bottom-0 right-0 h-44 w-44 translate-x-10 translate-y-10 opacity-70 transition group-hover:scale-110">
          {children}
        </div>
      </motion.article>
    </Link>
  );
}

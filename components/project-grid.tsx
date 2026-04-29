"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { projects } from "@/lib/projects";

export function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          className="reveal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          layoutId={`project-${project.slug}`}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="hover-card-3d group block overflow-hidden rounded-md border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Tjänster" },
  { href: "/projects", label: "Projekt" },
  { href: "/about", label: "Om oss" },
  { href: "/quality", label: "Kvalité" },
  { href: "/environment", label: "Miljö" },
  { href: "/contact", label: "Kontakt" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="glass-3d mx-auto flex max-w-7xl items-center justify-between rounded-md border border-white/10 bg-background/70 px-4 py-3 shadow-machine backdrop-blur-xl">
        <Link href="/" className="logo-3d relative block h-11 w-[154px] overflow-hidden rounded-sm">
          <Image
            src="/brecab-logo.png"
            alt="Brecab"
            fill
            priority
            sizes="154px"
            className="object-contain"
          />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost" size="sm">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            aria-label="Växla tema"
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button
            aria-label="Öppna meny"
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>
      <div
        className={cn(
          "mx-auto mt-2 grid max-w-7xl gap-1 overflow-hidden rounded-md border border-border bg-background/90 p-2 shadow-machine backdrop-blur-xl transition-all lg:hidden",
          open ? "max-h-80 opacity-100" : "max-h-0 border-transparent p-0 opacity-0"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-4 py-3 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

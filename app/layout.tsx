import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Navigation } from "@/components/navigation";
import { ParallaxBackdrop } from "@/components/parallax-backdrop";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brecab.se"),
  title: {
    default: "Brecab | Markarbete, maskintjänster och transport",
    template: "%s | Brecab"
  },
  description:
    "Brecab levererar markarbete, maskintjänster, snöröjning och transport med modern maskinpark i Boden.",
  openGraph: {
    title: "Brecab",
    description:
      "Premium entreprenad, maskintjänster och transport i Boden.",
    images: ["/projects/loader-side.jpeg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/brecab-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className={`${inter.variable} ${space.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="brecab-theme"
        >
          <ParallaxBackdrop />
          <Navigation />
          {children}
          <ScrollReveal>
            <SiteFooter />
          </ScrollReveal>
        </ThemeProvider>
      </body>
    </html>
  );
}

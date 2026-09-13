import type { Metadata } from "next";
import { Manrope, Barlow_Condensed } from "next/font/google";
import { Header, Footer } from "@/components/brecab-shell";
import "./globals.css";
const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://brecab.vercel.app"),
  title: {
    default: "BRECAB – Markarbete & snöröjning i Boden",
    template: "%s | BRECAB i Boden",
  },
  description:
    "Maskin- och markentreprenad i Boden. BRECAB hjälper privatpersoner, företag, bostadsrättsföreningar och offentlig verksamhet med markarbeten, snöröjning och yttre skötsel.",
  openGraph: {
    locale: "sv_SE",
    type: "website",
    siteName: "BRECAB",
    title: "BRECAB – Vi gör jobbet. Året runt.",
    description: "Markarbete, vinterunderhåll och yttre skötsel i Boden.",
    images: ["/projects/loader-side.jpeg"],
  },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body className={`${body.variable} ${display.variable}`}>
        <a href="#main" className="skip-link">
          Hoppa till innehållet
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

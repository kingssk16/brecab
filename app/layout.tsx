import type { Metadata } from "next";
import { Manrope, Barlow_Condensed } from "next/font/google";
import { Header, Footer } from "@/components/brecab-shell";
import { StructuredData } from "@/components/structured-data";
import { mainPageSeo, organisationData, siteUrl, websiteData } from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: mainPageSeo["/"].title,
    template: "%s | BRECAB",
  },
  description: mainPageSeo["/"].description,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    locale: "sv_SE",
    type: "website",
    siteName: "BRECAB",
    title: mainPageSeo["/"].title,
    description: mainPageSeo["/"].description,
    images: [{ url: "/projects/loader-side.jpeg", alt: "Brecabs hjullastare med snöplog" }],
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
        <StructuredData data={organisationData} />
        <StructuredData data={websiteData} />
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

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "./lib/site";
import { OrganizationJsonLd, WebSiteJsonLd } from "./components/JsonLd";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sportcenter Kenn — Soccer, Tennis, Padel & Freizeit bei Trier",
    template: "%s | Sportcenter Kenn",
  },
  description:
    "Sportcenter Kenn bei Trier: Indoor- und Outdoor-Soccer, Tennis auf Sand, Padel im Aufbau, BattleKart und Pizza-Bar direkt vor Ort. Reservierung telefonisch.",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Sportcenter Kenn — Soccer, Tennis, Padel & Freizeit bei Trier",
    description:
      "Soccer indoor & outdoor, Tennis auf Sand, Padel im Aufbau, BattleKart und Pizza-Bar in Kenn nahe Trier.",
    images: [
      {
        url: "/images/hero-luftbild.png",
        width: 1600,
        height: 900,
        alt: "Sportcenter Kenn aus der Luft: Halle mit Tennisplätzen im Wald bei Trier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportcenter Kenn bei Trier",
    description:
      "Soccer, Tennis & Padel, BattleKart und mehr in Kenn nahe Trier.",
    images: ["/images/hero-luftbild.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Sports & Recreation",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}

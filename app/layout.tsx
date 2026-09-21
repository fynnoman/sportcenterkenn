import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sportcenter Kenn",
  description:
    "Sportcenter Kenn bei Trier. Indoor- und Outdoor-Soccer, Tennis & Padel auf Sand, BattleKart und mehr. Reservierung telefonisch unter 0151 111 611 216.",
  metadataBase: new URL("https://sportcenter-kenn.de"),
  openGraph: {
    title: "Sportcenter Kenn",
    description:
      "Soccer, Tennis & Padel, BattleKart und mehr unter einem Dach.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}

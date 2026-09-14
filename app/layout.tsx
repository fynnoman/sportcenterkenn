import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sportcenter Kenn — Boris Cucka Sport",
  description:
    "Sportcenter Kenn bei Trier. Indoor- und Outdoor-Soccer, Tennis auf Sand, BattleKart, Billard und Pizza-Bar. Reservieren unter 06502 8811.",
  metadataBase: new URL("https://sportcenter-kenn.de"),
  openGraph: {
    title: "Sportcenter Kenn — Boris Cucka Sport",
    description:
      "Fußball, Tennis, BattleKart, Billard und Pizza-Bar unter einem Dach.",
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

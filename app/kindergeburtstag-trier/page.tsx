import type { Metadata } from "next";
import Link from "next/link";
import {
  LandingShell,
  LandingHero,
  LandingSection,
  RelatedLinks,
} from "../components/LandingShell";
import { FAQJsonLd, ServiceJsonLd } from "../components/JsonLd";
import { PHOTOS } from "../lib/photos";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Kindergeburtstag Trier — Feiern im Sportcenter Kenn",
  description:
    "Kindergeburtstag bei Trier: sportlich feiern im Sportcenter Kenn. Details und Termine werden telefonisch abgestimmt.",
  alternates: { canonical: "/kindergeburtstag-trier" },
  openGraph: {
    title: "Kindergeburtstag Trier — Sportcenter Kenn",
    description:
      "Kindergeburtstage im Sportcenter Kenn nahe Trier. Termine und Details telefonisch beim Betreiber.",
    url: `${SITE_URL}/kindergeburtstag-trier`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Kann man im Sportcenter Kenn Kindergeburtstag feiern?",
    answer:
      "Ja. Das Sportcenter Kenn bei Trier bietet Kindergeburtstage an. Ablauf und Details werden telefonisch mit dem Betreiber abgestimmt.",
  },
  {
    question: "Wie stimmt man Ablauf und Termin ab?",
    answer:
      "Termin, Gruppengröße und Ablauf werden telefonisch geklärt: 0151 111 611 216 oder 0175 666 3336.",
  },
  {
    question: "Wo findet der Kindergeburtstag statt?",
    answer:
      "Im Sportcenter Kenn, Spitzstraße 20, 54344 Kenn, direkt bei Trier.",
  },
];

export default function KindergeburtstagTrierPage() {
  return (
    <LandingShell breadcrumb={{ name: "Kindergeburtstag Trier", path: "/kindergeburtstag-trier" }}>
      <ServiceJsonLd
        name="Kindergeburtstag Trier"
        description="Kindergeburtstage im Sportcenter Kenn bei Trier. Ablauf und Termine telefonisch."
        serviceType="Kindergeburtstag, Indoor Kindergeburtstag"
        url={`${SITE_URL}/kindergeburtstag-trier`}
      />
      <FAQJsonLd items={faqs} />

      <LandingHero
        eyebrow="Kindergeburtstag bei Trier"
        headline="Toben, lachen, Kuchen essen."
        sub="Kindergeburtstag im Sportcenter Kenn bei Trier: eigener Platz, Sport, drumherum die Pizza-Bar. Details klären wir gemeinsam am Telefon."
        image={PHOTOS.kids}
      />

      <LandingSection title="Kindergeburtstag im Sportcenter Kenn">
        <p>
          Im Sportcenter Kenn bei Trier lassen sich Kindergeburtstage
          sportlich feiern. Die Kinder haben Platz zum Toben, ihr habt einen
          festen Bereich für den Rest — Kuchen, Geschenke, Pause zwischendurch.
        </p>
        <p>
          Weil jeder Geburtstag anders aussieht, gibt es hier keine
          Standardpakete auf der Seite. Ablauf, Zeitfenster und was ihr
          mitbringt, stimmen wir individuell am Telefon ab.
        </p>
      </LandingSection>

      <LandingSection title="Terminanfrage" dark>
        <p>
          Am schnellsten geht die Anfrage direkt telefonisch. Sag uns kurz das
          Wunschdatum, wie viele Kinder ihr seid und was ihr euch vorstellt —
          Rest klären wir dann gemeinsam.
        </p>
        <p>
          <strong className="text-white">0151 111 611 216</strong> ·{" "}
          <strong className="text-white">0175 666 3336</strong>
        </p>
      </LandingSection>

      <LandingSection title="Was rundherum am Standort geht">
        <p>
          Direkt am Standort in Kenn ist mehr als nur ein Platz: es gibt
          Soccer indoor und outdoor (
          <Link href="/soccerhalle-trier" className="link-arrow !text-ink !font-medium">
            Details
          </Link>
          ), Tennis auf Sand (
          <Link href="/tennishalle-trier" className="link-arrow !text-ink !font-medium">
            Details
          </Link>
          ), sowie eine Pizza-Bar und Billard am Standort. Für einen
          Kindergeburtstag lassen sich diese Bausteine je nach Alter und Wunsch
          kombinieren.
        </p>
      </LandingSection>

      <LandingSection title="Häufige Fragen">
        <div className="rounded-[18px] bg-white overflow-hidden">
          {faqs.map((f, i) => (
            <details key={f.question} className="group border-b border-line last:border-b-0">
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4 px-5 md:px-8 py-4 md:py-6 text-[15px] md:text-[17px] font-medium text-ink hover:bg-bg transition-colors">
                <span className="flex items-baseline gap-3 md:gap-4 min-w-0">
                  <span className="text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-brand font-semibold tabular-nums w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">{f.question}</span>
                </span>
              </summary>
              <div className="px-5 md:px-8 pb-5 md:pb-7 pl-[44px] md:pl-[74px] text-[14.5px] md:text-[16px] leading-[1.55] text-ink-2 max-w-[720px]">
                {f.answer}
              </div>
            </details>
          ))}
        </div>
      </LandingSection>

      <RelatedLinks exclude="/kindergeburtstag-trier" />
    </LandingShell>
  );
}

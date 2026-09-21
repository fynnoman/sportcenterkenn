import type { Metadata } from "next";
import Link from "next/link";
import {
  LandingShell,
  LandingHero,
  LandingSection,
} from "../components/LandingShell";
import { FAQJsonLd } from "../components/JsonLd";
import { PHOTOS } from "../lib/photos";
import { SITE_URL, EXTERNAL_LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Indoor Aktivitäten Trier — Sport & Freizeit bei Kenn",
  description:
    "Indoor Aktivitäten bei Trier: Soccerhalle, Tennishalle, BattleKart und Pizza-Bar am Standort Sportcenter Kenn. Auch bei Regen ideal.",
  alternates: { canonical: "/indoor-aktivitaeten-trier" },
  openGraph: {
    title: "Indoor Aktivitäten bei Trier — Sportcenter Kenn",
    description:
      "Indoor-Sport, BattleKart und Pizza-Bar an einem Standort bei Trier. Übersicht über alle Angebote.",
    url: `${SITE_URL}/indoor-aktivitaeten-trier`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Welche Indoor-Aktivitäten gibt es bei Trier am Standort Kenn?",
    answer:
      "Am Sportcenter Kenn bei Trier gibt es Indoor-Soccer, Tennis in der Halle auf Sand, Billard und eine Pizza-Bar. BattleKart ist über den Partner am selben Standort erreichbar.",
  },
  {
    question: "Was mache ich in Trier bei Regenwetter?",
    answer:
      "Das Sportcenter Kenn deckt genau diesen Fall ab: Fußball, Tennis, Billard und die Pizza-Bar sind indoor nutzbar. BattleKart am selben Standort ebenfalls überdacht.",
  },
  {
    question: "Wie werden die Angebote gebucht?",
    answer:
      "Soccer, Tennis und Padel (in Planung) werden telefonisch beim Sportcenter Kenn gebucht: 0151 111 611 216 oder 0175 666 3336. BattleKart läuft über battlekart.com/de/trier, die Pizza-Bar über pizzabarkenn.de.",
  },
];

const tiles = [
  {
    label: "Soccer",
    href: "/soccerhalle-trier",
    body: "Indoor-Käfig und Outdoor-Platz. Details auf der Soccer-Seite.",
    external: false,
  },
  {
    label: "Tennis & Sandplätze",
    href: "/tennishalle-trier",
    body: "Sand in der Halle und outdoor. Ganzjährig bespielbar.",
    external: false,
  },
  {
    label: "Padel (in Planung)",
    href: "/padel-trier",
    body: "Padel-Court am Standort ist geplant. Info telefonisch.",
    external: false,
  },
  {
    label: "Kindergeburtstag",
    href: "/kindergeburtstag-trier",
    body: "Sportlich feiern in Kenn. Details und Termine telefonisch.",
    external: false,
  },
  {
    label: "Teamevent",
    href: "/teamevent-trier",
    body: "Firmentag modular am Standort: Soccer, BattleKart, Pizza-Bar.",
    external: false,
  },
  {
    label: "BattleKart",
    href: EXTERNAL_LINKS.battlekart,
    body: "Elektro-Karts mit Projektion, buchbar direkt beim Partner.",
    external: true,
  },
  {
    label: "Pizza-Bar",
    href: EXTERNAL_LINKS.pizzabar,
    body: "Steinofen-Pizza am Standort, Karte und Reservierung extern.",
    external: true,
  },
];

export default function IndoorAktivitaetenTrierPage() {
  return (
    <LandingShell
      breadcrumb={{ name: "Indoor Aktivitäten Trier", path: "/indoor-aktivitaeten-trier" }}
    >
      <FAQJsonLd items={faqs} />

      <LandingHero
        eyebrow="Indoor Aktivitäten bei Trier"
        headline="Wenn draußen Regen ist, ist hier alles offen."
        sub="Sportcenter Kenn bündelt Sport, Karts und Pizza-Bar an einem Standort nahe Trier. Auch bei Wetter, das draußen keine Freude macht."
        image={PHOTOS.soccerHero}
      />

      <LandingSection title="Alle Angebote am Standort">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {tiles.map((t) =>
            t.external ? (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[18px] bg-white px-5 py-5 md:px-6 md:py-6 hover:-translate-y-[2px] transition-transform"
              >
                <div className="text-[13px] uppercase tracking-[0.14em] text-brand font-semibold">
                  Extern
                </div>
                <div className="mt-1 text-[17px] md:text-[19px] font-semibold text-ink">
                  {t.label} ↗
                </div>
                <p className="mt-2 text-[14.5px] text-ink-2">{t.body}</p>
              </a>
            ) : (
              <Link
                key={t.label}
                href={t.href}
                className="block rounded-[18px] bg-white px-5 py-5 md:px-6 md:py-6 hover:-translate-y-[2px] transition-transform"
              >
                <div className="text-[13px] uppercase tracking-[0.14em] text-brand font-semibold">
                  Am Standort
                </div>
                <div className="mt-1 text-[17px] md:text-[19px] font-semibold text-ink">
                  {t.label} →
                </div>
                <p className="mt-2 text-[14.5px] text-ink-2">{t.body}</p>
              </Link>
            )
          )}
        </div>
      </LandingSection>

      <LandingSection title="Warum alles an einem Standort ist" dark>
        <p>
          Für Familien und Gruppen aus Trier und Umgebung ist der Standort in
          Kenn oft die einfachste Antwort auf zwei häufige Fragen: „Was machen
          wir bei Regen?" und „Wo geht Sport plus Essen an einem Ort?".
        </p>
        <p>
          Sportcenter Kenn und die Partner am selben Standort (BattleKart,
          Pizza-Bar) decken diese Bedarfe zusammen ab, ohne dass man zwischen
          verschiedenen Locations wechseln muss.
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
    </LandingShell>
  );
}

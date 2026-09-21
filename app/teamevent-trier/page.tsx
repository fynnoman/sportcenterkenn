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
import { SITE_URL, EXTERNAL_LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Teamevent Trier — Firmenevent bei Sportcenter Kenn",
  description:
    "Teamevents und Firmenfeiern nahe Trier: Soccer, BattleKart und Pizza-Bar am Standort in Kenn. Individuell telefonisch abgestimmt.",
  alternates: { canonical: "/teamevent-trier" },
  openGraph: {
    title: "Teamevent Trier — Sportcenter Kenn",
    description:
      "Teamevents und Firmenevents im Sportcenter Kenn bei Trier. Ablauf und Details telefonisch.",
    url: `${SITE_URL}/teamevent-trier`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Kann man im Sportcenter Kenn Teamevents machen?",
    answer:
      "Ja. Firmenevents, Teambuilding und Betriebsausflüge werden im Sportcenter Kenn bei Trier angeboten. Ablauf und Bausteine werden individuell telefonisch abgestimmt.",
  },
  {
    question: "Welche Aktivitäten stehen für Teamevents zur Verfügung?",
    answer:
      "Am Standort gibt es Soccer indoor und outdoor, Tennis auf Sand und Billard. BattleKart und Pizza-Bar sind ebenfalls direkt am Standort verfügbar und werden über die jeweiligen Partner gebucht.",
  },
  {
    question: "Wie stimmt man ein Firmenevent ab?",
    answer:
      "Direkt telefonisch: 0151 111 611 216 oder 0175 666 3336. Gruppengröße, Termin und Wunschbausteine werden im Gespräch geklärt.",
  },
];

export default function TeameventTrierPage() {
  return (
    <LandingShell breadcrumb={{ name: "Teamevent Trier", path: "/teamevent-trier" }}>
      <ServiceJsonLd
        name="Teamevent Trier"
        description="Firmenevents und Teamevents im Sportcenter Kenn bei Trier. Modular aus Soccer, Tennis und weiteren Angeboten am Standort."
        serviceType="Teamevent, Firmenevent, Teambuilding"
        url={`${SITE_URL}/teamevent-trier`}
      />
      <FAQJsonLd items={faqs} />

      <LandingHero
        eyebrow="Teamevent bei Trier"
        headline="Der Firmentag, ohne langes Planen."
        sub="Sportcenter Kenn bündelt Soccer, BattleKart und eine Pizza-Bar an einem Ort — nahe Trier. Rest planen wir gemeinsam am Telefon."
        image={PHOTOS.battlekartHero}
      />

      <LandingSection title="Teamevent im Sportcenter Kenn">
        <p>
          Ein Firmentag braucht selten viele Bausteine, dafür die richtigen: ein
          Ort, an dem sich Sport, etwas Adrenalin und Essen kombinieren lassen,
          ohne zwischendurch das Auto zu wechseln. Sportcenter Kenn bringt
          diese Elemente an einem Standort direkt bei Trier zusammen.
        </p>
        <p>
          Wir arbeiten nicht mit festen Pauschalpaketen auf der Website. Das
          hat einen Grund: jede Gruppe ist anders. Gruppengröße, Zeitbudget und
          Wunschaktivitäten fließen direkt in die Abstimmung am Telefon ein.
        </p>
      </LandingSection>

      <LandingSection title="Was ihr am Standort kombinieren könnt" dark>
        <p>
          <strong className="text-white">Soccer.</strong> Indoor im Käfig oder
          outdoor auf offenem Platz. Details:{" "}
          <Link href="/soccerhalle-trier" className="link-arrow link-arrow-onDark !font-medium">
            Soccerhalle Trier
          </Link>
          .
        </p>
        <p>
          <strong className="text-white">Tennis.</strong> Sand indoor und
          outdoor. Details:{" "}
          <Link href="/tennishalle-trier" className="link-arrow link-arrow-onDark !font-medium">
            Tennishalle Trier
          </Link>
          .
        </p>
        <p>
          <strong className="text-white">BattleKart.</strong> Elektro-Karts mit
          Projektion. Buchung erfolgt über den Partner direkt am Standort:{" "}
          <a
            href={EXTERNAL_LINKS.battlekart}
            target="_blank"
            rel="noreferrer"
            className="link-arrow link-arrow-onDark !font-medium"
          >
            battlekart.com/de/trier
          </a>
          .
        </p>
        <p>
          <strong className="text-white">Pizza-Bar.</strong> Direkt am Standort
          für den Abschluss:{" "}
          <a
            href={EXTERNAL_LINKS.pizzabar}
            target="_blank"
            rel="noreferrer"
            className="link-arrow link-arrow-onDark !font-medium"
          >
            pizzabarkenn.de
          </a>
          .
        </p>
      </LandingSection>

      <LandingSection title="Anfrage stellen">
        <p>
          Am schnellsten geht das direkt am Telefon. Wichtig sind uns nur ein
          paar Eckdaten: wie viele Personen ihr seid, an welchem Datum ihr
          plant und ob es eher sportlich oder eher geselliger werden soll.
        </p>
        <p>
          <strong>0151 111 611 216</strong> · <strong>0175 666 3336</strong>
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

      <RelatedLinks exclude="/teamevent-trier" />
    </LandingShell>
  );
}

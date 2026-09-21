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
  title: "Tennishalle Trier — Sand Indoor & Outdoor bei Kenn",
  description:
    "Tennis auf Sand im Sportcenter Kenn nahe Trier. Indoor- und Outdoor-Sandplätze, Reservierung telefonisch beim Betreiber.",
  alternates: { canonical: "/tennishalle-trier" },
  openGraph: {
    title: "Tennishalle Trier — Indoor & Outdoor Sandplätze bei Kenn",
    description:
      "Tennis Indoor und Outdoor auf Sand im Sportcenter Kenn bei Trier. Reservierung telefonisch.",
    url: `${SITE_URL}/tennishalle-trier`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Wo befindet sich die Tennishalle bei Trier?",
    answer:
      "Im Sportcenter Kenn, Spitzstraße 20, 54344 Kenn, wenige Minuten östlich von Trier.",
  },
  {
    question: "Ist Tennis indoor und outdoor möglich?",
    answer:
      "Ja. Im Sportcenter Kenn stehen Sandplätze indoor und outdoor zur Verfügung, sodass ganzjährig gespielt werden kann.",
  },
  {
    question: "Wie reserviere ich einen Tennisplatz?",
    answer:
      "Reservierungen laufen direkt beim Sportcenter Kenn telefonisch über 0151 111 611 216 oder 0175 666 3336.",
  },
];

export default function TennishalleTrierPage() {
  return (
    <LandingShell breadcrumb={{ name: "Tennishalle Trier", path: "/tennishalle-trier" }}>
      <ServiceJsonLd
        name="Tennishalle Trier"
        description="Indoor- und Outdoor-Sandplätze für Tennis im Sportcenter Kenn bei Trier."
        serviceType="Tennis, Sandplatz Indoor, Sandplatz Outdoor"
        url={`${SITE_URL}/tennishalle-trier`}
      />
      <FAQJsonLd items={faqs} />

      <LandingHero
        eyebrow="Tennishalle bei Trier"
        headline="Sand, drinnen wie draußen."
        sub="Im Sportcenter Kenn spielst du Tennis auf Sand — in der Halle wenn das Wetter nicht mitspielt, draußen sobald die Sonne scheint. Beides direkt bei Trier."
        image={PHOTOS.tennisHero}
      />

      <LandingSection title="Tennis im Sportcenter Kenn">
        <p>
          Sportcenter Kenn liegt in Kenn, direkt bei Trier, und bietet Tennis
          auf Sand ganzjährig. Outdoor spielst du auf offener Anlage, sobald
          das Wetter mitspielt. Bei Regen oder in der kalten Jahreszeit geht es
          in die Halle, auf demselben Belag.
        </p>
        <p>
          Damit deckt der Standort die zwei häufigsten Tennis-Szenarien in der
          Region ab: Sommer draußen, Winter drinnen, ohne Belagswechsel.
        </p>
      </LandingSection>

      <LandingSection title="Für wen sich die Tennishalle eignet" dark>
        <p>
          <strong className="text-white">Spontane Runden.</strong> Kurzer
          Anruf, Platz gebucht, spielen.
        </p>
        <p>
          <strong className="text-white">Regelmäßige Spieler.</strong> Wer
          feste Slots pro Woche will, bespricht das direkt am Telefon —
          Abo-Modelle und Sommerkarten laufen darüber.
        </p>
        <p>
          <strong className="text-white">Wetterfeste Termine.</strong> Wenn
          draußen kein Spiel möglich ist, wechselst du auf denselben Belag in
          die Halle.
        </p>
      </LandingSection>

      <LandingSection title="Padel kommt zum Standort">
        <p>
          Neben Tennis ist Padel im Sportcenter Kenn in Vorbereitung. Details
          zum Padel-Angebot findest du auf der{" "}
          <Link href="/padel-trier" className="link-arrow !text-ink !font-medium">
            Padel-Seite
          </Link>
          .
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

      <RelatedLinks exclude="/tennishalle-trier" />
    </LandingShell>
  );
}

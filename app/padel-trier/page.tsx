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
  title: "Padel Trier — Padel bei Sportcenter Kenn in Planung",
  description:
    "Padel bei Trier: Im Sportcenter Kenn ist ein Padel-Court in Planung. Rechtzeitig informiert werden — telefonisch anmelden.",
  alternates: { canonical: "/padel-trier" },
  openGraph: {
    title: "Padel Trier — Padel im Sportcenter Kenn (in Planung)",
    description:
      "Padel-Court in Kenn nahe Trier befindet sich in Planung. Info zum Start telefonisch beim Sportcenter Kenn.",
    url: `${SITE_URL}/padel-trier`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Kann man in Kenn bei Trier schon Padel spielen?",
    answer:
      "Padel im Sportcenter Kenn ist aktuell in Planung. Sobald der Court eröffnet, wird das Angebot hier und auf der Startseite kommuniziert.",
  },
  {
    question: "Wo wird das Padel-Angebot verortet sein?",
    answer:
      "Im Sportcenter Kenn, Spitzstraße 20, 54344 Kenn, direkt neben den bestehenden Tennisplätzen und der Halle.",
  },
  {
    question: "Wie erfahre ich, wann Padel startet?",
    answer:
      "Für Rückfragen und eine Voranmeldung erreichst du das Sportcenter Kenn telefonisch unter 0151 111 611 216 oder 0175 666 3336.",
  },
];

export default function PadelTrierPage() {
  return (
    <LandingShell breadcrumb={{ name: "Padel Trier", path: "/padel-trier" }}>
      <ServiceJsonLd
        name="Padel Trier (in Planung)"
        description="Padel im Sportcenter Kenn bei Trier ist in Planung. Informationen zum Start telefonisch."
        serviceType="Padel"
        url={`${SITE_URL}/padel-trier`}
      />
      <FAQJsonLd items={faqs} />

      <LandingHero
        eyebrow="Padel bei Trier"
        headline="Padel kommt nach Kenn."
        sub="Im Sportcenter Kenn ist Padel in Planung. Wer als Erstes spielen möchte, meldet sich am besten kurz telefonisch — dann bekommst du Bescheid, sobald es losgeht."
        image={PHOTOS.tennisHero}
      />

      <LandingSection title="Padel im Sportcenter Kenn ist in Planung">
        <p>
          Padel gehört aktuell zu den am schnellsten wachsenden Racketsportarten
          in Deutschland. Sportcenter Kenn bereitet den Standort für einen
          Padel-Court vor. Ein fester Eröffnungstermin wird kommuniziert,
          sobald er feststeht.
        </p>
        <p>
          Bis dahin kannst du dich telefonisch bei uns melden — wir schreiben
          dich vor, sobald die ersten Slots buchbar sind. Weitere Informationen
          folgen auf dieser Seite.
        </p>
      </LandingSection>

      <LandingSection title="Was Padel in Kenn interessant macht" dark>
        <p>
          <strong className="text-white">Standort neben Tennis.</strong> Der
          Padel-Court ist am selben Standort wie die bestehenden Sandplätze
          geplant. Wer Tennis mag, hat den Weg kurz.
        </p>
        <p>
          <strong className="text-white">In der Region Trier.</strong> Kenn
          liegt östlich von Trier. Für Spieler aus Trier, Konz, Schweich und
          Umgebung ist der Standort direkt erreichbar.
        </p>
        <p>
          <strong className="text-white">Rundumangebot.</strong> Neben dem
          späteren Padel-Court gibt es am Standort Soccer, Tennis, BattleKart
          und eine Pizza-Bar.
        </p>
      </LandingSection>

      <LandingSection title="Bis dahin: Tennis auf Sand">
        <p>
          Solange der Padel-Court nicht bespielbar ist, ist Tennis auf Sand die
          direkte Alternative in Kenn. Mehr dazu auf der{" "}
          <Link href="/tennishalle-trier" className="link-arrow !text-ink !font-medium">
            Tennis-Seite
          </Link>{" "}
          — Indoor und Outdoor auf Sand, direkt beim Betreiber telefonisch
          buchbar.
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

      <RelatedLinks exclude="/padel-trier" />
    </LandingShell>
  );
}

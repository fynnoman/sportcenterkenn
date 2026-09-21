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
  title: "Soccerhalle Trier — Indoor & Outdoor Fußball bei Kenn",
  description:
    "Indoor- und Outdoor-Fußball im Sportcenter Kenn nahe Trier. Plätze direkt beim Betreiber telefonisch reservieren.",
  alternates: { canonical: "/soccerhalle-trier" },
  openGraph: {
    title: "Soccerhalle Trier — Indoor & Outdoor Fußball bei Kenn",
    description:
      "Fußball indoor und outdoor bei Trier, im Sportcenter Kenn. Reservierung telefonisch.",
    url: `${SITE_URL}/soccerhalle-trier`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Wo befindet sich die Soccerhalle bei Trier?",
    answer:
      "Im Sportcenter Kenn, Spitzstraße 20, 54344 Kenn, direkt vor den Toren von Trier in Rheinland-Pfalz.",
  },
  {
    question: "Wie reserviere ich einen Platz?",
    answer:
      "Reservierungen laufen direkt beim Sportcenter Kenn telefonisch über 0151 111 611 216 oder 0175 666 3336.",
  },
  {
    question: "Gibt es Indoor- und Outdoor-Fußball?",
    answer:
      "Ja. Sportcenter Kenn bietet Fußball indoor und outdoor. Bei Regen wird auf die Halle ausgewichen.",
  },
];

export default function SoccerhalleTrierPage() {
  return (
    <LandingShell breadcrumb={{ name: "Soccerhalle Trier", path: "/soccerhalle-trier" }}>
      <ServiceJsonLd
        name="Soccerhalle Trier"
        description="Indoor- und Outdoor-Fußball im Sportcenter Kenn bei Trier. Reservierung telefonisch."
        serviceType="Indoor soccer, outdoor soccer"
        url={`${SITE_URL}/soccerhalle-trier`}
      />
      <FAQJsonLd items={faqs} />

      <LandingHero
        eyebrow="Soccerhalle bei Trier"
        headline="Fußball, drinnen wie draußen."
        sub="Im Sportcenter Kenn spielst du Indoor-Soccer im Käfig und Outdoor auf offenem Platz — bei jedem Wetter und ganz in der Nähe von Trier."
        image={PHOTOS.soccerHero}
      />

      <LandingSection title="Soccerhalle im Sportcenter Kenn">
        <p>
          Das Sportcenter Kenn liegt in Kenn, direkt bei Trier. Fußball läuft
          hier ganzjährig: Indoor im Käfig, wenn draußen das Wetter nicht
          mitspielt, und auf den offenen Plätzen, sobald die Sonne rauskommt.
          Ob spontane Runde mit den Kollegen, geplantes Turnier oder Training
          in der Gruppe, der Ball rollt hier zuverlässig.
        </p>
        <p>
          Wie viele Plätze in welchen Größen aktuell frei sind, klärst du am
          schnellsten telefonisch. Konditionen und offene Slots werden dabei
          direkt am Telefon abgestimmt.
        </p>
      </LandingSection>

      <LandingSection title="Wie du in Kenn spielst" dark>
        <p>
          <strong className="text-white">1. Anrufen.</strong> Sag kurz, wann
          und mit wie vielen Leuten du spielen willst.
        </p>
        <p>
          <strong className="text-white">2. Reservieren.</strong> Der Platz
          wird direkt bei uns eingebucht. Bei kurzfristigen Anfragen hilft ein
          Anruf immer weiter.
        </p>
        <p>
          <strong className="text-white">3. Vorbeikommen.</strong> Spitzstraße
          20 in Kenn. Umziehen, spielen, Runde ausklingen lassen. Direkt am
          Standort gibt es außerdem eine Pizza-Bar und Billard.
        </p>
      </LandingSection>

      <LandingSection title="Anfahrt aus Trier">
        <p>
          Kenn liegt östlich von Trier, direkt hinter der Mosel. Die
          Spitzstraße 20 erreichst du in wenigen Minuten aus dem Trierer
          Stadtgebiet. Auf Google Maps läuft der Standort unter
          {" "}<em>Soccerhalle Kenn</em>{" "}
          und{" "}
          <em>Sportcenter Kenn</em>.
        </p>
        <p>
          Für Fahrer, Gäste und Gruppen gibt es Parkplätze direkt vor Ort.
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
        <p className="text-[14.5px] mt-4">
          Mehr zum{" "}
          <Link href="/tennishalle-trier" className="link-arrow !text-ink !font-medium">
            Tennis bei Kenn
          </Link>{" "}
          oder zu{" "}
          <Link href="/kindergeburtstag-trier" className="link-arrow !text-ink !font-medium">
            Kindergeburtstagen
          </Link>
          .
        </p>
      </LandingSection>

      <RelatedLinks exclude="/soccerhalle-trier" />
    </LandingShell>
  );
}

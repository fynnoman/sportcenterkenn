import { PHOTOS } from "../lib/photos";

const features = [
  {
    title: "Indoor-Käfige",
    body:
      "Drei 30 × 15 m Courts mit Bande und Fangnetzen. Kein Ball verloren, kein Warten auf Rückgabe.",
  },
  {
    title: "Outdoor-Plätze",
    body:
      "Drei 40 × 20 m Plätze für längere Matches — flexibel für Formate von 5 v 5 bis 6 v 6.",
  },
  {
    title: "Kunstrasen neuester Gen.",
    body:
      "UEFA-Zulassung, konstantes Spielverhalten, keine Schürfwunden, gelenkschonend.",
  },
  {
    title: "Turniere & Ligen",
    body:
      "Wir richten Firmenturniere, Kollegen-Ligen und Kindergeburtstage aus — Plan- und Spielleitung inklusive.",
  },
];

export default function Soccer() {
  return (
    <section id="soccer" className="relative bg-jet text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-brand" />
              <span className="h-eyebrow h-eyebrow-onDark uppercase tracking-[0.18em] text-brand-onDark font-semibold">
                01 · Soccer
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Fußball, bei jedem Wetter — auf sechs Plätzen.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-white/75">
              Spontan mit den Kollegen verabreden, in der Firma ein Turnier
              aufziehen oder Sohn und Tochter vorbeischicken: Indoor Soccer im
              Käfig oder Outdoor auf offenem Platz — bei uns rollt der Ball.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+4965028811" className="btn btn-onDark-primary">
                Platz buchen
              </a>
              <a href="#kontakt" className="link-arrow link-arrow-onDark">
                Turnier anfragen →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6">
        <div
          className="mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] bg-[#111] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%), url('${PHOTOS.soccerHero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-[18px] p-5 md:p-6 bg-white/[0.04] border border-white/10 h-full"
            >
              <div className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">
                Feature
              </div>
              <div className="mt-2 text-[17px] md:text-[19px] font-semibold tracking-[-0.015em] leading-tight">
                {f.title}
              </div>
              <p className="mt-3 text-[13.5px] text-white/70 leading-[1.5]">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Big-number strip */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 gap-x-4 md:gap-x-6 border-t border-white/10 pt-8 md:pt-12">
          <NumStat kpi="6" label="Plätze" />
          <NumStat kpi="3 × Indoor" label="30 × 15 m" />
          <NumStat kpi="3 × Outdoor" label="40 × 20 m" />
          <NumStat kpi="2 v 2 – 6 v 6" label="jedes Format" />
        </div>
      </div>
    </section>
  );
}

function NumStat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="text-[26px] md:text-[44px] font-semibold tracking-[-0.03em] leading-none">
        {kpi}
      </div>
      <div className="mt-2 text-[12.5px] md:text-[14px] text-white/55 leading-snug">
        {label}
      </div>
    </div>
  );
}

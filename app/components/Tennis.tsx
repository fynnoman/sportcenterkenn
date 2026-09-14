import { PHOTOS } from "../lib/photos";

const features = [
  {
    title: "Sandplätze",
    body:
      "Roter Ton wie in Paris — leichter Grip, weiches Aufkommen, gelenkschonend über alle Altersgruppen.",
  },
  {
    title: "Wetter egal",
    body:
      "Draußen scheint die Sonne? Draußen. Regen im Anmarsch? Rüber in die Halle, gleicher Belag.",
  },
  {
    title: "Buchen oder Abo",
    body:
      "Einzelne Stunden für spontanes Spiel, oder feste Slots pro Woche als Abo — beides möglich.",
  },
  {
    title: "Ausleihe & Bespannung",
    body:
      "Schläger und Bälle vor Ort, Bespannungsservice auf Anfrage. Vergünstigte Tarife mit Sommerkarte.",
  },
];

export default function Tennis() {
  return (
    <section id="tennis" className="relative bg-bg text-ink overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                02 · Tennis
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Sand, drinnen wie draußen — vier Plätze das ganze Jahr.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-ink-2">
              Drei Sandplätze im Freien, ein weiterer in der Halle. Buche einzeln,
              hol dir ein Abo oder sichere dir die Sommerkarte für die
              Outdoor-Saison. Wir kümmern uns um Belag, Bälle und Bespannung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+4965028811" className="btn btn-primary">
                Platz buchen
              </a>
              <a href="#sommerkarte" className="link-arrow">
                Sommerkarte ansehen →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6">
        <div
          className="mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] bg-bg-2 overflow-hidden"
          style={{
            backgroundImage: `url('${PHOTOS.tennisHero}')`,
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
              className="rounded-[18px] p-5 md:p-6 bg-white border border-line h-full"
            >
              <div className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-ink-3">
                Feature
              </div>
              <div className="mt-2 text-[17px] md:text-[19px] font-semibold tracking-[-0.015em] leading-tight text-ink">
                {f.title}
              </div>
              <p className="mt-3 text-[13.5px] text-ink-2 leading-[1.5]">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 gap-x-4 md:gap-x-6 border-t border-line pt-8 md:pt-12">
          <NumStatLight kpi="4" label="Plätze" />
          <NumStatLight kpi="3 × Outdoor" label="Sandplatz · offen" />
          <NumStatLight kpi="1 × Indoor" label="Sandplatz · Halle" />
          <NumStatLight kpi="140 €" label="Sommerkarte" />
        </div>
      </div>
    </section>
  );
}

function NumStatLight({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="text-[26px] md:text-[44px] font-semibold tracking-[-0.03em] leading-none">
        {kpi}
      </div>
      <div className="mt-2 text-[12.5px] md:text-[14px] text-ink-2 leading-snug">
        {label}
      </div>
    </div>
  );
}

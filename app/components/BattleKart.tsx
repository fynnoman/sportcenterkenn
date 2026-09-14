import { PHOTOS } from "../lib/photos";

const modes = [
  {
    name: "Race",
    body: "Klassisches Rennen. Sechs Runden, beste Zeit gewinnt.",
  },
  {
    name: "Battle",
    body: "Bonusfelder einsammeln, Gegner blockieren, Punkte kassieren.",
  },
  {
    name: "Foot",
    body: "Fußball im E-Kart: Ball ins Tor schubsen, virtuell.",
  },
];

export default function BattleKart() {
  return (
    <section id="battlekart" className="relative bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-brand" />
              <span className="h-eyebrow h-eyebrow-onDark uppercase tracking-[0.18em] text-brand-onDark font-semibold">
                03 · BattleKart
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Das reale Videospiel — Karts, Projektion, Adrenalin.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-white/75">
              Elektro-Karting kombiniert mit Augmented Reality. Strecken und
              Bonusfelder werden live auf den Boden projiziert. Du fährst, aber
              du spielst gleichzeitig. Perfekt für Firmen, Junggesellenabschiede
              und einfach nur guten Abend.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+4965028811" className="btn btn-onDark-primary">
                Session buchen
              </a>
              <a href="#kontakt" className="link-arrow link-arrow-onDark">
                Firmenevent anfragen →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6">
        <div
          className="mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#0a0a0a]"
          style={{
            backgroundImage: `url('${PHOTOS.battlekartHero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {modes.map((m) => (
            <div
              key={m.name}
              className="rounded-[18px] p-5 md:p-7 bg-white/[0.05] border border-white/10"
            >
              <div className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">
                Modus
              </div>
              <div className="mt-2 text-[22px] md:text-[26px] font-semibold tracking-[-0.02em]">
                {m.name}
              </div>
              <p className="mt-3 text-[13.5px] md:text-[14px] text-white/70 leading-[1.5]">
                {m.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 gap-x-4 md:gap-x-6 border-t border-white/10 pt-8 md:pt-12">
          <NumStat kpi="100 %" label="elektrische Karts" />
          <NumStat kpi="AR" label="Spielfeld projiziert" />
          <NumStat kpi="3" label="Modi wählbar" />
          <NumStat kpi="ab 1,40 m" label="Mindestgröße" />
        </div>
      </div>
    </section>
  );
}

function NumStat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="text-[22px] md:text-[38px] font-semibold tracking-[-0.025em] leading-none">
        {kpi}
      </div>
      <div className="mt-2 text-[12.5px] md:text-[14px] text-white/55 leading-snug">
        {label}
      </div>
    </div>
  );
}

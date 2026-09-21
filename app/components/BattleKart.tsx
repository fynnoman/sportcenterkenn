import { PHOTOS } from "../lib/photos";

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
              Das reale Videospiel. Karts, Projektion, Adrenalin.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-white/75">
              Elektro-Karts, die durch eine Welt aus Licht fahren. Strecke,
              Gegner und Ziele werden live auf den Boden projiziert. Ein
              Erlebnis für Freunde, Firmen und alle, die einen wirklich
              besonderen Abend suchen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.battlekart.com/de/trier"
                target="_blank"
                rel="noreferrer"
                className="btn btn-onDark-primary"
              >
                Zur BattleKart-Seite
              </a>
            </div>
            <div className="mt-4 text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">
              Buchung online · battlekart.com/de/trier
            </div>
            <div className="mt-5">
              <a
                href="/teamevent-trier"
                className="link-arrow link-arrow-onDark !font-medium"
              >
                BattleKart als Teamevent bei Trier →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6 pb-20 md:pb-32">
        <a
          href="https://www.battlekart.com/de/trier"
          target="_blank"
          rel="noreferrer"
          className="group mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#0a0a0a] relative flex items-end justify-start"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%), url('${PHOTOS.battlekartHero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="m-5 md:m-7 inline-flex items-center gap-2 text-[12px] md:text-[13px] uppercase tracking-[0.16em] text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 transition-transform duration-200 ease-out group-hover:-translate-y-[2px]">
            battlekart.com/de/trier
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

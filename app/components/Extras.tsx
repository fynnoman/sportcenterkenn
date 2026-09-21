import { PHOTOS } from "../lib/photos";

export default function Extras() {
  return (
    <section
      id="extras"
      className="relative bg-bg text-ink overflow-hidden py-20 md:py-32 px-5 md:px-6"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                Drumherum
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[760px]">
              Alles, was den Tag <span className="text-brand">rundmacht.</span>
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[16px] text-ink-2 max-w-[400px]">
            Neben Sport und Kart gibt es bei uns die Kleinigkeiten, die aus
            einem Besuch einen ganzen Nachmittag machen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          <a
            href="https://www.pizzabarkenn.de"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[22px] text-white aspect-[4/5] md:aspect-auto md:min-h-[440px] flex flex-col justify-end p-5 md:p-7 transition-transform duration-200 ease-out hover:-translate-y-[3px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%), url('${PHOTOS.pizza}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-white/70">
              Eigene Website
            </div>
            <div className="mt-2 text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] leading-[1.05]">
              Pizza-Bar
            </div>
            <p className="mt-3 text-[13.5px] md:text-[14.5px] text-white/80 leading-relaxed max-w-md">
              Steinofen, kalte Getränke, Karte und Reservierung, alles direkt
              über die Pizza-Bar Kenn.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-[13px] text-white/90 group-hover:text-white transition-colors">
              pizzabarkenn.de
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <div
            id="billard"
            className="relative overflow-hidden rounded-[22px] text-white aspect-[4/5] md:aspect-auto md:min-h-[440px] flex flex-col justify-end p-5 md:p-7"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%), url('${PHOTOS.billiards}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-white/70">
              Vor Ort
            </div>
            <div className="mt-2 text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] leading-[1.05]">
              Billard
            </div>
            <p className="mt-3 text-[13.5px] md:text-[14.5px] text-white/80 leading-relaxed max-w-md">
              Pool-Tische neben der Bar für die Runde zwischendurch. Queue und
              Kreide bekommst du an der Theke.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-[22px] text-white aspect-[4/5] md:aspect-auto md:min-h-[440px] flex flex-col justify-end p-5 md:p-7 bg-jet"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(20,20,20,0.6) 0%, rgba(0,0,0,0.9) 100%), url('${PHOTOS.kids}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-white/70">
              Für die Kleinen
            </div>
            <div className="mt-2 text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] leading-[1.05]">
              Spiel-Automaten
            </div>
            <p className="mt-3 text-[13.5px] md:text-[14.5px] text-white/80 leading-relaxed max-w-md">
              Klassische Kids-Automaten für kurze Pausen zwischen den Spielen,
              gemütlich neben der Pizza-Bar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { PHOTOS } from "../lib/photos";

export default function NachDemSpiel() {
  return (
    <section
      id="nach-dem-spiel"
      className="relative bg-jet text-white overflow-hidden"
    >
      <div className="px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="rule-brand" />
          <span className="h-eyebrow h-eyebrow-onDark uppercase tracking-[0.18em] text-brand-onDark font-semibold">
            Nach dem Spiel
          </span>
        </div>
        <h2 className="h-display text-[36px] sm:text-[56px] md:text-[88px] max-w-[900px] mx-auto leading-[1.05]">
          Bleib noch <span className="text-white/60">eine Runde.</span>
        </h2>
        <p className="mt-5 md:mt-6 max-w-[560px] mx-auto text-[15.5px] md:text-[19px] leading-[1.45] text-white/75 tracking-[-0.005em]">
          Highlights nochmal durchgehen, kalt trinken, frisch essen und noch
          einen Tisch spielen. Billard und Pizza-Bar direkt neben den Plätzen.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          <div
            id="billard"
            className="relative rounded-[20px] md:rounded-[22px] overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[520px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%), url('${PHOTOS.billiards}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-9">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                Billard
              </div>
              <div className="mt-2 text-[24px] md:text-[42px] font-semibold tracking-[-0.02em] leading-[1.05]">
                Ruhig. Präzise.
              </div>
              <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-md">
                Pool-Tische neben der Bar. Reservierung an der Theke oder
                telefonisch, bei Bedarf gibt es Queue und Kreide.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Pool", "Reservierbar", "Neben der Bar"].map((c) => (
                  <span
                    key={c}
                    className="text-[11px] uppercase tracking-[0.14em] px-3 py-1 rounded-full border border-white/25 text-white/85"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative rounded-[22px] overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[520px] bg-[#3a2418]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.80) 100%), url('${PHOTOS.pizza}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-9">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                Pizza-Bar
              </div>
              <div className="mt-2 text-[24px] md:text-[42px] font-semibold tracking-[-0.02em] leading-[1.05]">
                Frisch aus dem Steinofen.
              </div>
              <p className="mt-3 text-[14px] md:text-[15px] text-white/80 leading-relaxed max-w-md">
                Klassiker und Wochenkarte, kalte Getränke, Kaffee und Snacks.
                Für größere Gruppen bitte kurz reservieren.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  ["Steinofen", "täglich frisch"],
                  ["Getränke", "Soft · Bier · Wein"],
                  ["Kaffee", "vor & nach dem Match"],
                  ["Gruppen", "auf Anfrage"],
                ].map(([t, s]) => (
                  <div key={t} className="text-white/85">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                      {t}
                    </div>
                    <div className="text-[13.5px]">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 md:mt-20 mx-auto max-w-[720px] text-center text-[16px] md:text-[24px] leading-[1.4] md:leading-[1.35] tracking-[-0.015em] text-white/85">
          „Kein Genuss ist vorübergehend, denn der Eindruck, den er zurücklässt,
          ist bleibend."
        </p>
      </div>
    </section>
  );
}

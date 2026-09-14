import { PHOTOS } from "../lib/photos";

const tiles: { src: string; label: string; span: string; ratio: string }[] = [
  { src: PHOTOS.soccerHero,     label: "Duell auf dem Kunstrasen",  span: "md:col-span-8", ratio: "aspect-[16/9]" },
  { src: PHOTOS.billiards,      label: "Break beim Pool",           span: "md:col-span-4", ratio: "aspect-[4/5]" },
  { src: PHOTOS.tennisHero,     label: "Sand & Sonnenlicht",        span: "md:col-span-6", ratio: "aspect-[16/10]" },
  { src: PHOTOS.battlekartHero, label: "BattleKart at Night",       span: "md:col-span-6", ratio: "aspect-[16/10]" },
  { src: PHOTOS.kids,           label: "Happy Birthday",            span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { src: PHOTOS.pizza,          label: "Frisch aus dem Ofen",       span: "md:col-span-5", ratio: "aspect-[4/5]" },
];

export default function Momente() {
  return (
    <section className="relative bg-bg-2 py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                Momente
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[40px] md:text-[52px] font-semibold tracking-[-0.03em] leading-[1.08] max-w-[720px]">
              Ein Nachmittag bei uns, in <span className="text-brand">sechs Bildern.</span>
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[16px] text-ink-2 max-w-[380px]">
            Zwischen Anpfiff und dem letzten Bissen Pizza passiert einiges bei
            uns. Ein kleiner Vorgeschmack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-[18px] md:rounded-[22px] ${t.span} ${t.ratio}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%), url('${t.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-4 left-5 text-[12px] uppercase tracking-[0.18em] text-white/95 font-medium">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

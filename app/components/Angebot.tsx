import { PHOTOS } from "../lib/photos";

const items = [
  {
    tag: "01",
    title: "Indoor Soccer",
    line: "Käfig in der Halle",
    href: "#soccer",
    image: PHOTOS.soccerHero,
  },
  {
    tag: "02",
    title: "Tennis",
    line: "Sand, drinnen & draußen",
    href: "#tennis",
    image: PHOTOS.tennisHero,
  },
  {
    tag: "03",
    title: "Padel",
    line: "Glas, Käfig, schnelle Runden",
    href: "#padel",
    image: PHOTOS.padelHero,
  },
  {
    tag: "04",
    title: "BattleKart",
    line: "Karts trifft Videospiel",
    href: "#battlekart",
    image: PHOTOS.battlekartHero,
  },
];

export default function Angebot() {
  return (
    <section id="angebot" className="relative bg-bg py-16 md:py-28 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.14em] text-brand font-semibold">
                Angebot
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[720px]">
              Der Fokus liegt <span className="text-brand">auf dem Sport.</span>
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[16px] text-ink-2 max-w-[380px]">
            Alles unter einem Dach: sportlich, gesellig und wetterunabhängig.
            Wähl aus, worauf du heute Lust hast, oder kombinier's.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((it) => (
            <a
              key={it.tag}
              href={it.href}
              className="group relative overflow-hidden rounded-[22px] text-white min-h-[280px] md:min-h-[340px] flex flex-col justify-end p-5 md:p-7 transition-transform duration-200 ease-out hover:-translate-y-[3px] active:scale-[0.99]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.85) 100%), url('${it.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-4 left-4 md:top-6 md:left-6 h-8 w-8 md:h-10 md:w-10 rounded-full bg-brand text-white grid place-items-center text-[13px] md:text-[15px] font-semibold tracking-[-0.01em]">
                {it.tag}
              </div>

              <div className="text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-white/70">
                {it.line}
              </div>
              <div className="mt-2 font-semibold tracking-[-0.02em] leading-[1.05] text-[24px] md:text-[30px]">
                {it.title}
              </div>
              <span
                aria-hidden
                className="mt-4 inline-flex items-center gap-1 text-[13px] text-white/85 group-hover:text-white transition-colors duration-150"
              >
                Mehr erfahren
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

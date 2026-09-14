import { PHOTOS } from "../lib/photos";

const items = [
  {
    tag: "01",
    title: "Indoor & Outdoor Soccer",
    line: "6 Plätze · Kunstrasen · UEFA-Zulassung",
    href: "#soccer",
    image: PHOTOS.soccerHero,
    span: "md:col-span-3 md:row-span-2",
    size: "text-[28px] md:text-[40px]",
  },
  {
    tag: "02",
    title: "Tennis auf Sand",
    line: "3× Outdoor · 1× Indoor",
    href: "#tennis",
    image: PHOTOS.tennisHero,
    span: "md:col-span-3 md:row-span-1",
    size: "text-[24px] md:text-[30px]",
  },
  {
    tag: "03",
    title: "BattleKart",
    line: "Elektro-Karts mit AR",
    href: "#battlekart",
    image: PHOTOS.battlekartHero,
    span: "md:col-span-2 md:row-span-1",
    size: "text-[22px] md:text-[26px]",
  },
  {
    tag: "04",
    title: "Billard",
    line: "Pool an der Bar",
    href: "#billard",
    image: PHOTOS.billiards,
    span: "md:col-span-2 md:row-span-1",
    size: "text-[22px] md:text-[26px]",
  },
  {
    tag: "05",
    title: "Pizza-Bar",
    line: "Steinofen · Getränke",
    href: "#nach-dem-spiel",
    image: PHOTOS.pizza,
    span: "md:col-span-2 md:row-span-1",
    size: "text-[22px] md:text-[26px]",
  },
];

export default function Angebot() {
  return (
    <section id="angebot" className="relative bg-bg py-20 md:py-28 px-6">
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
              Fünf Gründe, <span className="text-brand">wiederzukommen.</span>
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[16px] text-ink-2 max-w-[380px]">
            Alles unter einem Dach: sportlich, gesellig und wetterunabhängig.
            Wähl aus, worauf du heute Lust hast — oder kombinier's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[200px] gap-3 md:gap-4">
          {items.map((it) => (
            <a
              key={it.tag}
              href={it.href}
              className={`group relative overflow-hidden rounded-[22px] text-white ${it.span} min-h-[240px] md:min-h-0 flex flex-col justify-end p-5 md:p-7 transition-transform duration-200 ease-out hover:-translate-y-[3px] active:scale-[0.99]`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.85) 100%), url('${it.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Number chip */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 h-8 w-8 md:h-10 md:w-10 rounded-full bg-brand text-white grid place-items-center text-[13px] md:text-[15px] font-semibold tracking-[-0.01em]">
                {it.tag}
              </div>

              <div className="text-[10.5px] md:text-[11px] uppercase tracking-[0.18em] text-white/70">
                {it.line}
              </div>
              <div className={`mt-2 font-semibold tracking-[-0.02em] leading-[1.05] ${it.size}`}>
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

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            ["365", "Tage im Jahr geöffnet"],
            ["6", "Fußballplätze"],
            ["4", "Tennisplätze"],
            ["1", "Pizza-Bar"],
          ].map(([kpi, label]) => (
            <div
              key={label}
              className="rounded-[18px] bg-white p-5 md:p-6"
            >
              <div className="flex items-baseline gap-2">
                <div className="text-[34px] md:text-[42px] font-semibold tracking-[-0.03em] leading-none text-brand">
                  {kpi}
                </div>
              </div>
              <div className="mt-1 text-[13.5px] text-ink-2">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

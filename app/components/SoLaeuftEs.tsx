const steps = [
  {
    n: "01",
    title: "Anrufen oder Mail",
    body:
      "Sag uns kurz, wann und was du spielen möchtest. Wir schauen live, welcher Platz frei ist.",
  },
  {
    n: "02",
    title: "Vorbeikommen",
    body:
      "Zieh dich um, hol dir bei Bedarf Bälle oder Queue. Der Rest steht bereit.",
  },
  {
    n: "03",
    title: "Spielen und bleiben",
    body:
      "Nach dem Match wartet die Pizza-Bar. Wer noch will, spielt eine Runde Billard.",
  },
];

export default function SoLaeuftEs() {
  return (
    <section className="relative bg-bg py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                So läuft's
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] md:text-[52px] font-semibold tracking-[-0.03em] leading-[1.08]">
              In drei Schritten am Platz.
            </h2>
            <p className="mt-6 text-[15.5px] md:text-[16px] leading-[1.5] text-ink-2 max-w-sm">
              Wir sind flexibel und nehmen uns Zeit. Reservieren spart dir die
              Wartezeit, spontan geht meistens auch.
            </p>

            <div className="mt-8 md:mt-10 rounded-[20px] md:rounded-[22px] bg-white p-6 md:p-7">
              <div className="text-[13px] uppercase tracking-[0.14em] text-ink-2">
                Öffnung
              </div>
              <div className="mt-3 text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.1]">
                Flexibel nach Reservierung
              </div>
              <ul className="mt-5 space-y-2 text-[14.5px] text-ink-2">
                <li className="flex justify-between">
                  <span>Mo bis Fr</span>
                  <span className="text-ink">nach Absprache</span>
                </li>
                <li className="flex justify-between">
                  <span>Sa</span>
                  <span className="text-ink">nach Absprache</span>
                </li>
                <li className="flex justify-between">
                  <span>So & Feiertage</span>
                  <span className="text-ink">nach Absprache</span>
                </li>
              </ul>
              <a href="tel:+4965028811" className="btn btn-primary mt-6 w-full">
                Zeit vereinbaren
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid gap-4 md:gap-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-[20px] md:rounded-[22px] bg-white p-5 md:p-9 flex flex-row items-start md:items-center gap-4 md:gap-10 transition-transform duration-200 ease-out hover:-translate-y-[2px]"
              >
                <div className="text-[34px] md:text-[64px] font-semibold tracking-[-0.03em] leading-none text-brand shrink-0 md:w-[120px]">
                  {s.n}
                </div>
                <div>
                  <div className="text-[18px] md:text-[26px] font-semibold tracking-[-0.02em] leading-tight">
                    {s.title}
                  </div>
                  <p className="mt-2 text-[14.5px] md:text-[16px] text-ink-2 leading-[1.5] max-w-lg">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Sommerkarte() {
  return (
    <section id="sommerkarte" className="bg-bg py-16 md:py-24 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-2 rounded-[24px] md:rounded-[28px] overflow-hidden bg-white">
          <div className="p-7 md:p-14 border-b md:border-b-0 md:border-r border-line">
            <div className="flex items-center gap-3 mb-6">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                Sommerkarte 2026
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[68px] sm:text-[88px] md:text-[112px] font-semibold tracking-[-0.04em] leading-none text-brand">
                140
              </span>
              <span className="text-[30px] sm:text-[38px] md:text-[44px] font-medium text-brand/70 leading-none">
                €
              </span>
            </div>
            <p className="mt-4 text-[15px] text-ink-2">
              Gültig vom 01.05. bis 30.09.
            </p>
            <a href="tel:+4965028811" className="btn btn-primary mt-8">
              Sommerkarte sichern
            </a>
          </div>

          <div className="p-7 md:p-14">
            <div className="text-[14px] uppercase tracking-[0.14em] text-ink-2 mb-6">
              Inklusive
            </div>
            <ul className="space-y-4 text-[16px] leading-[1.45]">
              {[
                "Kostenlose Nutzung aller Outdoorplätze für Erwachsene",
                "Ganzjährige Hallennutzung für Kinder und Jugendliche",
                "Bei Regen: Wechsel in die Halle möglich",
                "Vergünstigte Tarife auf Tennis-Equipment",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-[9px] h-[5px] w-[5px] rounded-full bg-brand shrink-0"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

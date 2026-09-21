export default function Sommerkarte() {
  return (
    <section id="sommerkarte" className="bg-bg py-16 md:py-24 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-2 rounded-[24px] md:rounded-[28px] overflow-hidden bg-white">
          <div className="p-6 sm:p-8 md:p-14 border-b md:border-b-0 md:border-r border-line">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                Sommerkarte
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[44px] md:text-[68px] font-semibold tracking-[-0.03em] leading-[1.05] text-ink">
              Ein Sommer,{" "}
              <span className="text-brand">ein Preis.</span>
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] text-ink-2 leading-[1.5] max-w-[420px]">
              Der bequeme Weg durch die Outdoor-Saison. Ohne jedes Mal buchen,
              ohne Rechnen. Konditionen erfährst du am schnellsten telefonisch.
            </p>
            <a href="tel:+4915111611216" className="btn btn-primary mt-7 md:mt-8 w-full sm:w-auto">
              0151 111 611 216
            </a>
          </div>

          <div className="p-6 sm:p-8 md:p-14">
            <div className="text-[14px] uppercase tracking-[0.14em] text-ink-2 mb-6">
              Inklusive
            </div>
            <ul className="space-y-4 text-[16px] leading-[1.45]">
              {[
                "Freie Nutzung der Outdoor-Plätze",
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

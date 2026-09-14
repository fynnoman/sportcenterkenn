export default function Welcome() {
  return (
    <section className="relative bg-bg-2 py-14 md:py-20 px-5 md:px-6 border-y border-line">
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        <img
          src="/images/logo-bcs.png"
          alt="Boris Cucka Sport"
          width={64}
          height={64}
          className="h-[64px] w-[64px] md:h-[72px] md:w-[72px] rounded-full object-cover shrink-0 shadow-sm"
        />
        <div className="flex-1">
          <p className="text-[17px] md:text-[26px] leading-[1.4] md:leading-[1.35] tracking-[-0.015em] text-ink">
            „Schön, dass du den Weg zu mir ins Sportcenter Kenn gefunden hast.
            Ob zum ersten Mal oder längst zum Inventar gehörend: mach es dir
            gemütlich, gib auf dem Platz alles und genieß deine Auszeit."
          </p>
          <div className="mt-5 flex items-center gap-3 text-[14px]">
            <span className="font-semibold text-ink">Boris Cucka</span>
            <span className="text-ink-2">Gastgeber & Inhaber</span>
          </div>
        </div>
      </div>
    </section>
  );
}

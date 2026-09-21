type Action = { label: string; href: string; external?: boolean };
type Row = { tag: string; title: string; body: string; actions: Action[] };

const rows: Row[] = [
  {
    tag: "01",
    title: "Tennis, Padel & Soccer",
    body:
      "Buchung direkt telefonisch. Ruf einfach an, wir prüfen live, welcher Platz frei ist und reservieren dich ein.",
    actions: [
      { label: "0151 111 611 216", href: "tel:+4915111611216" },
      { label: "0175 666 3336", href: "tel:+491756663336" },
    ],
  },
  {
    tag: "02",
    title: "BattleKart",
    body:
      "Sessions werden online über die offizielle BattleKart-Seite gebucht. Termine, Verfügbarkeit und Preise findest du dort.",
    actions: [
      {
        label: "Zur BattleKart-Seite →",
        href: "https://www.battlekart.com/de/trier",
        external: true,
      },
    ],
  },
  {
    tag: "03",
    title: "Pizza-Bar",
    body:
      "Karte, Öffnungszeiten und Reservierung laufen direkt über die Pizza-Bar. Für größere Gruppen lohnt sich eine Vorreservierung.",
    actions: [
      {
        label: "pizzabarkenn.de →",
        href: "https://www.pizzabarkenn.de",
        external: true,
      },
    ],
  },
  {
    tag: "04",
    title: "Billard & Kids-Automaten",
    body:
      "Einfach vorbeikommen. Billard-Tische und die Automaten für die Kleinen sind vor Ort direkt an der Bar frei nutzbar.",
    actions: [],
  },
];

export default function WieBucheIch() {
  return (
    <section id="buchen" className="relative bg-bg py-16 md:py-28 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.14em] text-brand font-semibold">
                Buchung
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[42px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[720px]">
              Wie buche ich?
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[16px] text-ink-2 max-w-[400px]">
            Jede Aktivität hat ihren eigenen Weg zur Reservierung. So kommst
            du am schnellsten zu deinem Platz oder deiner Session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {rows.map((r) => (
            <div
              key={r.tag}
              className="rounded-[20px] md:rounded-[22px] bg-white p-5 md:p-8 flex flex-col"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] md:text-[14px] uppercase tracking-[0.14em] text-brand font-semibold tabular-nums">
                  {r.tag}
                </span>
                <h3 className="text-[20px] md:text-[26px] font-semibold tracking-[-0.02em] leading-tight">
                  {r.title}
                </h3>
              </div>
              <p className="mt-4 text-[14.5px] md:text-[15.5px] leading-[1.55] text-ink-2">
                {r.body}
              </p>
              {r.actions.length > 0 && (
                <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
                  {r.actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      {...(a.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="btn btn-primary !h-11 sm:!h-9 !px-5 sm:!px-4 !text-[14.5px] sm:!text-[13px] w-full sm:w-auto"
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

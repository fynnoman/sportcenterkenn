const faqs = [
  {
    q: "Kann ich spontan vorbeikommen oder muss ich reservieren?",
    a: "Spontan geht meistens. Sicher ist besser, deshalb ruf am besten kurz an. Für Wochenenden und Abendzeiten empfehlen wir Reservierung.",
  },
  {
    q: "Was kostet eine Stunde Fußball oder Tennis?",
    a: "Die Preise hängen von Uhrzeit, Platz und Gruppengröße ab. Am schnellsten erfährst du sie am Telefon, wir stellen dir das passende Paket zusammen.",
  },
  {
    q: "Muss ich Sportschuhe oder Ausrüstung mitbringen?",
    a: "Eigene Schuhe und Kleidung sind ideal. Bälle und Basisausrüstung gibt es bei uns. Für Tennis kannst du Schläger vor Ort ausleihen.",
  },
  {
    q: "Gibt es Umkleiden und Duschen?",
    a: "Ja. Beide sind vorhanden und wir halten sie sauber. Handtücher bitte selbst mitbringen.",
  },
  {
    q: "Kann ich ein Firmenevent oder Turnier veranstalten?",
    a: "Sehr gern. Wir stellen die Plätze zusammen, planen Zeiten und kümmern uns um Essen und Getränke. Melde dich per Mail oder Telefon.",
  },
  {
    q: "Wie viele Kinder passen zu einem Geburtstag?",
    a: "So viele wie ihr wollt. Wir haben Platz. Wichtig ist nur, dass wir vorher wissen wieviele es werden, damit alles passt.",
  },
  {
    q: "Sind Parkplätze vorhanden?",
    a: "Ja, direkt vor Ort und kostenlos.",
  },
  {
    q: "Kann ich die Pizza-Bar auch ohne Sport nutzen?",
    a: "Klar. Komm einfach zum Essen und Trinken vorbei, Tisch reservieren lohnt sich bei Gruppen.",
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-bg-2 py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                Häufige Fragen
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] md:text-[52px] font-semibold tracking-[-0.03em] leading-[1.08] max-w-[560px]">
              Alles Wichtige auf einen Blick.
            </h2>
          </div>
          <p className="text-[15px] text-ink-2 max-w-sm">
            Nichts dabei? Ruf uns an unter{" "}
            <a className="link-arrow !text-ink !font-medium" href="tel:+4915111611216">0151 111 611 216</a>
            {" "}oder{" "}
            <a className="link-arrow !text-ink !font-medium" href="tel:+491756663336">0175 666 3336</a>.
          </p>
        </div>

        <div className="rounded-[18px] md:rounded-[22px] bg-white overflow-hidden">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group border-b border-line last:border-b-0"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 md:gap-6 px-5 md:px-8 py-4 md:py-6 text-[14.5px] md:text-[18px] font-medium tracking-[-0.01em] hover:bg-bg transition-colors duration-150 ease-out">
                <span className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-brand font-semibold tabular-nums w-5 md:w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{f.q}</span>
                </span>
                <span
                  aria-hidden
                  className="shrink-0 h-7 w-7 md:h-8 md:w-8 grid place-items-center rounded-full border border-line text-ink-2 transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-8 pb-5 md:pb-7 pl-[52px] md:pl-[74px] text-[14px] md:text-[16px] leading-[1.55] text-ink-2 max-w-[720px]">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PHOTOS } from "../lib/photos";

export default function Geburtstag() {
  return (
    <section id="geburtstag" className="relative bg-bg text-ink overflow-hidden">
      <div className="px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="rule-brand" />
          <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
            Kindergeburtstag
          </span>
        </div>
        <h2 className="h-display text-[38px] sm:text-[60px] md:text-[104px] max-w-[1000px] mx-auto leading-[1.05]">
          Toben, lachen,<br />
          <span className="text-ink-2">Kuchen essen.</span>
        </h2>
        <p className="mt-6 md:mt-8 max-w-[620px] mx-auto text-[15.5px] md:text-[21px] leading-[1.45] md:leading-[1.4] text-ink-2 tracking-[-0.01em]">
          Der perfekte Rahmen für kleine Sportler: eigener Platz, reservierter
          Tisch, alles was gebraucht wird. Die Details stimmen wir gemeinsam
          am Telefon ab.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pb-14 md:pb-20">
        <div
          className="aspect-[4/3] sm:aspect-[16/7] rounded-[20px] md:rounded-[28px] overflow-hidden mb-8 md:mb-14"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%), url('${PHOTOS.kids}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Tile
            eyebrow="Bei uns"
            title="Soccer & Sport"
            items={[
              "Eigener Platz für die Truppe",
              "Reservierter Tisch für Kuchen und Geschenke",
              "Bälle vor Ort, eigene sind auch willkommen",
            ]}
            variant="dark"
          />
          <Tile
            eyebrow="Ihr dürft mitbringen"
            title="Kuchen & gute Laune"
            items={[
              "So viele Kinder und Erwachsene wie ihr wollt",
              "Animateur eurer Wahl",
              "Geburtstagskuchen, Muffins, Mineralwasser",
            ]}
            variant="light"
          />
          <Tile
            eyebrow="Bitte nicht"
            title="Eigene Getränke"
            items={[
              "Selbst mitgebrachte Softdrinks nicht gestattet",
              "Alkoholische Getränke nicht gestattet",
              "Kaffee und Tee nicht gestattet",
            ]}
            variant="outline"
          />
        </div>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 px-2 sm:px-0">
          <a href="tel:+4915111611216" className="btn btn-primary w-full sm:w-auto">
            0151 111 611 216
          </a>
          <a href="tel:+491756663336" className="btn btn-secondary w-full sm:w-auto">
            0175 666 3336
          </a>
        </div>
        <div className="mt-4 text-center text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-ink-3">
          Termine telefonisch abstimmen
        </div>
      </div>
    </section>
  );
}

function Tile({
  eyebrow,
  title,
  items,
  variant,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  variant: "dark" | "light" | "outline";
}) {
  const base =
    "rounded-[20px] md:rounded-[22px] p-6 md:p-10 h-full flex flex-col transition-transform duration-200 ease-out hover:-translate-y-[2px]";
  const styles =
    variant === "dark"
      ? "bg-ink text-white"
      : variant === "light"
      ? "bg-white text-ink"
      : "border border-line text-ink";

  return (
    <div className={`${base} ${styles}`}>
      <div
        className={`text-[13px] uppercase tracking-[0.14em] ${
          variant === "dark" ? "text-white/60" : "text-ink-2"
        }`}
      >
        {eyebrow}
      </div>
      <h3 className="mt-3 text-[22px] md:text-[28px] font-semibold tracking-[-0.02em] leading-[1.1]">
        {title}
      </h3>
      <ul className="mt-6 space-y-3 text-[15px] leading-[1.45]">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span
              aria-hidden
              className={`mt-[8px] h-[4px] w-[4px] rounded-full shrink-0 ${
                variant === "dark" ? "bg-white/60" : "bg-ink"
              }`}
            />
            <span
              className={
                variant === "dark" ? "text-white/85" : "text-ink-2"
              }
            >
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

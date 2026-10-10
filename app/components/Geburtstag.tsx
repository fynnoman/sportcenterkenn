import { PHOTOS } from "../lib/photos";
import { ContactCTAs } from "./ContactButtons";

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
          Der perfekte Rahmen für kleine Sportler. Die Details stimmen wir
          gemeinsam am Telefon oder per WhatsApp ab.
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

        <div className="rounded-[22px] md:rounded-[28px] bg-ink text-white p-6 sm:p-10 md:p-14">
          <div className="text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-brand-onDark font-semibold">
            Das Paket
          </div>
          <h3 className="mt-3 text-[28px] sm:text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.05]">
            2h Soccer-Sport. Bälle. Kostenlose Nachspielzeit.
          </h3>
          <p className="mt-4 md:mt-5 text-[14.5px] md:text-[17px] text-white/70 leading-[1.5] max-w-[760px]">
            Nachspielzeit nur, wenn der Platz frei ist. Bälle gibt es vor Ort,
            eigene dürfen natürlich mitgebracht werden.
          </p>
          <div className="mt-6 md:mt-8 flex items-baseline gap-2">
            <span className="text-[13px] md:text-[14px] uppercase tracking-[0.14em] text-white/60">
              ab
            </span>
            <span className="text-[40px] sm:text-[52px] md:text-[64px] font-semibold tracking-[-0.03em] leading-none text-white tabular-nums">
              140
            </span>
            <span className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-white">
              €
            </span>
          </div>
          <ContactCTAs variant="dark" align="start" className="mt-8" />
        </div>

        <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-3 md:gap-4">
          <div className="rounded-[20px] border border-line p-5 md:p-7 text-ink-2">
            <div className="text-[11px] uppercase tracking-[0.14em] text-ink-3 font-semibold">
              Dürft ihr mitbringen
            </div>
            <p className="mt-3 text-[14px] md:text-[15px] leading-[1.55]">
              So viele Kinder und Erwachsene wie ihr wollt, Animateur,
              Geburtstagskuchen, Muffins, Mineralwasser.
            </p>
          </div>
          <div className="rounded-[20px] border border-line p-5 md:p-7 text-ink-2">
            <div className="text-[11px] uppercase tracking-[0.14em] text-ink-3 font-semibold">
              Bitte nicht
            </div>
            <p className="mt-3 text-[14px] md:text-[15px] leading-[1.55]">
              Selbst mitgebrachte Soft- oder alkoholische Getränke sowie Kaffee
              und Tee sind nicht gestattet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

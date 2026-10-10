import { PHOTOS } from "../lib/photos";
import { EXTERNAL_LINKS } from "../lib/site";

export default function Padel() {
  return (
    <section id="padel" className="relative bg-jet text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-brand" />
              <span className="h-eyebrow h-eyebrow-onDark uppercase tracking-[0.18em] text-brand-onDark font-semibold">
                03 · Padel
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Glas, Käfig, schnelle Punkte.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-white/75">
              Padel-Court für schnelle Runden mit Freunden. Reservierung läuft
              online über Circle Square beim Mosel Racket Club. Verfügbarkeit
              und Slots siehst du direkt im Kalender.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={EXTERNAL_LINKS.padelBooking}
                target="_blank"
                rel="noreferrer"
                className="btn btn-onDark-primary w-full sm:w-auto"
              >
                Padel online buchen
              </a>
            </div>
            <div className="mt-4 text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">
              Padel online · Circle Square
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6 pb-20 md:pb-32">
        <div
          className="mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] bg-[#111] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%), url('${PHOTOS.padelHero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

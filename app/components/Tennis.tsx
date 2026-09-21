import Link from "next/link";
import { PHOTOS } from "../lib/photos";

export default function Tennis() {
  return (
    <section id="tennis" className="relative bg-bg text-ink overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                02 · Tennis & Padel
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Sand, drinnen wie draußen. Dazu der Padel-Court.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-ink-2">
              Sandplätze für ruhige Ballwechsel und der Padel-Court für schnelle
              Runden. Buche einzeln, sichere dir ein Abo oder hol dir die
              Sommerkarte. Belag, Bälle und Bespannung übernehmen wir.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a href="tel:+4915111611216" className="btn btn-primary w-full sm:w-auto">
                0151 111 611 216
              </a>
              <a href="tel:+491756663336" className="btn btn-secondary w-full sm:w-auto">
                0175 666 3336
              </a>
            </div>
            <div className="mt-4 text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-ink-3">
              Buchung telefonisch · beide Nummern erreichbar
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-[14.5px]">
              <Link href="/tennishalle-trier" className="link-arrow !font-medium">
                Tennishalle bei Trier →
              </Link>
              <Link href="/padel-trier" className="link-arrow !font-medium">
                Padel bei Trier →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6 pb-20 md:pb-32">
        <div
          className="mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] bg-bg-2 overflow-hidden"
          style={{
            backgroundImage: `url('${PHOTOS.tennisHero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

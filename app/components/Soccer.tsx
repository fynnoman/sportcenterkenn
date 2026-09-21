import { PHOTOS } from "../lib/photos";

export default function Soccer() {
  return (
    <section id="soccer" className="relative bg-jet text-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule-brand" />
              <span className="h-eyebrow h-eyebrow-onDark uppercase tracking-[0.18em] text-brand-onDark font-semibold">
                01 · Soccer
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.05] md:leading-[1.02]">
              Fußball, drinnen wie draußen.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[15.5px] md:text-[17px] leading-[1.5] text-white/75">
              Spontan mit den Kollegen verabreden, in der Firma ein Turnier
              aufziehen oder Sohn und Tochter vorbeischicken: Indoor im Käfig
              oder Outdoor auf offenem Platz, bei uns rollt der Ball.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a href="tel:+4915111611216" className="btn btn-onDark-primary w-full sm:w-auto">
                0151 111 611 216
              </a>
              <a href="tel:+491756663336" className="btn btn-onDark-secondary w-full sm:w-auto">
                0175 666 3336
              </a>
            </div>
            <div className="mt-4 text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-white/55">
              Buchung telefonisch · beide Nummern erreichbar
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6 pb-20 md:pb-32">
        <div
          className="mx-auto max-w-[1200px] aspect-[4/3] sm:aspect-[16/9] rounded-[20px] md:rounded-[28px] bg-[#111] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%), url('${PHOTOS.soccerHero}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

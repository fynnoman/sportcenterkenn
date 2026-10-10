import { SITE_PHONE } from "../lib/site";
import { WhatsAppButton, PhoneButton } from "./ContactButtons";

export default function Kontakt() {
  return (
    <section id="kontakt" className="relative bg-bg text-ink overflow-hidden">
      <div className="px-5 md:px-6 pt-16 md:pt-32 pb-10 md:pb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="rule-brand" />
          <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
            Kontakt
          </span>
        </div>
        <h2 className="h-display text-[40px] sm:text-[60px] md:text-[104px] max-w-[1000px] mx-auto leading-[1.05]">
          Reservier<br />
          <span className="text-ink-2">einfach direkt.</span>
        </h2>
        <p className="mt-6 md:mt-8 max-w-[560px] mx-auto text-[15.5px] md:text-[21px] leading-[1.45] md:leading-[1.4] text-ink-2 tracking-[-0.01em]">
          Am schnellsten geht es per WhatsApp oder telefonisch, direkt am
          Platz erreichbar.
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3">
          <WhatsAppButton className="w-full sm:w-auto" />
          <PhoneButton variant="light" className="w-full sm:w-auto" />
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          <div className="rounded-[20px] md:rounded-[22px] bg-white p-6 md:p-10">
            <div className="text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-ink-2">
              Adresse
            </div>
            <div className="mt-3 md:mt-4 text-[24px] sm:text-[28px] md:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Spitzstraße 20<br />
              54344 Kenn
            </div>
            <div className="mt-3 text-[14.5px] md:text-[15px] text-ink-2">
              Rheinland-Pfalz · nahe Trier
            </div>
            <div className="mt-4 text-[14.5px] md:text-[15px] text-ink-2 tabular-nums">
              {SITE_PHONE.label}
            </div>
            <div className="mt-6 md:mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Spitzstra%C3%9Fe+20%2C+54344+Kenn"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full sm:w-auto"
              >
                Route planen
              </a>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[22px] overflow-hidden bg-bg-2 aspect-[4/3] md:aspect-auto md:min-h-full">
            <iframe
              title="Sportcenter Kenn Karte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.7357%2C49.8098%2C6.7757%2C49.8298&layer=mapnik&marker=49.8198%2C6.7557"
              loading="lazy"
              className="w-full h-full min-h-[240px] md:min-h-[360px]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { EXTERNAL_LINKS } from "../lib/site";
import { ContactCTAs } from "./ContactButtons";

export default function TennisTurniere() {
  return (
    <section
      id="tennis-turniere"
      className="relative bg-bg text-ink overflow-hidden py-20 md:py-32 px-5 md:px-6"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-brand" />
              <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
                Rund ums Tennis
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[760px]">
              Tennisschule, Turniere, <span className="text-brand">Equipment.</span>
            </h2>
          </div>
          <p className="text-[14.5px] md:text-[16px] text-ink-2 max-w-[400px]">
            Vom ersten Training bis zum ITF-Turnier. Hier läuft mehr Tennis als
            nur Platzbuchung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          <div className="rounded-[22px] bg-white p-6 md:p-8 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.18em] text-brand font-semibold">
              Tennisschule
            </div>
            <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Training für Einsteiger und Fortgeschrittene
            </h3>
            <p className="mt-4 text-[14.5px] md:text-[15.5px] leading-[1.55] text-ink-2">
              Einzelstunden, Gruppentraining und Feriencamps. Für Kinder,
              Jugendliche und Erwachsene, individuell abgestimmt.
            </p>
            <ContactCTAs variant="light" className="mt-6" />
          </div>

          <div className="rounded-[22px] bg-ink text-white p-6 md:p-8 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.18em] text-brand-onDark font-semibold">
              ITF Tennisturnier
            </div>
            <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Saarland Open bei uns am Platz
            </h3>
            <p className="mt-4 text-[14.5px] md:text-[15.5px] leading-[1.55] text-white/75">
              Internationales ITF-Turnier mit Spielerinnen und Spielern aus
              aller Welt. Zuschauen, mitfiebern, selbst inspirieren lassen.
            </p>
            <a
              href={EXTERNAL_LINKS.saarlandOpen}
              target="_blank"
              rel="noreferrer"
              className="btn btn-onDark-primary mt-6 w-full sm:w-auto"
            >
              saarland-open.de
            </a>
          </div>

          <div className="rounded-[22px] border border-line p-6 md:p-8 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.18em] text-brand font-semibold">
              Equipment
            </div>
            <h3 className="mt-3 text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Tennisschuhe, Schläger & Bespannung
            </h3>
            <p className="mt-4 text-[14.5px] md:text-[15.5px] leading-[1.55] text-ink-2">
              Vor Ort: Tennisschuhe für Sandplatz und Halle, Schläger zum
              Testen und Bespannservice für dein eigenes Rack.
            </p>
            <ContactCTAs variant="light" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

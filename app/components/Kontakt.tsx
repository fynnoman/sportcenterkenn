export default function Kontakt() {
  return (
    <section id="kontakt" className="relative bg-bg text-ink overflow-hidden">
      <div className="px-5 md:px-6 pt-20 md:pt-32 pb-12 md:pb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="rule-brand" />
          <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
            Kontakt
          </span>
        </div>
        <h2 className="h-display text-[38px] sm:text-[60px] md:text-[104px] max-w-[1000px] mx-auto leading-[1.05]">
          Reservier<br />
          <span className="text-ink-2">einfach direkt.</span>
        </h2>
        <p className="mt-6 md:mt-8 max-w-[560px] mx-auto text-[15.5px] md:text-[21px] leading-[1.45] md:leading-[1.4] text-ink-2 tracking-[-0.01em]">
          Am schnellsten geht es telefonisch. Für Firmenevents, Turniere und
          Kindergeburtstage gern per Mail.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <ContactCard
            eyebrow="Telefon"
            value="06502 8811"
            href="tel:+4965028811"
          />
          <ContactCard
            eyebrow="Mobil"
            value="0151 111 611 216"
            href="tel:+4915111611216"
          />
          <ContactCard
            eyebrow="E-Mail"
            value="boriscucka@web.de"
            href="mailto:boriscucka@web.de"
          />
        </div>

        <div className="mt-3 md:mt-6 grid md:grid-cols-2 gap-3 md:gap-6">
          <div className="rounded-[20px] md:rounded-[22px] bg-white p-6 md:p-10">
            <div className="text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-ink-2">
              Adresse
            </div>
            <div className="mt-3 md:mt-4 text-[26px] md:text-[40px] font-semibold tracking-[-0.02em] leading-[1.05]">
              Spitzstraße 20<br />
              54344 Kenn
            </div>
            <div className="mt-3 text-[14.5px] md:text-[15px] text-ink-2">
              Rheinland-Pfalz · nahe Trier
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Spitzstra%C3%9Fe+20%2C+54344+Kenn"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Route planen
              </a>
              <a href="mailto:boriscucka@web.de" className="btn btn-secondary">
                Anfrage schreiben
              </a>
            </div>
          </div>

          <div className="rounded-[20px] md:rounded-[22px] overflow-hidden bg-bg-2 aspect-[4/3] md:aspect-auto md:min-h-full">
            <iframe
              title="Sportcenter Kenn Karte"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.7357%2C49.8098%2C6.7757%2C49.8298&layer=mapnik&marker=49.8198%2C6.7557"
              loading="lazy"
              className="w-full h-full min-h-[280px] md:min-h-[360px]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  eyebrow,
  value,
  href,
}: {
  eyebrow: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-[20px] md:rounded-[22px] bg-white p-6 md:p-10 block transition-transform duration-200 ease-out hover:-translate-y-[2px] active:scale-[0.99]"
    >
      <div className="text-[12.5px] md:text-[13px] uppercase tracking-[0.14em] text-ink-2">
        {eyebrow}
      </div>
      <div className="mt-3 text-[22px] md:text-[30px] font-semibold tracking-[-0.02em] leading-tight break-all">
        {value}
      </div>
      <div className="mt-8 link-arrow !text-[15px]">Öffnen →</div>
    </a>
  );
}

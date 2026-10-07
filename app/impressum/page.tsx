import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SITE_PHONES } from "../lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum des Sportcenter Kenn, Boris Cucka Sport, Spitzstraße 20, 54344 Kenn.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg text-ink">
        <section className="px-5 md:px-6 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="mx-auto max-w-[820px]">
            <h1 className="h-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] tracking-[-0.035em]">
              Impressum
            </h1>
            <p className="mt-4 text-[14px] text-ink-3">
              Angaben gemäß § 5 TMG
            </p>

            <div className="mt-10 md:mt-14 space-y-10 text-[16px] md:text-[17px] leading-[1.65] text-ink-2">
              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Diensteanbieter
                </h2>
                <div className="mt-3">
                  <div>Boris Cucka Sport</div>
                  <div>Sportcenter Kenn</div>
                  <div>Spitzstraße 20</div>
                  <div>54344 Kenn</div>
                  <div>Deutschland</div>
                </div>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Vertreten durch
                </h2>
                <p className="mt-3">Boris Cucka</p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Kontakt
                </h2>
                <ul className="mt-3 space-y-1">
                  {SITE_PHONES.map((p) => (
                    <li key={p.tel}>
                      Telefon:{" "}
                      <a
                        href={`tel:${p.tel}`}
                        className="text-ink hover:underline"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Umsatzsteuer-Identifikationsnummer
                </h2>
                <p className="mt-3">
                  Die Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz wird auf Anfrage mitgeteilt.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <div className="mt-3">
                  <div>Boris Cucka</div>
                  <div>Spitzstraße 20</div>
                  <div>54344 Kenn</div>
                </div>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <p className="mt-3">
                  Wir sind nicht bereit und nicht verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p className="mt-3">
                  Hinweis gemäß Verordnung (EU) Nr. 524/2013: Die Europäische
                  Kommission stellt eine Plattform zur Online-Streitbeilegung
                  (OS) bereit, die unter{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>{" "}
                  erreichbar ist.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Haftung für Inhalte
                </h2>
                <p className="mt-3">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                  Nutzung von Informationen nach den allgemeinen Gesetzen
                  bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Haftung für Links
                </h2>
                <p className="mt-3">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                  waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                  permanente inhaltliche Kontrolle der verlinkten Seiten ist
                  jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  Urheberrecht
                </h2>
                <p className="mt-3">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke
                  auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers. Downloads und Kopien dieser Seite sind nur für
                  den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
                  die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                  wurden, werden die Urheberrechte Dritter beachtet.
                  Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                  aufmerksam werden, bitten wir um einen entsprechenden
                  Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                  derartige Inhalte umgehend entfernen.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

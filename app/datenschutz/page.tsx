import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SITE_PHONES } from "../lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung des Sportcenter Kenn (Boris Cucka Sport) nach DSGVO und BDSG.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg text-ink">
        <section className="px-5 md:px-6 pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="mx-auto max-w-[820px]">
            <h1 className="h-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] tracking-[-0.035em]">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-[14px] text-ink-3">
              Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
            </p>

            <div className="mt-10 md:mt-14 space-y-10 text-[16px] md:text-[17px] leading-[1.65] text-ink-2">
              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  1. Verantwortlicher
                </h2>
                <p className="mt-3">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                  (DSGVO) und anderer nationaler Datenschutzgesetze der
                  Mitgliedstaaten sowie sonstiger datenschutzrechtlicher
                  Bestimmungen ist:
                </p>
                <div className="mt-3">
                  <div>Boris Cucka Sport</div>
                  <div>Sportcenter Kenn</div>
                  <div>Boris Cucka</div>
                  <div>Spitzstraße 20</div>
                  <div>54344 Kenn</div>
                  <div>Deutschland</div>
                </div>
                <div className="mt-3">
                  Telefon:{" "}
                  <a
                    href={`tel:${SITE_PHONES[0].tel}`}
                    className="text-ink hover:underline"
                  >
                    {SITE_PHONES[0].label}
                  </a>
                </div>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  2. Allgemeines zur Datenverarbeitung
                </h2>
                <p className="mt-3">
                  Wir verarbeiten personenbezogene Daten unserer Nutzerinnen
                  und Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                  einer funktionsfähigen Website sowie unserer Inhalte und
                  Leistungen erforderlich ist. Die Verarbeitung
                  personenbezogener Daten unserer Nutzer erfolgt regelmäßig
                  nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in
                  solchen Fällen, in denen eine vorherige Einholung einer
                  Einwilligung aus tatsächlichen Gründen nicht möglich ist und
                  die Verarbeitung der Daten durch gesetzliche Vorschriften
                  gestattet ist.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  3. Rechtsgrundlagen der Verarbeitung
                </h2>
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>
                    Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für
                    Verarbeitungsvorgänge, zu denen wir eine Einwilligung
                    einholen.
                  </li>
                  <li>
                    Art. 6 Abs. 1 lit. b DSGVO für Verarbeitungen zur
                    Erfüllung eines Vertrags oder zur Durchführung
                    vorvertraglicher Maßnahmen (z. B. Reservierungsanfragen
                    per Telefon).
                  </li>
                  <li>
                    Art. 6 Abs. 1 lit. c DSGVO für Verarbeitungen zur
                    Erfüllung einer rechtlichen Verpflichtung.
                  </li>
                  <li>
                    Art. 6 Abs. 1 lit. f DSGVO für Verarbeitungen zur Wahrung
                    unserer berechtigten Interessen, sofern nicht die
                    Interessen oder Grundrechte und Grundfreiheiten der
                    betroffenen Person überwiegen.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  4. Bereitstellung der Website und Server-Logfiles
                </h2>
                <p className="mt-3">
                  Beim Aufruf unserer Website erhebt und speichert unser
                  Hosting-Dienstleister automatisch Informationen in
                  sogenannten Server-Logfiles, die Ihr Browser automatisch
                  übermittelt. Dies sind insbesondere:
                </p>
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>IP-Adresse des anfragenden Geräts (anonymisiert bzw. gekürzt, soweit technisch möglich)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Meldung, ob der Abruf erfolgreich war</li>
                  <li>Browsertyp und -version, Betriebssystem</li>
                  <li>Referrer-URL (die zuvor besuchte Seite)</li>
                </ul>
                <p className="mt-3">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                  berechtigtes Interesse besteht in einer stabilen,
                  funktionssicheren und sicheren Darstellung sowie Abwehr von
                  Angriffen. Die Daten werden gelöscht, sobald sie für den
                  Zweck ihrer Erhebung nicht mehr erforderlich sind, in der
                  Regel nach wenigen Tagen bis maximal 30 Tagen, sofern keine
                  weitergehende Speicherung zur Beweiszwecken erforderlich
                  ist.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  5. Hosting
                </h2>
                <p className="mt-3">
                  Unsere Website wird bei einem externen Dienstleister
                  gehostet. Der Dienstleister verarbeitet personenbezogene
                  Daten, die über unsere Website übermittelt werden, in
                  unserem Auftrag auf Grundlage eines Vertrags zur
                  Auftragsverarbeitung gemäß Art. 28 DSGVO. Rechtsgrundlage
                  für den Einsatz des Hosters ist Art. 6 Abs. 1 lit. f DSGVO
                  (sicherer und zuverlässiger Betrieb der Website).
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  6. Cookies und lokale Speicherung
                </h2>
                <p className="mt-3">
                  Unsere Website setzt grundsätzlich keine Tracking- oder
                  Marketing-Cookies ein. Zur Umsetzung Ihrer
                  Datenschutzpräferenzen speichern wir im lokalen Speicher
                  Ihres Browsers (localStorage) ausschließlich einen Eintrag
                  zu Ihrer Entscheidung bezüglich des Cookie-Hinweises. Dieser
                  Eintrag enthält keine personenbezogenen Daten und wird nicht
                  an Dritte übermittelt. Technisch notwendige Speichervorgänge
                  erfolgen auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG. Sollten
                  wir künftig weitere Dienste einbinden, die nicht zwingend
                  erforderlich sind, holen wir Ihre Einwilligung über ein
                  entsprechendes Hinweisfenster ein (Art. 6 Abs. 1 lit. a
                  DSGVO i. V. m. § 25 Abs. 1 TDDDG).
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  7. Kontaktaufnahme per Telefon
                </h2>
                <p className="mt-3">
                  Reservierungen und Anfragen werden ausschließlich
                  telefonisch entgegengenommen. Wenn Sie uns anrufen, werden
                  die von Ihnen mitgeteilten Daten (z. B. Name, Rufnummer,
                  Anliegen, Buchungswunsch) ausschließlich zum Zweck der
                  Bearbeitung Ihrer Anfrage und zur Durchführung der Buchung
                  verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                  (Durchführung vorvertraglicher Maßnahmen bzw. Erfüllung
                  eines Vertrags) sowie Art. 6 Abs. 1 lit. f DSGVO
                  (effiziente Bearbeitung Ihres Anliegens). Die Daten werden
                  gelöscht, sobald sie zur Erreichung des Zwecks ihrer
                  Erhebung nicht mehr erforderlich sind; gesetzliche
                  Aufbewahrungsfristen bleiben unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  8. Externe Links
                </h2>
                <p className="mt-3">
                  Unsere Website enthält Links zu externen Angeboten,
                  insbesondere zu{" "}
                  <span className="text-ink">battlekart.com/de/trier</span>{" "}
                  und{" "}
                  <span className="text-ink">pizzabarkenn.de</span>. Beim
                  Anklicken dieser Links verlassen Sie unsere Website. Für die
                  Datenverarbeitung auf verlinkten Seiten ist der jeweilige
                  Betreiber verantwortlich. Bitte informieren Sie sich dort
                  über die geltenden Datenschutzbestimmungen.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  9. Weitergabe von Daten
                </h2>
                <p className="mt-3">
                  Eine Übermittlung Ihrer personenbezogenen Daten an Dritte zu
                  anderen als den im Folgenden aufgeführten Zwecken findet
                  nicht statt. Wir geben Ihre personenbezogenen Daten nur an
                  Dritte weiter, wenn Sie Ihre ausdrückliche Einwilligung dazu
                  erteilt haben, die Weitergabe zur Geltendmachung, Ausübung
                  oder Verteidigung von Rechtsansprüchen erforderlich ist, für
                  die Weitergabe eine gesetzliche Verpflichtung besteht oder
                  dies gesetzlich zulässig und zur Vertragsabwicklung
                  erforderlich ist.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  10. Datensicherheit
                </h2>
                <p className="mt-3">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete
                  TLS-Verfahren in Verbindung mit der jeweils höchsten
                  Verschlüsselungsstufe, die von Ihrem Browser unterstützt
                  wird. Zusätzlich treffen wir angemessene technische und
                  organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen
                  zufällige oder vorsätzliche Manipulationen, teilweisen oder
                  vollständigen Verlust, Zerstörung oder gegen den unbefugten
                  Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen
                  werden entsprechend der technologischen Entwicklung
                  fortlaufend verbessert.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  11. Ihre Rechte als betroffene Person
                </h2>
                <p className="mt-3">
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind
                  Sie Betroffener im Sinne der DSGVO und es stehen Ihnen
                  folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>
                <ul className="mt-3 space-y-2 list-disc pl-5">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  <li>
                    Recht auf Widerruf einer erteilten Einwilligung mit
                    Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
                  </li>
                  <li>
                    Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77
                    DSGVO)
                  </li>
                </ul>
                <p className="mt-3">
                  Zur Ausübung Ihrer Rechte können Sie uns jederzeit unter
                  den im Impressum angegebenen Kontaktdaten erreichen.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  12. Zuständige Aufsichtsbehörde
                </h2>
                <p className="mt-3">
                  Für uns zuständige Aufsichtsbehörde ist der Landesbeauftragte
                  für den Datenschutz und die Informationsfreiheit
                  Rheinland-Pfalz, Hintere Bleiche 34, 55116 Mainz
                  (
                  <a
                    href="https://www.datenschutz.rlp.de/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:underline"
                  >
                    www.datenschutz.rlp.de
                  </a>
                  ).
                </p>
              </section>

              <section>
                <h2 className="text-[20px] md:text-[22px] font-semibold text-ink tracking-[-0.015em]">
                  13. Änderungen dieser Datenschutzerklärung
                </h2>
                <p className="mt-3">
                  Wir behalten uns vor, diese Datenschutzerklärung
                  anzupassen, damit sie stets den aktuellen rechtlichen
                  Anforderungen entspricht oder um Änderungen unserer
                  Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren
                  erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </section>

              <section>
                <p className="text-[14.5px] text-ink-3">
                  Siehe auch unser{" "}
                  <Link href="/impressum" className="text-ink hover:underline">
                    Impressum
                  </Link>
                  .
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

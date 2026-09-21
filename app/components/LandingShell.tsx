import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import { SITE_PHONES, LANDING_PAGES, SITE_URL } from "../lib/site";
import { BreadcrumbJsonLd } from "./JsonLd";

export function LandingHero({
  eyebrow,
  headline,
  sub,
  image,
  phones = true,
  externalCta,
}: {
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
  phones?: boolean;
  externalCta?: { label: string; href: string };
}) {
  return (
    <section className="relative bg-jet text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,5,5,0.30) 0%, rgba(15,5,5,0.45) 45%, rgba(0,0,0,0.85) 92%, rgba(0,0,0,0.95) 100%), url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1100px] px-5 md:px-6 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="rule-brand" />
          <span className="h-eyebrow h-eyebrow-onDark uppercase tracking-[0.18em] text-brand-onDark font-semibold">
            {eyebrow}
          </span>
        </div>
        <h1 className="h-display text-[42px] sm:text-[64px] md:text-[92px] leading-[1.02] max-w-[900px]">
          {headline}
        </h1>
        <p className="mt-6 md:mt-8 max-w-[720px] text-[17px] sm:text-[20px] md:text-[22px] leading-[1.45] text-white/80">
          {sub}
        </p>
        {(phones || externalCta) && (
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 w-full max-w-[420px] sm:max-w-none">
            {phones &&
              SITE_PHONES.map((p, i) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className={`btn ${i === 0 ? "btn-onDark-primary" : "btn-onDark-secondary"} w-full sm:w-auto`}
                >
                  {p.label}
                </a>
              ))}
            {externalCta && (
              <a
                href={externalCta.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-onDark-primary w-full sm:w-auto"
              >
                {externalCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function LandingSection({
  title,
  children,
  dark,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-jet text-white" : "bg-bg text-ink"} py-14 md:py-24 px-5 md:px-6`}
    >
      <div className="mx-auto max-w-[1000px]">
        {title && (
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold tracking-[-0.03em] leading-[1.1] mb-6 md:mb-8">
            {title}
          </h2>
        )}
        <div
          className={`space-y-5 text-[16px] md:text-[17.5px] leading-[1.6] ${dark ? "text-white/80" : "text-ink-2"}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ exclude }: { exclude: string }) {
  const others = LANDING_PAGES.filter((p) => p.path !== exclude);
  return (
    <section className="bg-bg-2 py-14 md:py-20 px-5 md:px-6 border-t border-line">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="rule-brand" />
          <span className="h-eyebrow uppercase tracking-[0.18em] text-brand font-semibold">
            Auch bei Sportcenter Kenn
          </span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {others.map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className="block rounded-[16px] bg-white px-5 py-4 md:px-6 md:py-5 text-ink hover:-translate-y-[2px] transition-transform"
              >
                <div className="text-[13px] uppercase tracking-[0.14em] text-brand font-semibold">
                  {p.label.split(" ").slice(-1)[0] === "Trier"
                    ? p.label.split(" Trier")[0]
                    : p.label}
                </div>
                <div className="mt-1 text-[15px] font-medium">→ {p.label}</div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[14.5px] text-ink-2">
          Zurück zur <Link href="/" className="link-arrow !text-ink !font-medium">Startseite</Link>.
        </p>
      </div>
    </section>
  );
}

export function LandingShell({
  breadcrumb,
  children,
}: {
  breadcrumb: { name: string; path: string };
  children: React.ReactNode;
}) {
  const items = [
    { name: "Startseite", url: `${SITE_URL}/` },
    { name: breadcrumb.name, url: `${SITE_URL}${breadcrumb.path}` },
  ];
  return (
    <>
      <Nav />
      <BreadcrumbJsonLd items={items} />
      <main className="flex-1">
        <nav
          aria-label="Breadcrumb"
          className="bg-bg-2 border-b border-line px-5 md:px-6 py-3"
        >
          <ol className="mx-auto max-w-[1100px] flex items-center gap-2 text-[13px] text-ink-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Startseite
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-ink font-medium">{breadcrumb.name}</li>
          </ol>
        </nav>
        {children}
      </main>
      <Footer />
    </>
  );
}

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Sport",
    links: [
      { label: "Soccer", href: "#soccer" },
      { label: "Tennis", href: "#tennis" },
      { label: "BattleKart", href: "#battlekart" },
      { label: "Billard", href: "#billard" },
      { label: "Kindergeburtstag", href: "#geburtstag" },
    ],
  },
  {
    title: "Center",
    links: [
      { label: "Sommerkarte", href: "#sommerkarte" },
      { label: "Team", href: "#" },
      { label: "Verlauf", href: "#" },
      { label: "Karriere", href: "#" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter/X", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-2 text-ink-2 pt-14 md:pt-16 pb-8 md:pb-10 px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center gap-3 mb-8 md:mb-14">
          <img
            src="/images/logo-bcs.png"
            alt="Boris Cucka Sport"
            width={40}
            height={40}
            className="h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-full object-cover"
          />
          <div>
            <div className="text-ink font-semibold text-[14.5px] md:text-[15px] tracking-[-0.01em]">
              Boris Cucka Sport
            </div>
            <div className="text-[12px] md:text-[12.5px] text-ink-2">
              Sportcenter Kenn · seit vielen Jahren
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 text-[13px]">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-ink font-semibold text-[13px] tracking-[-0.005em]">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-ink transition-colors duration-150 ease-out"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mt-10 md:mt-12" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3 text-[11.5px] md:text-[12px]">
          <div>
            © {new Date().getFullYear()} Boris Cucka Sport · Spitzstraße 20 ·
            54344 Kenn · 06502 8811
          </div>
          <div>Alle Rechte vorbehalten.</div>
        </div>
      </div>
    </footer>
  );
}

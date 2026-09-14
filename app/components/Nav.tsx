"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { label: "Soccer", href: "#soccer" },
  { label: "Tennis", href: "#tennis" },
  { label: "BattleKart", href: "#battlekart" },
  { label: "Billard", href: "#billard" },
  { label: "Geburtstag", href: "#geburtstag" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full",
        "transition-[background-color,border-color,backdrop-filter,color] duration-300 ease-out",
        scrolled
          ? "bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] backdrop-saturate-150 backdrop-blur-xl border-b border-[color-mix(in_oklab,var(--color-ink)_10%,transparent)] text-ink"
          : "bg-transparent border-b border-transparent text-white"
      )}
    >
      <div className="mx-auto max-w-[1024px] px-4 md:px-6">
        <div className="h-14 md:h-11 flex items-center justify-between text-[13px]">
          <a
            href="#top"
            className="flex items-center gap-2 font-medium tracking-[-0.01em]"
          >
            <img
              src="/images/logo-bcs.png"
              alt="Boris Cucka Sport Logo"
              width={26}
              height={26}
              className="h-[26px] w-[26px] rounded-full object-cover"
            />
            <span>Sportcenter Kenn</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-3 py-1.5 transition-colors duration-150 ease-out",
                  scrolled
                    ? "text-ink-2 hover:text-ink"
                    : "text-white/75 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+4965028811"
              className={clsx(
                "transition-colors duration-150 ease-out",
                scrolled ? "text-ink-2 hover:text-ink" : "text-white/75 hover:text-white"
              )}
            >
              06502 8811
            </a>
            <a href="#kontakt" className="btn btn-primary !h-8 !px-4 !text-[12.5px]">
              Reservieren
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+4965028811"
              aria-label="Anrufen"
              className={clsx(
                "h-9 w-9 grid place-items-center rounded-full transition-colors",
                scrolled ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10"
              )}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button
              aria-label="Menü"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className={clsx(
                "h-9 w-9 grid place-items-center rounded-full transition-colors",
                scrolled ? "hover:bg-ink/5" : "hover:bg-white/10"
              )}
            >
              <span className="sr-only">Menü</span>
              <div className="w-[18px] h-[10px] flex flex-col justify-between">
                <span
                  className={clsx(
                    "block h-[1.5px] transition-transform duration-200 ease-out",
                    scrolled ? "bg-ink" : "bg-white",
                    open && "translate-y-[4.25px] rotate-45"
                  )}
                />
                <span
                  className={clsx(
                    "block h-[1.5px] transition-transform duration-200 ease-out",
                    scrolled ? "bg-ink" : "bg-white",
                    open && "-translate-y-[4.25px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={clsx(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            open ? "max-h-[520px] opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col text-[15px] rounded-2xl bg-white/95 backdrop-blur-md p-2 mt-2 shadow-lg text-ink">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-xl hover:bg-bg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+4965028811"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 w-full"
            >
              Anrufen · 06502 8811
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

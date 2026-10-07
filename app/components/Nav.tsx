"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SITE_PHONES } from "../lib/site";

const links = [
  { label: "Buchen", href: "#buchen" },
  { label: "Soccer", href: "#soccer" },
  { label: "Tennis & Padel", href: "#tennis" },
  { label: "BattleKart", href: "#battlekart" },
  { label: "Geburtstag", href: "#geburtstag" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hasDarkHero =
    pathname === "/" || !["/impressum", "/datenschutz"].includes(pathname ?? "");
  const [scrolled, setScrolled] = useState(!hasDarkHero);

  useEffect(() => {
    if (!hasDarkHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => {
      const threshold = Math.max(window.innerHeight * 0.85, 400);
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hasDarkHero]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full bg-transparent",
        "transition-[color,border-color] duration-300 ease-out",
        "backdrop-blur-2xl backdrop-saturate-150",
        "[-webkit-backdrop-filter:saturate(150%)_blur(28px)]",
        scrolled
          ? "text-ink border-b border-black/5"
          : "text-white border-b border-white/10"
      )}
    >
      <div className="mx-auto max-w-[1360px] px-5 md:px-8">
        <div className="h-16 md:h-16 flex items-center justify-between text-[14px]">
          <a
            href="#top"
            className="flex items-center gap-3 font-medium tracking-[-0.01em]"
          >
            <img
              src="/images/logo-bcs.png"
              alt="Sportcenter Kenn"
              width={44}
              height={44}
              className="h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-full object-cover"
            />
            <span className="text-[15px] md:text-[16px]">Sportcenter Kenn</span>
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
                    : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {SITE_PHONES.map((p, i) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className={clsx(
                  "transition-colors duration-150 ease-out whitespace-nowrap",
                  i === 0 ? "inline-flex" : "hidden lg:inline-flex",
                  scrolled
                    ? "text-ink-2 hover:text-ink"
                    : "text-white/80 hover:text-white"
                )}
              >
                {p.label}
              </a>
            ))}
            <a href="#buchen" className="btn btn-primary !h-9 !px-5 !text-[13px]">
              Buchen
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${SITE_PHONES[0].tel}`}
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
            open ? "max-h-[640px] opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col text-[16px] rounded-2xl bg-white/95 backdrop-blur-md p-2 mt-2 shadow-lg text-ink">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3.5 px-3 rounded-xl hover:bg-bg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-1 pt-2 border-t border-line/60">
              {SITE_PHONES.map((p, i) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "btn w-full",
                    i === 0 ? "btn-primary" : "btn-secondary"
                  )}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

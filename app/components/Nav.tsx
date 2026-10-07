"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SITE_PHONES } from "../lib/site";

const links = [
  { label: "Soccer", href: "/#soccer" },
  { label: "Tennis & Padel", href: "/#tennis" },
  { label: "BattleKart", href: "/#battlekart" },
  { label: "Geburtstag", href: "/#geburtstag" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const pathname = usePathname() ?? "/";
  const alwaysLight = pathname === "/impressum" || pathname === "/datenschutz";

  useEffect(() => {
    if (alwaysLight) {
      setOnLight(true);
      return;
    }
    const onScroll = () => {
      setOnLight(window.scrollY > window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [alwaysLight]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 w-full",
          "transition-colors duration-300 ease-out",
          "supports-[backdrop-filter]:bg-white/0 supports-[backdrop-filter]:backdrop-blur-xl",
          "bg-white/60",
          onLight
            ? "text-ink border-b border-black/5"
            : "text-white border-b border-white/10"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            <a
              href="/#top"
              className="flex items-center gap-3 font-medium tracking-[-0.01em] shrink-0"
            >
              <img
                src="/images/logo-bcs.png"
                alt="Sportcenter Kenn"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover shrink-0"
              />
              <span className="text-[15px] md:text-[16px] whitespace-nowrap">
                Sportcenter Kenn
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1 min-w-0">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "px-3 py-2 text-[14px] rounded-full transition-colors duration-150 ease-out whitespace-nowrap",
                    onLight
                      ? "text-ink-2 hover:text-ink hover:bg-black/5"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${SITE_PHONES[0].tel}`}
                className={clsx(
                  "text-[14px] whitespace-nowrap transition-colors duration-150",
                  onLight
                    ? "text-ink-2 hover:text-ink"
                    : "text-white/85 hover:text-white"
                )}
              >
                {SITE_PHONES[0].label}
              </a>
              <a
                href="/#buchen"
                className="btn btn-primary !h-9 !px-5 !text-[13px]"
              >
                Buchen
              </a>
            </div>

            <div className="flex lg:hidden items-center gap-1 shrink-0">
              <a
                href={`tel:${SITE_PHONES[0].tel}`}
                aria-label="Anrufen"
                className={clsx(
                  "h-10 w-10 grid place-items-center rounded-full transition-colors",
                  onLight ? "text-ink hover:bg-black/5" : "text-white hover:bg-white/10"
                )}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <button
                type="button"
                aria-label={open ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className={clsx(
                  "h-10 w-10 grid place-items-center rounded-full transition-colors",
                  onLight ? "text-ink hover:bg-black/5" : "text-white hover:bg-white/10"
                )}
              >
                <span className="relative block w-5 h-[14px]">
                  <span
                    className={clsx(
                      "absolute left-0 right-0 h-[1.75px] bg-current rounded-full transition-all duration-200 ease-out",
                      open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                    )}
                  />
                  <span
                    className={clsx(
                      "absolute left-0 right-0 h-[1.75px] bg-current rounded-full transition-all duration-200 ease-out",
                      open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={clsx(
          "lg:hidden fixed inset-0 z-40 transition-opacity duration-200 ease-out",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={clsx(
          "lg:hidden fixed left-0 right-0 top-16 z-50 px-4 pb-4",
          "transition-all duration-250 ease-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="rounded-2xl bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] border border-black/5 overflow-hidden text-ink">
          <nav className="flex flex-col p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-xl text-[16px] font-medium hover:bg-bg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-3 pb-3 pt-1 border-t border-line/70">
            <div className="text-[11px] uppercase tracking-[0.14em] text-ink-3 px-1 pt-3 pb-2">
              Telefonisch buchen
            </div>
            <div className="flex flex-col gap-2">
              {SITE_PHONES.map((p, i) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "btn w-full !h-11",
                    i === 0 ? "btn-primary" : "btn-secondary"
                  )}
                >
                  {p.label}
                </a>
              ))}
            </div>
            <a
              href="/#buchen"
              onClick={() => setOpen(false)}
              className="btn btn-dark w-full !h-11 mt-3"
            >
              Zur Buchung
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

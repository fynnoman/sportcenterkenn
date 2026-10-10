"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { SITE_PHONE } from "../lib/site";

const links = [
  { label: "Home", href: "/#top" },
  { label: "Soccer", href: "/#soccer" },
  { label: "Tennis", href: "/#tennis" },
  { label: "Padel", href: "/#padel" },
  { label: "BattleKart", href: "/#battlekart" },
  { label: "Geburtstag", href: "/#geburtstag" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
          "sticky top-0 z-50 w-full text-ink",
          "backdrop-blur-2xl backdrop-saturate-150 border-b border-black/5"
        )}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.55) 100%)",
          WebkitBackdropFilter: "saturate(160%) blur(24px)",
        }}
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            <a
              href="/#top"
              className="flex items-center gap-3 font-medium tracking-[-0.01em] shrink-0 text-ink"
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
                  className="px-3 py-2 text-[14px] rounded-full whitespace-nowrap text-ink hover:bg-black/5 transition-colors duration-150 ease-out"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={SITE_PHONE.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Per WhatsApp schreiben"
                className="btn btn-whatsapp !h-9 !px-4 !text-[13px]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.44 0 .1 5.33.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.92-5.33 11.92-11.91 0-3.18-1.24-6.17-3.43-8.44ZM12.03 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.84 9.84 0 0 1-1.51-5.26C2.16 6.44 6.57 2.03 12.03 2.03c2.63 0 5.1 1.03 6.95 2.89a9.78 9.78 0 0 1 2.88 6.96c0 5.46-4.41 9.92-9.83 9.92Zm5.68-7.42c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.19.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.37.46-.55.16-.19.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.62-.52-.53-.71-.54-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.14-.29-.21-.6-.37Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`tel:${SITE_PHONE.tel}`}
                className="text-[14px] whitespace-nowrap text-ink hover:opacity-70 transition-opacity duration-150 tabular-nums"
              >
                {SITE_PHONE.label}
              </a>
            </div>

            <div className="flex lg:hidden items-center gap-1 shrink-0">
              <a
                href={SITE_PHONE.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Per WhatsApp schreiben"
                className="h-10 w-10 grid place-items-center rounded-full text-white bg-[#25D366] hover:bg-[#1ebe5a] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.44 0 .1 5.33.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.92-5.33 11.92-11.91 0-3.18-1.24-6.17-3.43-8.44ZM12.03 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.84 9.84 0 0 1-1.51-5.26C2.16 6.44 6.57 2.03 12.03 2.03c2.63 0 5.1 1.03 6.95 2.89a9.78 9.78 0 0 1 2.88 6.96c0 5.46-4.41 9.92-9.83 9.92Zm5.68-7.42c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.19.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.37.46-.55.16-.19.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.62-.52-.53-.71-.54-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.14-.29-.21-.6-.37Z" />
                </svg>
              </a>
              <a
                href={`tel:${SITE_PHONE.tel}`}
                aria-label="Anrufen"
                className="h-10 w-10 grid place-items-center rounded-full text-ink hover:bg-black/5 transition-colors"
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
                className="h-10 w-10 grid place-items-center rounded-full text-ink hover:bg-black/5 transition-colors"
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
              Direkt kontaktieren
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={SITE_PHONE.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-whatsapp w-full !h-11"
              >
                WhatsApp schreiben
              </a>
              <a
                href={`tel:${SITE_PHONE.tel}`}
                onClick={() => setOpen(false)}
                className="btn btn-secondary w-full !h-11"
              >
                {SITE_PHONE.label}
              </a>
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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sck-cookie-consent-v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (!existing) {
        const t = window.setTimeout(() => setVisible(true), 500);
        return () => window.clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value: "accepted" | "necessary") => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, ts: new Date().toISOString() })
      );
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Hinweis zu Cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-[920px] rounded-2xl border border-black/10 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-6 gap-4">
          <div className="flex-1 text-ink">
            <div className="text-[15px] md:text-[15.5px] font-semibold tracking-[-0.01em]">
              Hinweis zu Cookies
            </div>
            <p className="mt-2 text-[13.5px] md:text-[14px] leading-[1.55] text-ink-2">
              Diese Website verwendet ausschließlich technisch notwendige
              Speichervorgänge, um Ihre Auswahl zum Cookie-Hinweis zu
              speichern. Es werden keine Tracking- oder Marketing-Cookies
              gesetzt. Weitere Informationen finden Sie in unserer{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 text-ink hover:no-underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 md:min-w-[200px] md:items-stretch">
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="btn btn-primary !h-10 !px-5 !text-[13.5px] w-full"
            >
              Alle akzeptieren
            </button>
            <button
              type="button"
              onClick={() => persist("necessary")}
              className="btn btn-secondary !h-10 !px-5 !text-[13.5px] w-full"
            >
              Nur notwendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

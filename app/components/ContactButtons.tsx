import { SITE_PHONE } from "../lib/site";

type Variant = "light" | "dark";

export function WhatsAppButton({
  className = "",
  label = "WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={SITE_PHONE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Per WhatsApp schreiben"
      className={`btn btn-whatsapp ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.44 0 .1 5.33.1 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.92-5.33 11.92-11.91 0-3.18-1.24-6.17-3.43-8.44ZM12.03 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.84 9.84 0 0 1-1.51-5.26C2.16 6.44 6.57 2.03 12.03 2.03c2.63 0 5.1 1.03 6.95 2.89a9.78 9.78 0 0 1 2.88 6.96c0 5.46-4.41 9.92-9.83 9.92Zm5.68-7.42c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.19.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.37.46-.55.16-.19.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.62-.52-.53-.71-.54-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.14-.29-.21-.6-.37Z" />
      </svg>
      {label}
    </a>
  );
}

export function PhoneButton({
  variant = "light",
  className = "",
  showLabel = true,
}: {
  variant?: Variant;
  className?: string;
  showLabel?: boolean;
}) {
  const base =
    variant === "dark" ? "btn btn-onDark-secondary" : "btn btn-secondary";
  return (
    <a
      href={`tel:${SITE_PHONE.tel}`}
      aria-label={`Anrufen ${SITE_PHONE.label}`}
      className={`${base} ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showLabel ? SITE_PHONE.label : null}
    </a>
  );
}

export function ContactCTAs({
  variant = "light",
  align = "start",
  className = "",
}: {
  variant?: Variant;
  align?: "start" | "center";
  className?: string;
}) {
  const justify = align === "center" ? "sm:justify-center" : "";
  return (
    <div
      className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 ${justify} ${className}`}
    >
      <WhatsAppButton className="w-full sm:w-auto" />
      <PhoneButton variant={variant} className="w-full sm:w-auto" />
    </div>
  );
}

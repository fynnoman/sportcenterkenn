export const SITE_URL = "https://bc-sport.com";
export const SITE_NAME = "Sportcenter Kenn";
export const SITE_ADDRESS = {
  street: "Spitzstraße 20",
  postalCode: "54344",
  city: "Kenn",
  region: "Rheinland-Pfalz",
  country: "DE",
} as const;

export const SITE_PHONE = {
  label: "0151 116 112 16",
  tel: "+4915111611216",
  whatsapp: "https://wa.me/4915111611216",
} as const;

export const SITE_PHONES = [SITE_PHONE] as const;

export const EXTERNAL_LINKS = {
  battlekart: "https://www.battlekart.com/de/trier",
  pizzabar: "https://www.pizzabarkenn.de",
  padelBooking:
    "https://circlesquare.app/en/clubs/mosel-racket-club?date=2026-09-25",
  saarlandOpen: "https://saarland-open.de",
} as const;


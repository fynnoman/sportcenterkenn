export const SITE_URL = "https://bc-sport.com";
export const SITE_NAME = "Sportcenter Kenn";
export const SITE_ADDRESS = {
  street: "Spitzstraße 20",
  postalCode: "54344",
  city: "Kenn",
  region: "Rheinland-Pfalz",
  country: "DE",
} as const;

export const SITE_PHONES = [
  { label: "0151 111 611 216", tel: "+4915111611216" },
  { label: "0175 666 3336", tel: "+491756663336" },
] as const;

export const EXTERNAL_LINKS = {
  battlekart: "https://www.battlekart.com/de/trier",
  pizzabar: "https://www.pizzabarkenn.de",
} as const;

export const LANDING_PAGES = [
  { path: "/soccerhalle-trier", label: "Soccerhalle Trier" },
  { path: "/tennishalle-trier", label: "Tennishalle Trier" },
  { path: "/padel-trier", label: "Padel Trier" },
  { path: "/kindergeburtstag-trier", label: "Kindergeburtstag Trier" },
  { path: "/teamevent-trier", label: "Teamevent Trier" },
  { path: "/indoor-aktivitaeten-trier", label: "Indoor Aktivitäten Trier" },
] as const;

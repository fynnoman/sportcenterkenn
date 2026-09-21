import {
  SITE_URL,
  SITE_NAME,
  SITE_ADDRESS,
  SITE_PHONES,
  EXTERNAL_LINKS,
} from "../lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON is fully controlled by us — safe to serialise as-is.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const localBusinessCore = {
  "@type": ["SportsActivityLocation", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_PHONES[0].tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS.street,
    postalCode: SITE_ADDRESS.postalCode,
    addressLocality: SITE_ADDRESS.city,
    addressRegion: SITE_ADDRESS.region,
    addressCountry: SITE_ADDRESS.country,
  },
  areaServed: [
    { "@type": "City", name: "Trier" },
    { "@type": "City", name: "Kenn" },
    { "@type": "AdministrativeArea", name: "Region Trier" },
  ],
  image: `${SITE_URL}/images/hero-luftbild.png`,
  logo: `${SITE_URL}/images/logo-bcs.png`,
  sameAs: [EXTERNAL_LINKS.battlekart, EXTERNAL_LINKS.pizzabar],
} as const;

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        ...localBusinessCore,
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "de-DE",
        publisher: { "@id": `${SITE_URL}/#business` },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Trier" },
          { "@type": "City", name: "Kenn" },
        ],
      }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: it.answer,
          },
        })),
      }}
    />
  );
}

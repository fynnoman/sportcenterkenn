import type { MetadataRoute } from "next";
import { SITE_URL, LANDING_PAGES } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...LANDING_PAGES.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/impressum`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}

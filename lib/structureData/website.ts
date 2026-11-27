import { routing } from "@/i18n/routing";

import {
  SITE_URL,
  SITE_NAME,
  SCHEMA_IDS,
} from "./config";

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: "SY Hotels",
    inLanguage: [...routing.locales],
    publisher: {
      "@id": SCHEMA_IDS.hotel,
    },
  };
}
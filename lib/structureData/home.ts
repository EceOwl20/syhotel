import {
  type Locale,
  SCHEMA_IDS,
  getLocalizedUrl,
} from "./config";

import { buildHotelJsonLd } from "./hotel";
import { buildWebsiteJsonLd } from "./website";

type HomeJsonLdProps = {
  locale: Locale;
  title: string;
  description: string;
};

export function buildHomeJsonLd({
  locale,
  title,
  description,
}: HomeJsonLdProps) {
  const pageUrl = getLocalizedUrl(locale);

  return {
    "@context": "https://schema.org",

    "@graph": [
      buildHotelJsonLd(),
      buildWebsiteJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: {
          "@id": SCHEMA_IDS.website,
        },
        about: {
          "@id": SCHEMA_IDS.hotel,
        },
        mainEntity: {
          "@id": SCHEMA_IDS.hotel,
        },
        publisher: {
          "@id": SCHEMA_IDS.hotel,
        },
      },
    ],
  };
}
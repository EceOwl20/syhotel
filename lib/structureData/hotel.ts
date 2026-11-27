import {
  SITE_URL,
  SITE_NAME,
  SCHEMA_IDS,
  HOTEL_ADDRESS,
  HOTEL_GEO,
} from "./config";

export function buildHotelJsonLd() {
  return {
    "@type": "Hotel",
    "@id": SCHEMA_IDS.hotel,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/logo_favicon1.webp`,
    telephone: "+902422054787",
    address: HOTEL_ADDRESS,
    geo: HOTEL_GEO,
    image: [
      `${SITE_URL}/images/homepage/rubby-lobi-bar-1.webp`,
      `${SITE_URL}/images/homepage/rubby-lobi-bar-3.webp`,
      `${SITE_URL}/images/homepage/rubby-lobi-bar-7.webp`,
    ],
  };
}

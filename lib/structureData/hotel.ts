import {
  SITE_URL,
  SITE_NAME,
  SCHEMA_IDS,
} from "./config";

export function buildHotelJsonLd() {
  return {
    "@type": "Hotel",
    "@id": SCHEMA_IDS.hotel,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/logo_favicon1.webp`,
    telephone: "+902422054787",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kadriye Mah. Atatürk Cad. Kır Mevkii",
      addressLocality: "Belek",
      addressRegion: "Antalya",
      postalCode: "07500",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.873064,
      longitude: 31.006601,
    },
    image: [
      `${SITE_URL}/images/homepage/rubby-lobi-bar-1.webp`,
      `${SITE_URL}/images/homepage/rubby-lobi-bar-3.webp`,
      `${SITE_URL}/images/homepage/rubby-lobi-bar-7.webp`,
    ],
  };
}

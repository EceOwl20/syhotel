import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];
export type StaticPath = Exclude<
  keyof typeof routing.pathnames,
  `${string}[${string}`
>;

export const SITE_URL = "https://syhotels.com";
export const SITE_NAME = "SY Hotels Luxury Belek";
export const HOTEL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Kadriye Mah. Atatürk Cad. Kır Mevkii",
  addressLocality: "Belek",
  addressRegion: "Antalya",
  postalCode: "07500",
  addressCountry: "TR",
} as const;
export const HOTEL_GEO = {
  "@type": "GeoCoordinates",
  latitude: 36.873064,
  longitude: 31.006601,
} as const;

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).href;
}

export function createSchemaId(url: string, fragment: string) {
  const normalizedUrl = new URL(url);
  normalizedUrl.hash = "";

  return `${normalizedUrl.href}#${fragment.replace(/^#/, "")}`;
}

export const SCHEMA_IDS = {
  hotel: createSchemaId(SITE_URL, "hotel"),
  website: createSchemaId(SITE_URL, "website"),
} as const;

export function getLocalizedUrl(
  locale: Locale,
  pathname: StaticPath = "/",
): string {
  const localizedPathname = getPathname({
    locale,
    href: pathname,
  });

  return getAbsoluteUrl(localizedPathname);
}

export function getLocalizedRoomUrl(
  locale: Locale,
  slug: string,
) {
  const localizedRoute = `/rooms/${slug}` as StaticPath;

  if (localizedRoute in routing.pathnames) {
    return getLocalizedUrl(locale, localizedRoute);
  }

  return getAbsoluteUrl(
    getPathname({
      locale,
      href: {
        pathname: "/rooms/[slug]",
        params: { slug },
      },
    }),
  );
}

export function getLocalizedRestaurantUrl(
  locale: Locale,
  slug: string,
) {
  return getAbsoluteUrl(
    getPathname({
      locale,
      href: {
        pathname: "/restaurants/[slug]",
        params: { slug },
      },
    }),
  );
}

export function getLocalizedBarUrl(
  locale: Locale,
  slug: string,
) {
  return getAbsoluteUrl(
    getPathname({
      locale,
      href: {
        pathname: "/bars/[slug]",
        params: { slug },
      },
    }),
  );
}

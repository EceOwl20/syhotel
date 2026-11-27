import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

export const SITE_URL = "https://syhotels.com";
export const SITE_NAME = "SY Hotels Luxury Belek";

export const SCHEMA_IDS = {
  hotel: `${SITE_URL}/#hotel`,
  website: `${SITE_URL}/#website`,
} as const;

export function getLocalizedUrl(
  locale: Locale,
  path = "/",
): string {
  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${SITE_URL}/${locale}${
    normalizedPath === "/" ? "" : normalizedPath
  }`;
}
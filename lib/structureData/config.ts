import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];
export type StaticPath = Exclude<
  keyof typeof routing.pathnames,
  `${string}[${string}`
>;

export const SITE_URL = "https://syhotels.com";
export const SITE_NAME = "SY Hotels Luxury Belek";

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

  return new URL(localizedPathname, SITE_URL).href;
}

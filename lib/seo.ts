import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

export type StaticPath = Exclude<
  keyof typeof routing.pathnames,
  `${string}[${string}`
>;

const BASE_URL = "https://syhotels.com";

function createAlternates(
  getLocalizedPathname: (locale: Locale) => string,
  locale: Locale,
): Metadata["alternates"] {
  const getUrl = (lang: Locale) =>
    new URL(getLocalizedPathname(lang), BASE_URL).href;

  return {
    canonical: getUrl(locale),

    languages: Object.fromEntries(
      routing.locales.map((lang) => [
        lang,
        getUrl(lang),
      ]),
    ),
  };
}

export function createSeoAlternates(
  pathname: StaticPath,
  locale: Locale,
): Metadata["alternates"] {
  return createAlternates(
    (lang) => getPathname({ locale: lang, href: pathname }),
    locale,
  );
}

export function createRoomSeoAlternates(
  slug: string,
  locale: Locale,
): Metadata["alternates"] {
  const localizedRoute = `/rooms/${slug}` as StaticPath;

  if (localizedRoute in routing.pathnames) {
    return createSeoAlternates(localizedRoute, locale);
  }

  return createAlternates(
    (lang) =>
      getPathname({
        locale: lang,
        href: {
          pathname: "/rooms/[slug]",
          params: { slug },
        },
      }),
    locale,
  );
}

export function createBarSeoAlternates(
  slug: string,
  locale: Locale,
): Metadata["alternates"] {
  return createAlternates(
    (lang) =>
      getPathname({
        locale: lang,
        href: {
          pathname: "/bars/[slug]",
          params: { slug },
        },
      }),
    locale,
  );
}

export function createRestaurantSeoAlternates(
  slug: string,
  locale: Locale,
): Metadata["alternates"] {
  return createAlternates(
    (lang) =>
      getPathname({
        locale: lang,
        href: {
          pathname: "/restaurants/[slug]",
          params: { slug },
        },
      }),
    locale,
  );
}


import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

type StaticPath = Exclude<
  keyof typeof routing.pathnames,
  `${string}[${string}`
>;

const BASE_URL = "https://syhotels.com";

export function createSeoAlternates(
  pathname: StaticPath,
  locale: Locale,
): Metadata["alternates"] {
  const getUrl = (lang: Locale) =>
    new URL(
      getPathname({
        locale: lang,
        href: pathname,
      }),
      BASE_URL,
    ).href;

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

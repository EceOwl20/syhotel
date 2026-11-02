import type { MetadataRoute } from "next";

import { bars } from "@/data/bars";
import { restaurants } from "@/data/restaurants";
import { rooms } from "@/data/rooms";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://syhotels.com";

type Locale = (typeof routing.locales)[number];
type StaticPath = Exclude<
  keyof typeof routing.pathnames,
  `${string}[${string}`
>;

type RouteConfig = {
  pathname: StaticPath;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

const staticRoutes = [
  { pathname: "/", changeFrequency: "weekly", priority: 1 },
  { pathname: "/pools", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/aquapark", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/beach", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/activities", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/kids", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/spa-wellness", changeFrequency: "monthly", priority: 0.8 },
  {
    pathname: "/general-information",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { pathname: "/agencies", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/kvkk", changeFrequency: "monthly", priority: 0.5 },
  {
    pathname: "/sustainability",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    pathname: "/explore-region",
    changeFrequency: "monthly",
    priority: 0.7,
  },
] satisfies RouteConfig[];

function absoluteUrl(pathname: string) {
  return new URL(pathname, BASE_URL).href;
}

function createEntries(
  getLocalizedPathname: (locale: Locale) => string,
  changeFrequency: RouteConfig["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      absoluteUrl(getLocalizedPathname(locale)),
    ]),
  );

  return routing.locales.map((locale) => ({
    url: absoluteUrl(getLocalizedPathname(locale)),
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

function createStaticEntries({
  pathname,
  changeFrequency,
  priority,
}: RouteConfig) {
  return createEntries(
    (locale) => getPathname({ locale, href: pathname }),
    changeFrequency,
    priority,
  );
}

function createRoomEntries(slug: string) {
  const localizedRoute = `/rooms/${slug}` as StaticPath;

  if (localizedRoute in routing.pathnames) {
    return createEntries(
      (locale) => getPathname({ locale, href: localizedRoute }),
      "monthly",
      0.9,
    );
  }

  return createEntries(
    (locale) =>
      getPathname({
        locale,
        href: {
          pathname: "/rooms/[slug]",
          params: { slug },
        },
      }),
    "monthly",
    0.9,
  );
}

function createBarEntries(slug: string) {
  return createEntries(
    (locale) =>
      getPathname({
        locale,
        href: {
          pathname: "/bars/[slug]",
          params: { slug },
        },
      }),
    "monthly",
    0.8,
  );
}

function createRestaurantEntries(slug: string) {
  return createEntries(
    (locale) =>
      getPathname({
        locale,
        href: {
          pathname: "/restaurants/[slug]",
          params: { slug },
        },
      }),
    "monthly",
    0.8,
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.flatMap(createStaticEntries),
    ...rooms.flatMap(({ slug }) => createRoomEntries(slug)),
    ...bars.flatMap(({ slug }) => createBarEntries(slug)),
    ...restaurants.flatMap(({ slug }) =>
      createRestaurantEntries(slug),
    ),
  ];
}

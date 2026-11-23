import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";
import {
  EXTERNAL_BOOKING_URL,
  getVisitorCountry,
  isTurkeyTurkishMarket,
} from "./lib/visitorMarket";

const intlMiddleware = createMiddleware(routing);

const RESERVATION_PATH_LOCALES = new Map<string, string>([
  ["/tr/rezervasyon", "tr"],
  ["/tr/reservation", "tr"],
  ["/en/reservation", "en"],
  ["/de/reservierung", "de"],
  ["/de/reservation", "de"],
  ["/ru/bronirovanie", "ru"],
  ["/ru/reservation", "ru"],
]);

export default function proxy(request: NextRequest) {
  const locale = RESERVATION_PATH_LOCALES.get(
    request.nextUrl.pathname,
  );

  if (locale) {
    const country = getVisitorCountry(request.headers);

    if (!isTurkeyTurkishMarket(country, locale)) {
      const response = NextResponse.redirect(
        new URL(EXTERNAL_BOOKING_URL),
        307,
      );

      response.headers.set(
        "Cache-Control",
        "private, no-store, max-age=0",
      );
      response.headers.set(
        "Vary",
        "X-Country-Code, CF-IPCountry, X-Vercel-IP-Country",
      );

      return response;
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(tr|en|de|ru)/:path*",
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};

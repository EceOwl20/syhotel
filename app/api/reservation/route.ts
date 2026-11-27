import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  getExternalBookingUrl,
  getVisitorCountry,
  isTurkeyTurkishMarket,
} from "@/lib/visitorMarket";

export function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") ?? "";
  const country = getVisitorCountry(request.headers);
  const destination = isTurkeyTurkishMarket(country, locale)
    ? new URL("/tr/rezervasyon", request.url)
    : new URL(getExternalBookingUrl(locale));

  const response = NextResponse.redirect(destination, 307);

  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set(
    "Vary",
    "X-Country-Code, CF-IPCountry, X-Vercel-IP-Country",
  );

  return response;
}


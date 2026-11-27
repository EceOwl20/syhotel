const COUNTRY_HEADER_NAMES = [
  "x-country-code",
  "cf-ipcountry",
  "x-vercel-ip-country",
] as const;

const DEFAULT_EXTERNAL_BOOKING_URL =
  "https://syhotelsbelek.rezervasyonal.com/";

const EXTERNAL_BOOKING_URLS = {
  tr: DEFAULT_EXTERNAL_BOOKING_URL,
  en: `${DEFAULT_EXTERNAL_BOOKING_URL}en/`,
  de: `${DEFAULT_EXTERNAL_BOOKING_URL}de/`,
  ru: `${DEFAULT_EXTERNAL_BOOKING_URL}ru/`,
} as const;

export function getExternalBookingUrl(locale: string) {
  const normalizedLocale = locale.trim().toLowerCase();

  if (normalizedLocale in EXTERNAL_BOOKING_URLS) {
    return EXTERNAL_BOOKING_URLS[
      normalizedLocale as keyof typeof EXTERNAL_BOOKING_URLS
    ];
  }

  return DEFAULT_EXTERNAL_BOOKING_URL;
}

type ReadonlyHeaders = Pick<Headers, "get">;

export function getVisitorCountry(headers: ReadonlyHeaders) {
  for (const headerName of COUNTRY_HEADER_NAMES) {
    const country = headers.get(headerName)?.trim().toUpperCase();

    if (country && /^[A-Z]{2}$/.test(country)) {
      return country;
    }
  }

  return null;
}

export function isTurkeyTurkishMarket(
  country: string | null,
  locale: string,
) {
  return country === "TR" && locale === "tr";
}


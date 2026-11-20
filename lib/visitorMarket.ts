const COUNTRY_HEADER_NAMES = [
  "x-country-code",
  "cf-ipcountry",
  "x-vercel-ip-country",
] as const;

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


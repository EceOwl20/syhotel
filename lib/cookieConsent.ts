export const COOKIE_CONSENT_COOKIE = "sy_cookie_consent";
export const COOKIE_CONSENT_EVENT = "sy-cookie-consent-change";
export const OPEN_COOKIE_PREFERENCES_EVENT = "sy-open-cookie-preferences";

export type CookiePreferences = {
  version: 1;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof document === "undefined") return null;

  const value = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${COOKIE_CONSENT_COOKIE}=`))
    ?.split("=")
    .slice(1)
    .join("=");

  if (!value) return null;

  try {
    const preferences = JSON.parse(
      decodeURIComponent(value),
    ) as Partial<CookiePreferences>;

    if (
      preferences.version !== 1 ||
      typeof preferences.functional !== "boolean" ||
      typeof preferences.analytics !== "boolean" ||
      typeof preferences.marketing !== "boolean"
    ) {
      return null;
    }

    return preferences as CookiePreferences;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${COOKIE_CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(preferences),
  )}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;

  window.dispatchEvent(
    new CustomEvent<CookiePreferences>(COOKIE_CONSENT_EVENT, {
      detail: preferences,
    }),
  );
}

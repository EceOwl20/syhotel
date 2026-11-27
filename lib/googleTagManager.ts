import type { CookiePreferences } from "./cookieConsent";

export const GTM_CONTAINER_ID = "GTM-52PP48PN";
const SCRIPT_ID = "sy-google-tag-manager";

type ConsentValue = "granted" | "denied";
type GoogleConsent = Record<
  | "analytics_storage"
  | "ad_storage"
  | "ad_user_data"
  | "ad_personalization"
  | "functionality_storage"
  | "personalization_storage"
  | "security_storage",
  ConsentValue
>;

const DEFAULT_CONSENT: GoogleConsent = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    __syTagManager?: {
      consent: GoogleConsent;
      started: boolean;
    };
  }
}

function toGoogleConsent(
  preferences: CookiePreferences,
): GoogleConsent {
  const marketing = preferences.marketing ? "granted" : "denied";

  return {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    functionality_storage: preferences.functional ? "granted" : "denied",
    personalization_storage: marketing,
    security_storage: "granted",
  };
}

export function syncGoogleTagManager(preferences: CookiePreferences | null) {
  const dataLayer = (window.dataLayer ??= []);
  const gtag: (
    command: "consent",
    action: "default" | "update",
    consent: GoogleConsent,
  ) => void = function () {
    // eslint-disable-next-line prefer-rest-params -- Google's command format uses an arguments object.
    dataLayer.push(arguments);
  };

  if (!window.__syTagManager) {
    const consent = DEFAULT_CONSENT;
    gtag("consent", "default", consent);
    window.__syTagManager = { consent, started: false };
  }

  const state = window.__syTagManager;

  if (preferences) {
    const consent = toGoogleConsent(preferences);
    gtag("consent", "update", consent);
    state.consent = consent;
  }

  if (state.started) return;

  state.started = true;
  dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
  document.head.appendChild(script);
}

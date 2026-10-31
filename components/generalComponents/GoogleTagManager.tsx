"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  readCookiePreferences,
} from "@/lib/cookieConsent";
import { syncGoogleTagManager } from "@/lib/googleTagManager";

export default function GoogleTagManager() {
  useEffect(() => {
    const syncConsent = () => syncGoogleTagManager(readCookiePreferences());

    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    syncConsent();

    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  // No noscript iframe: it would bypass the site's JavaScript consent banner.
  return null;
}

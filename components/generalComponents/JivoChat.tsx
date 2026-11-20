"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";

import {
  COOKIE_CONSENT_EVENT,
  readCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookieConsent";

declare global {
  interface Window {
    jivo_destroy?: () => void;
  }
}

type JivoChatProps = {
  widgetId: string;
};

export default function JivoChat({ widgetId }: JivoChatProps) {
  const hasFunctionalConsent = useSyncExternalStore(
    (onStoreChange) => {
      const handleConsentChange = (event: Event) => {
        const preferences = (event as CustomEvent<CookiePreferences>).detail;

        if (!preferences.functional) {
          window.jivo_destroy?.();
        }

        onStoreChange();
      };

      window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
      return () =>
        window.removeEventListener(
          COOKIE_CONSENT_EVENT,
          handleConsentChange,
        );
    },
    () => readCookiePreferences()?.functional ?? false,
    () => false,
  );

  useEffect(() => {
    return () => {
      window.jivo_destroy?.();
    };
  }, []);

  if (!hasFunctionalConsent) return null;

  return (
    <Script
      id="jivo-live-chat"
      src={`https://code.jivosite.com/widget/${encodeURIComponent(widgetId)}`}
      strategy="afterInteractive"
    />
  );
}


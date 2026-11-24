"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

import {
  COOKIE_CONSENT_EVENT,
  readCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookieConsent";

declare global {
  interface Window {
    jivo_destroy?: () => void;
    jivo_init?: () => void;
  }
}

type JivoChatProps = {
  widgetId: string;
};

export default function JivoChat({ widgetId }: JivoChatProps) {
  const pathname = usePathname();
  const isOffersPage = pathname === "/tr/offers";
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
    document.getElementById("web-messenger-container")?.remove();
    window.__connexeaseWebMessengerInitialized = false;

    if (!hasFunctionalConsent || isOffersPage) {
      window.jivo_destroy?.();
      document.getElementById("jivo-live-chat")?.remove();
      return;
    }

    const existingScript = document.getElementById("jivo-live-chat");

    if (existingScript) {
      window.jivo_init?.();
      return () => window.jivo_destroy?.();
    }

    const script = document.createElement("script");
    script.id = "jivo-live-chat";
    script.src = `https://code.jivosite.com/widget/${encodeURIComponent(widgetId)}`;
    script.async = true;
    script.onerror = () => {
      console.error("[JivoChat] Widget script yüklenemedi.");
    };

    document.body.appendChild(script);

    return () => {
      script.onerror = null;
      window.jivo_destroy?.();
      script.remove();
    };
  }, [hasFunctionalConsent, isOffersPage, widgetId]);

  return null;
}


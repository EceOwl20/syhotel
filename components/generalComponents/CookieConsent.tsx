"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  readCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookieConsent";

type OptionalPreference = keyof Pick<
  CookiePreferences,
  "functional" | "analytics" | "marketing"
>;

const optionalPreferences: OptionalPreference[] = [
  "functional",
  "analytics",
  "marketing",
];

const defaultPreferences: CookiePreferences = {
  version: 1,
  functional: false,
  analytics: false,
  marketing: false,
};

const subscribeToHydration = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const openPreferences = () => {
      setPreferences(readCookiePreferences() ?? defaultPreferences);
      setShowPreferences(true);
      setIsManuallyOpen(true);
    };

    window.addEventListener(
      OPEN_COOKIE_PREFERENCES_EVENT,
      openPreferences,
    );

    return () => {
      window.removeEventListener(
        OPEN_COOKIE_PREFERENCES_EVENT,
        openPreferences,
      );
    };
  }, []);

  const persistPreferences = (nextPreferences: CookiePreferences) => {
    saveCookiePreferences(nextPreferences);
    setPreferences(nextPreferences);
    setIsManuallyOpen(false);
    setShowPreferences(false);
  };

  const setAllOptionalPreferences = (enabled: boolean) => {
    persistPreferences({
      version: 1,
      functional: enabled,
      analytics: enabled,
      marketing: enabled,
    });
  };

  const togglePreference = (preference: OptionalPreference) => {
    setPreferences((current) => ({
      ...current,
      [preference]: !current[preference],
    }));
  };

  const isVisible =
    isHydrated && (!readCookiePreferences() || isManuallyOpen);

  if (!isVisible) return null;

  return (
    <section
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-3 bottom-3 z-[10050] mx-auto max-w-[1040px] overflow-hidden rounded-2xl border border-white/25 bg-[#5d4438]/97 text-white shadow-[0_24px_80px_rgba(40,24,16,0.36)] backdrop-blur-xl md:inset-x-6 md:bottom-6"
    >
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#dfc3ad] to-transparent" />

      <div className="p-5 sm:p-6 md:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex gap-4">
            <div
              aria-hidden="true"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dfc3ad]/45 bg-white/8 text-[#f0d7c4] sm:flex"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 13.1A8.5 8.5 0 1 1 10.9 3.2a4.2 4.2 0 0 0 5.2 5.2 4.2 4.2 0 0 0 4.7 4.7Z" />
                <path d="M8.6 9.2h.01M8.2 14.9h.01M14 15.2h.01" />
              </svg>
            </div>

            <div className="max-w-[650px]">
              <p className="mb-1.5 text-[10px] font-medium tracking-[0.18em] text-[#dfc3ad] uppercase">
                {t("eyebrow")}
              </p>
              <h2
                id="cookie-consent-title"
                className="text-[18px] leading-tight font-normal tracking-[0.01em] sm:text-[20px]"
              >
                {t("title")}
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-2 text-[12px] leading-[1.7] font-light text-white/78 sm:text-[13px]"
              >
                {t("description")} {" "}
                <Link
                  href="/kvkk"
                  className="font-normal text-[#f0d7c4] underline decoration-[#f0d7c4]/55 underline-offset-4 transition-colors hover:text-white"
                >
                  {t("privacyLink")}
                </Link>
              </p>
            </div>
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-2.5 sm:flex sm:flex-wrap lg:max-w-[300px] lg:justify-end">
            <button
              type="button"
              onClick={() => setShowPreferences((current) => !current)}
              aria-expanded={showPreferences}
              aria-controls="cookie-preferences-panel"
              className="col-span-2 rounded-lg border border-white/30 px-4 py-2.5 text-[11px] font-medium tracking-[0.04em] transition-colors hover:border-white/55 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfc3ad] sm:col-span-1"
            >
              {t("settings")}
            </button>
            <button
              type="button"
              onClick={() => setAllOptionalPreferences(false)}
              className="rounded-lg border border-white/30 px-4 py-2.5 text-[11px] font-medium tracking-[0.04em] transition-colors hover:border-white/55 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfc3ad]"
            >
              {t("rejectOptional")}
            </button>
            <button
              type="button"
              onClick={() => setAllOptionalPreferences(true)}
              className="rounded-lg bg-[#c8a58d] px-4 py-2.5 text-[11px] font-semibold tracking-[0.04em] text-[#3f2d25] transition-colors hover:bg-[#dfc3ad] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfc3ad]"
            >
              {t("acceptAll")}
            </button>
          </div>
        </div>

        {showPreferences && (
          <div
            id="cookie-preferences-panel"
            className="mt-6 border-t border-white/15 pt-5"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-white/12 bg-white/5 p-4">
                <div>
                  <h3 className="text-[13px] font-medium">
                    {t("categories.necessary.title")}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed font-light text-white/65">
                    {t("categories.necessary.description")}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] font-medium tracking-[0.08em] text-[#dfc3ad] uppercase">
                  {t("alwaysActive")}
                </span>
              </div>

              {optionalPreferences.map((preference) => (
                <div
                  key={preference}
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/12 bg-white/5 p-4"
                >
                  <div>
                    <h3 className="text-[13px] font-medium">
                      {t(`categories.${preference}.title`)}
                    </h3>
                    <p className="mt-1 text-[11px] leading-relaxed font-light text-white/65">
                      {t(`categories.${preference}.description`)}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences[preference]}
                    aria-label={t(`categories.${preference}.title`)}
                    onClick={() => togglePreference(preference)}
                    className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfc3ad] ${
                      preferences[preference]
                        ? "border-[#dfc3ad] bg-[#c8a58d]"
                        : "border-white/25 bg-black/15"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-0.5 left-0 h-4.5 w-4.5 rounded-full bg-white shadow-sm transition-transform ${
                        preferences[preference]
                          ? "translate-x-[21px]"
                          : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => persistPreferences(preferences)}
                className="w-full rounded-lg bg-white px-5 py-2.5 text-[11px] font-semibold tracking-[0.04em] text-[#4c372e] transition-colors hover:bg-[#f0e3da] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                {t("savePreferences")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

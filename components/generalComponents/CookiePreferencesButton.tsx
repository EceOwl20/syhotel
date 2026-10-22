"use client";

import { OPEN_COOKIE_PREFERENCES_EVENT } from "@/lib/cookieConsent";

type CookiePreferencesButtonProps = {
  label: string;
};

export default function CookiePreferencesButton({
  label,
}: CookiePreferencesButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
      className="transition-colors duration-300 hover:text-[#eee1d3]"
    >
      {label}
    </button>
  );
}

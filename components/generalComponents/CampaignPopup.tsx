
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getImageProps } from "next/image";
import { FiX } from "react-icons/fi";

const POPUP_STORAGE_KEY = "sy-hotels-campaign-popup-v1";
const subscribeToPopupState = () => () => {};
const getServerPopupState = () => false;

function getClientPopupState() {
  try {
    return !sessionStorage.getItem(POPUP_STORAGE_KEY);
  } catch {
    return true;
  }
}

export default function CampaignPopup() {
  const shouldShowPopup = useSyncExternalStore(
    subscribeToPopupState,
    getClientPopupState,
    getServerPopupState,
  );
  const [isDismissed, setIsDismissed] = useState(false);
  const isOpen = shouldShowPopup && !isDismissed;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Responsive image sources
  const { props: desktopImage } = getImageProps({
    src: "/images/popup/popup-desktop.png",
    alt: "SY Hotels kampanya duyurusu",
    width: 1600,
    height: 900,
    sizes:
      "(max-width: 767px) min(92vw, 50.625dvh), min(calc(100vw - 32px), 151dvh, 1600px)",
    loading: "eager",
    fetchPriority: "high",
  });

  const { props: mobileImage } = getImageProps({
    src: "/images/popup/popup-mobile.png",
    alt: "SY Hotels kampanya duyurusu",
    width: 900,
    height: 1600,
    sizes: "min(92vw, 50.625dvh)",
    loading: "eager",
    fetchPriority: "high",
  });

  // Modal interactions
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }

      // Keep keyboard focus inside the popup
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [isOpen]);

  function closePopup() {
    try {
      sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    } catch {
      // Storage may be disabled
    }

    setIsDismissed(true);
  }

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/80 px-4 py-6
        backdrop-blur-sm
      "
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="SY Hotels kampanya duyurusu"
        className="relative flex aspect-[9/16] w-[92vw] max-w-[50.625dvh] items-center justify-center md:aspect-[16/9] md:w-[calc(100vw-2rem)] md:max-w-[min(151dvh,1600px)]"
      >
        {/* RESPONSIVE IMAGE */}
        <picture className="block h-full w-full">
          <source
            media="(max-width: 767px)"
            srcSet={mobileImage.srcSet}
            sizes={mobileImage.sizes}
            width={900}
            height={1600}
          />

          <img
            {...desktopImage}
            alt="SY Hotels kampanya duyurusu"
            className="
  block h-full w-full
  object-contain
  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
"
          />
        </picture>

        {/* CLOSE BUTTON */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Kampanya duyurusunu kapat"
          className="
            absolute right-2 top-2 z-10
            flex h-10 w-10 items-center justify-center
            rounded-full border border-white/20
            bg-black/55 text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-black/80
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-white
            md:right-4 md:top-4
          "
        >
          <FiX size={22} />
        </button>
      </div>
    </div>
  );
}

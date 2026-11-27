
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getImageProps } from "next/image";

const POPUP_STORAGE_KEY = "sy-hotels-campaign-popup-v1";
const subscribeToPopupState = () => () => {};
const getServerPopupState = () => false;

const desktopImage = getImageProps({
  src: "/images/popup/popup-desktop.png",
  alt: "SY Hotels kampanya duyurusu",
  width: 1920,
  height: 1080,
  sizes: "min(calc(100vw - 32px), 151dvh, 1600px)",
  quality: 60,
  loading: "eager",
  fetchPriority: "high",
}).props;

const mobileImage = getImageProps({
  src: "/images/popup/popup-mobile.png",
  alt: "SY Hotels kampanya duyurusu",
  width: 1080,
  height: 1350,
  sizes: "min(92vw, 72dvh)",
  quality: 60,
  loading: "eager",
  fetchPriority: "high",
}).props;

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

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={mobileImage.src}
        imageSrcSet={mobileImage.srcSet}
        imageSizes={mobileImage.sizes}
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={desktopImage.src}
        imageSrcSet={desktopImage.srcSet}
        imageSizes={desktopImage.sizes}
        media="(min-width: 768px)"
        fetchPriority="high"
      />

      {isOpen && (
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
            className="relative flex aspect-[4/5] w-[92vw] max-w-[72dvh] items-center justify-center md:aspect-[16/9] md:w-[calc(100vw-2rem)] md:max-w-[min(151dvh,1600px)]"
          >
            <picture className="block h-full w-full">
              <source
                media="(max-width: 767px)"
                srcSet={mobileImage.srcSet}
                sizes={mobileImage.sizes}
                width={1080}
                height={1350}
              />

              <img
                {...desktopImage}
                alt="SY Hotels kampanya duyurusu"
                className="block h-full w-full object-contain shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              />
            </picture>

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
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

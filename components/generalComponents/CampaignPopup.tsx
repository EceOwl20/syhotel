
"use client";

import { useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { FiX } from "react-icons/fi";

const POPUP_STORAGE_KEY = "sy-hotels-campaign-popup-v1";

export default function CampaignPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Responsive image sources
  const { props: desktopImage } = getImageProps({
    src: "/images/popup/popup-desktop.png",
    alt: "SY Hotels kampanya duyurusu",
    width: 1600,
    height: 900,
    sizes: "100vw",
  });

  const { props: mobileImage } = getImageProps({
    src: "/images/popup/popup-mobile.png",
    alt: "SY Hotels kampanya duyurusu",
    width: 900,
    height: 1600,
    sizes: "100vw",
  });

  // Show on first visit of the tab session
  useEffect(() => {
    try {
      const hasSeenPopup = sessionStorage.getItem(
        POPUP_STORAGE_KEY
      );

      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    } catch {
      // Still display the popup if storage is unavailable
      setIsOpen(true);
    }
  }, []);

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

    setIsOpen(false);
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
        className="relative flex max-h-[90dvh] max-w-full items-center justify-center"
      >
        {/* RESPONSIVE IMAGE */}
        <picture>
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
  block h-auto w-[92vw]
  max-h-[90dvh]
  object-contain
  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
  md:h-auto md:w-auto
  md:max-h-[85dvh]
  md:max-w-[calc(100vw-2rem)]
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

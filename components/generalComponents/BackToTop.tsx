
"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Sayfanın başına dön"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`
        fixed bottom-20 right-2 z-[10000]
        flex h-[44px] w-[44px]
        items-center justify-center
        border border-[#b99d75]/60
        bg-transparent
        text-[#b99d75]
        backdrop-blur-sm
        transition-[opacity,transform]
        duration-500 ease-out
        hover:bg-[#b99d75]
        hover:text-white
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#b99d75]
        md:bottom-28 md:right-4
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <path d="m5 15 7-7 7 7" />
      </svg>
    </button>
  );
}

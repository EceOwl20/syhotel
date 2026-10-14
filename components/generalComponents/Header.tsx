
"use client";

import { useEffect, useState } from "react";
import HomeIcon from "./icons/HomeIcon";
import logo from "@/public/logo/sy-logo.svg"
import Image from "next/image";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

const languages = ["TR", "EN", "DE", "RU"] as const;

type Language = (typeof languages)[number];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] =
    useState<Language>("TR");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  if (!isMenuOpen) return;

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, [isMenuOpen]);

  return (
  <>
    <header className="fixed top-0 left-0 z-50 h-24 w-full">
      {/* Gradient background */}
      
{/* Header background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0"
>
  {/* Sayfanın en başındaki hafif gölgelendirme */}
  <div
    className={`absolute inset-0
      bg-linear-to-b from-black/40 via-black/15 to-transparent
      transition-opacity duration-300 ease-in-out
      ${isScrolled ? "opacity-0" : "opacity-100"}
    `}
  />

  {/* Scroll sonrası kahverengi gradient */}
  <div
    className={`absolute inset-0
      bg-linear-to-b from-[#745444] to-[#af7a53]
      transition-opacity duration-300 ease-in-out
      ${isScrolled || isMenuOpen ? "opacity-100" : "opacity-0"}
    `}
  />
</div>

      <div className="relative grid h-full w-full grid-cols-[1fr_auto_1fr] items-center px-5 text-white">

        {/* LEFT */}
        <div className="flex items-center gap-5">
          <a href="/" aria-label="Home">
            <HomeIcon className="h-5 w-6.25" />
          </a>

         
<button
  type="button"
  aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
  aria-expanded={isMenuOpen}
  aria-controls="main-navigation-panel"
  onClick={() => setIsMenuOpen((prev) => !prev)}
  className="relative flex h-6 w-6 shrink-0 items-center justify-center text-white"
>
  <span
    className={`absolute h-[2px] w-6 bg-current transition-transform duration-300 ${
      isMenuOpen
        ? "rotate-45"
        : "-translate-y-[6px]"
    }`}
  />
  <span
    className={`absolute h-[2px] w-6 bg-current transition-opacity duration-200 ${
      isMenuOpen ? "opacity-0" : "opacity-100"
    }`}
  />
  <span
    className={`absolute h-[2px] w-6 bg-current transition-transform duration-300 ${
      isMenuOpen
        ? "-rotate-45"
        : "translate-y-[6px]"
    }`}
  />
</button>


          <a href="tel:+902423404706" aria-label="Call us">
           <PhoneIcon className="h-5 w-5" />
          </a>
        </div>

        {/* CENTER LOGO */}
        <Link href="/"><Image src={logo} width={80} height={80} alt="logo"/></Link>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-5">
          <Link
            href="https://syhotels.platformeva.com/"
            target="_blank"
            rel="norefferer nofollower"
            className="rounded-md bg-linear-to-r from-[#8e7d6c] to-[#cdb3a4] px-1.75 py-1 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:brightness-110"
          >
            REZERVASYON
          </Link>

          <nav
            aria-label="Language selection"
            className="flex items-center gap-3"
          >
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setActiveLanguage(language)}
                aria-pressed={activeLanguage === language}
                className={`text-[13px] tracking-wide transition-opacity hover:opacity-100 ${
                  activeLanguage === language
                    ? "opacity-100"
                    : "opacity-80"
                }`}
              >
                {language}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
    <MenuOverlay
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
    /></>
  );
}

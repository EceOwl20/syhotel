
"use client";

import { useEffect, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import Image from "next/image";

import HomeIcon from "./icons/HomeIcon";
import PhoneIcon from "./icons/PhoneIcon";
import MenuOverlay from "./MenuOverlay";
import logo from "@/public/logo/sy-logo.svg";

const languages = ["tr", "en", "de", "ru"] as const;

type Language = (typeof languages)[number];

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

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

  const handleLanguageChange = (language: Language) => {
    if (language === locale || isPending) return;

    setIsMenuOpen(false);

    startTransition(() => {
      router.replace(pathname, { locale: language });
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 h-24 w-full">
        {/* Header background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Initial gradient */}
          <div
            className={`absolute inset-0
              bg-linear-to-b from-black/40 via-black/15 to-transparent
              transition-opacity duration-300 ease-in-out
              ${isScrolled ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* Scrolled / menu open gradient */}
          <div
            className={`absolute inset-0
              bg-linear-to-b from-[#745444] to-[#af7a53]
              transition-opacity duration-300 ease-in-out
              ${
                isScrolled || isMenuOpen
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        </div>

        <div className="relative grid h-full w-full grid-cols-[1fr_auto_1fr] items-center px-5 text-white">

          {/* LEFT */}
          <div className="flex items-center gap-5">
            <Link href="/" aria-label={t("home")}>
              <HomeIcon className="h-5 w-6.25" />
            </Link>

            <button
              type="button"
              aria-label={
                isMenuOpen ? t("closeMenu") : t("openMenu")
              }
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

            <a
              href="tel:+902423404706"
              aria-label={t("callUs")}
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>

          {/* CENTER LOGO */}
          <Link href="/">
            <Image
              src={logo}
              width={80}
              height={80}
              alt={t("logoAlt")}
            />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-5">
            <a
              href="https://syhotels.platformeva.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-linear-to-r from-[#8e7d6c] to-[#cdb3a4] px-1.75 py-1 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:brightness-110"
            >
              {t("reservation")}
            </a>

            {/* Language selector */}
            <nav
              aria-label={t("languageSelection")}
              className="flex items-center gap-3"
            >
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  lang={language}
                  onClick={() =>
                    handleLanguageChange(language)
                  }
                  disabled={isPending}
                  aria-pressed={locale === language}
                  className={`text-[13px] tracking-wide transition-opacity duration-300 hover:opacity-100 disabled:cursor-wait ${
                    locale === language
                      ? "font-semibold opacity-100"
                      : "opacity-80"
                  }`}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

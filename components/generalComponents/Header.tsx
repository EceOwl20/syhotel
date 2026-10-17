
"use client";

import { useEffect, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
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
  const params = useParams<{ slug?: string }>();

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
      const options = { locale: language };

      switch (pathname) {
        case "/rooms/[slug]":
        case "/bars/[slug]":
        case "/restaurants/[slug]":
          if (!params.slug) return;
          router.replace({ pathname, params: { slug: params.slug } }, options);
          break;
        default:
          router.replace(pathname, options);
      }
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 h-24 lg:h-20 w-full">
        {/* HEADER BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className={`
              absolute inset-0
              bg-linear-to-b from-black/40 via-black/15 to-transparent
              transition-opacity duration-300 ease-in-out
              ${isScrolled ? "opacity-0" : "opacity-100"}
            `}
          />

          <div
            className={`
              absolute inset-0
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

        {/* MAIN HEADER CONTENT */}
        <div className="relative flex h-full w-full items-start justify-between px-2 lg:px-4 pt-3 text-white min-[590px]:items-center min-[590px]:px-5 min-[590px]:pt-0">

          {/* LEFT */}
          <div className="flex h-10 shrink-0 items-center gap-3.5 min-[590px]:gap-5">
            <Link href="/" aria-label={t("home")}>
              <HomeIcon className="h-6 w-6" />
            </Link>

            <button
              type="button"
              aria-label={
                isMenuOpen ? t("closeMenu") : t("openMenu")
              }
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation-panel"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative flex h-6 w-6 shrink-0 items-center justify-center"
            >
              <span
                className={`
                  absolute h-[2px] w-5.5 bg-current
                  transition-transform duration-300
                  ${
                    isMenuOpen
                      ? "rotate-45"
                      : "-translate-y-[6px]"
                  }
                `}
              />

              <span
                className={`
                  absolute h-[2px] w-5.5 bg-current
                  transition-opacity duration-200
                  ${
                    isMenuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute h-[2px] w-5.5 bg-current
                  transition-transform duration-300
                  ${
                    isMenuOpen
                      ? "-rotate-45"
                      : "translate-y-[6px]"
                  }
                `}
              />
            </button>

            <a
              href="tel:+902423404706"
              aria-label={t("callUs")}
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>

          {/* CENTER LOGO - ALWAYS CENTERED */}
          <Link
            href="/"
            aria-label={t("home")}
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src={logo}
              width={70}
              height={70}
              alt={t("logoAlt")}
              priority
              className="h-[73px] w-auto min-[590px]:h-[80px]"
            />
          </Link>

          {/* RIGHT */}
          <div className="flex flex-col-reverse items-end gap-2 min-[590px]:h-full min-[590px]:flex-row min-[590px]:items-center min-[590px]:gap-5">

            {/* RESERVATION BUTTON */}
            <a
              href="https://syhotels.platformeva.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={isMenuOpen}
              tabIndex={isMenuOpen ? -1 : 0}
              className={`
                shrink-0 rounded-md
                bg-linear-to-r from-[#8e7d6c] to-[#cdb3a4]
                px-2 py-1.5
                text-[12px] font-medium tracking-wide text-white
                transition-[opacity,transform,visibility,filter]
                duration-300 ease-in-out
                hover:brightness-110
                min-[590px]:px-2.5 min-[590px]:text-[14px]
                ${
                  isMenuOpen
                    ? "pointer-events-none invisible -translate-y-2 opacity-0"
                    : "visible translate-y-0 opacity-100"
                }
              `}
            >
              {t("reservation")}
            </a>

            {/* LANGUAGE SELECTOR */}
            <nav
              aria-label={t("languageSelection")}
              className="flex h-10 shrink-0 items-center gap-2.5 min-[590px]:gap-3"
            >
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  lang={language}
                  onClick={() => handleLanguageChange(language)}
                  disabled={isPending}
                  aria-pressed={locale === language}
                  className={`
                    text-[13px] tracking-wide
                    transition-opacity duration-300
                    hover:opacity-100
                    disabled:cursor-wait
                    min-[590px]:text-[13px]
                    ${
                      locale === language
                        ? "font-semibold opacity-100"
                        : "opacity-80"
                    }
                  `}
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

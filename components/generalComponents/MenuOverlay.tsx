"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialYoutube } from "react-icons/ti";
import { IoMail } from "react-icons/io5";

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

// Room navigation
const roomLinks = [
  { key: "deluxe", href: "/rooms/deluxe-rooms" },
  { key: "deluxeFamily", href: "/rooms/deluxe-family-rooms" },
  { key: "deluxeSuperior", href: "/rooms/deluxe-superior-rooms" },
  { key: "swimUpFamily", href: "/rooms/deluxe-swimup-family-rooms" },
  { key: "swimUp", href: "/rooms/deluxe-swimup-rooms" },
  { key: "shallowPool", href: "/rooms/deluxe-shallow-pool-rooms" },
  { key: "duplexFamily", href: "/rooms/deluxe-duplex-family-rooms" },
  { key: "accessible", href: "/rooms/deluxe-handicap-rooms" },
] as const;

// Bar navigation
const barLinks = [
  { key: "ruby", slug: "ruby-lobby-bar" },
  { key: "lal", slug: "lal-terrace-bar" },
  { key: "marin", slug: "marin-shallow-bar" },
  { key: "aquarius", slug: "aquarius-pool-bar" },
  { key: "larimar", slug: "larimar-beach-restaurant" },
] as const;

// Gastronomy navigation
const gastronomyLinks = [
  { key: "sirius", slug: "sirius-restaurant" },
  { key: "nova", slug: "nova-food-court" },
  { key: "larimar", slug: "larimar-beach-restaurant" },
  { key: "bettelglow", slug: "bettelglow-patisserie" },
] as const;

// Additional main navigation
const mainLinks = [
  { key: "spa", href: "/spa" },
  { key: "pools", href: "/pools" },
  { key: "beach", href: "/beach" },
  { key: "aquapark", href: "/aquapark" },
  { key: "entertainment", href: "/entertainment" },
  { key: "kids", href: "/kids" },
] as const;

// Corporate navigation
const corporateLinks = [
  { key: "information", href: "/information" },
  { key: "agencies", href: "/agencies" },
  { key: "contact", href: "/contact" },
  { key: "privacy", href: "/kvkk" },
  { key: "sustainability", href: "/sustainability" },
  { key: "discoverRegion", href: "/discover" },
] as const;

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const t = useTranslations("MenuOverlay");

  const [expanded, setExpanded] = useState<string[]>(["rooms"]);

  const toggleSection = (section: string) => {
    setExpanded((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section],
    );
  };

  const isExpanded = (section: string) => expanded.includes(section);

  const menuLinkClass =
    "block w-fit text-[20px] font-light leading-[1.45] text-white/85 transition-colors hover:text-white md:text-[24px]";

  const submenuLinkClass =
    "text-[14px] font-light leading-6 text-white/75 transition-colors hover:text-white";

  return (
    <div
      id="main-navigation-panel"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-40 overflow-y-auto bg-[#ad7e59] transition-[opacity,visibility] duration-500 ease-in-out ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="mx-auto min-h-full max-w-[1600px] px-8 pt-28 pb-20 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* LEFT COLUMN */}
          <nav
            aria-label={t("navigationLabel")}
            className="flex flex-col items-start gap-2"
          >
            {/* Home */}
            <Link href="/" onClick={onClose} className={menuLinkClass}>
              {t("home")}
            </Link>

            {/* Reservation */}
            <Link
              href="/reservation"
              onClick={onClose}
              className={menuLinkClass}
            >
              {t("reservation")}
            </Link>

            {/* ROOMS */}
            <div>
              <button
                type="button"
                aria-expanded={isExpanded("rooms")}
                aria-controls="menu-rooms"
                onClick={() => toggleSection("rooms")}
                className={`${menuLinkClass} flex items-center gap-3`}
              >
                {t("rooms")}

                <span aria-hidden="true" className="text-lg">
                  {isExpanded("rooms") ? "⌃" : "⌄"}
                </span>
              </button>

              <div
                id="menu-rooms"
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isExpanded("rooms") ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-1 py-1 pl-4">
                    {roomLinks.map((room) => (
                      <li key={room.key}>
                        <Link
                          href={room.href}
                          onClick={onClose}
                          tabIndex={isExpanded("rooms") ? 0 : -1}
                          className={submenuLinkClass}
                        >
                          {t(`roomLinks.${room.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* BARS */}
            <div>
              <button
                type="button"
                aria-expanded={isExpanded("bars")}
                aria-controls="menu-bars"
                onClick={() => toggleSection("bars")}
                className={`${menuLinkClass} flex items-center gap-3`}
              >
                {t("bars")}

                <span aria-hidden="true" className="text-lg">
                  {isExpanded("bars") ? "⌃" : "⌄"}
                </span>
              </button>

              <div
                id="menu-bars"
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isExpanded("bars") ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-1 py-1 pl-4">
                    {barLinks.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={{
                            pathname: "/bars/[slug]",
                            params: { slug: item.slug },
                          }}
                          onClick={onClose}
                          tabIndex={isExpanded("bars") ? 0 : -1}
                          className={submenuLinkClass}
                        >
                          {t(`barLinks.${item.key}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* GASTRONOMY */}
            <div>
              <button
                type="button"
                aria-expanded={isExpanded("gastronomy")}
                aria-controls="menu-gastronomy"
                onClick={() => toggleSection("gastronomy")}
                className={`${menuLinkClass} flex items-center gap-3`}
              >
                {t("gastronomy")}

                <span aria-hidden="true" className="text-lg">
                  {isExpanded("gastronomy") ? "⌃" : "⌄"}
                </span>
              </button>

              <div
                id="menu-gastronomy"
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isExpanded("gastronomy")
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-1 py-1 pl-4">
                   {gastronomyLinks.map((item) => (
  <li key={item.slug}>
    <Link
      href={{
        pathname: "/restaurants/[slug]",
        params: { slug: item.slug },
      }}
      onClick={onClose}
      tabIndex={isExpanded("gastronomy") ? 0 : -1}
      className={submenuLinkClass}
    >
      {t(`gastronomyLinks.${item.key}`)}
    </Link>
  </li>
))}
                  </ul>
                </div>
              </div>
            </div>

            {/* MAIN LINKS */}
            {mainLinks.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={onClose}
                className={menuLinkClass}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-start gap-2">
            {/* Corporate navigation */}
            {corporateLinks.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={onClose}
                className={menuLinkClass}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Email addresses */}
            <div className="mt-5 flex flex-col gap-4 text-[14px] font-light text-white/80">
              <a
                href="mailto:info@syhotels.com"
                className="flex items-center justify-start gap-2 hover:text-white"
              >
                <IoMail size={18} />
                info@syhotels.com
              </a>

              <a
                href="mailto:sales@syhotels.com"
                className="flex items-center justify-start gap-2 hover:text-white"
              >
                <IoMail size={18} />
                sales@syhotels.com
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-3 flex items-center gap-4 text-[17px] text-white/90">
              <a
                href="https://www.facebook.com/syhotels"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare size={24} />
              </a>

              <a
                href="https://www.instagram.com/syhotels"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram size={28} />
              </a>

              {/* Add actual YouTube and LinkedIn URLs
                  before enabling these links */}
              <a
                href="https://www.youtube.com/@syhotelsbelek"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialYoutube size={26} />
               </a>

                <a
                href="https://tr.linkedin.com/company/syluxurybelek"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
               </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

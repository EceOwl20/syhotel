
"use client";

import { useState } from "react";
import Link from "next/link";

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const roomLinks = [
  { label: "Deluxe Odalar", href: "/rooms/deluxe" },
  { label: "Deluxe Aile Odaları", href: "/rooms/deluxe-family" },
  { label: "Deluxe Superior Odalar", href: "/rooms/deluxe-superior" },
  { label: "Deluxe Swim-Up Aile Odaları", href: "/rooms/swim-up-family" },
  { label: "Deluxe Swim-Up Odalar", href: "/rooms/swim-up" },
  { label: "Deluxe Sığ Havuzlu Odalar", href: "/rooms/shallow-pool" },
  { label: "Deluxe Dubleks Aile Odaları", href: "/rooms/duplex-family" },
  { label: "Deluxe Engelli Odalar", href: "/rooms/accessible" },
];

const barLinks = [
  { label: "Barlar", href: "/bars" },
];

const gastronomyLinks = [
  { label: "Restoranlar", href: "/restaurants" },
  { label: "Alakartlar", href: "/alacarte" },
  { label: "Snack", href: "/snack" },
];

export default function MenuOverlay({
  isOpen,
  onClose,
}: MenuOverlayProps) {
  const [expanded, setExpanded] = useState<string[]>([
    "rooms",
  ]);

  const toggleSection = (section: string) => {
    setExpanded((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section],
    );
  };

  const isExpanded = (section: string) =>
    expanded.includes(section);

  const menuLinkClass =
    "block w-fit text-[20px] font-light leading-[1.45] text-white/85 transition-colors hover:text-white md:text-[24px]";

  return (
    <div
      id="main-navigation-panel"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-40 overflow-y-auto bg-[#ad7e59] transition-[opacity,visibility] duration-500 ease-in-out ${
        isOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
      }`}
    >
      <div className="mx-auto min-h-full max-w-[1600px] px-8 pt-28 pb-20 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

          {/* LEFT COLUMN */}
          <nav aria-label="Ana menü" className="flex flex-col items-start gap-2">

            <Link href="/" onClick={onClose} className={menuLinkClass}>
              Ana Sayfa
            </Link>

            <Link
              href="/reservation"
              onClick={onClose}
              className={menuLinkClass}
            >
              Online Rezervasyon
            </Link>

            {/* ROOMS */}
            <div>
              <button
                type="button"
                aria-expanded={isExpanded("rooms")}
                onClick={() => toggleSection("rooms")}
                className={`${menuLinkClass} flex items-center gap-3`}
              >
                Konaklama
                <span className="text-lg">
                  {isExpanded("rooms") ? "⌃" : "⌄"}
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isExpanded("rooms")
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-1 py-1 pl-4">
                    {roomLinks.map((room) => (
                      <li key={room.href}>
                        <Link
                          href={room.href}
                          onClick={onClose}
                          className="text-[14px] font-light leading-6 text-white/75 transition-colors hover:text-white"
                        >
                          {room.label}
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
                onClick={() => toggleSection("bars")}
                className={`${menuLinkClass} flex items-center gap-3`}
              >
                Barlar
                <span className="text-lg">
                  {isExpanded("bars") ? "⌃" : "⌄"}
                </span>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ${
                isExpanded("bars") ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}>
                <div className="overflow-hidden">
                  <ul className="space-y-1 py-1 pl-4">
                    {barLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="text-[14px] font-light text-white/75 hover:text-white"
                        >
                          {item.label}
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
                onClick={() => toggleSection("gastronomy")}
                className={`${menuLinkClass} flex items-center gap-3`}
              >
                Gastronomi
                <span className="text-lg">
                  {isExpanded("gastronomy") ? "⌃" : "⌄"}
                </span>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ${
                isExpanded("gastronomy") ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}>
                <div className="overflow-hidden">
                  <ul className="space-y-1 py-1 pl-4">
                    {gastronomyLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="text-[14px] font-light text-white/75 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {[
              ["Spa & Wellness", "/spa"],
              ["Havuzlar", "/pools"],
              ["Sahil", "/beach"],
              ["Mega Splash Aquapark", "/aquapark"],
              ["Aktivite & Eğlence", "/entertainment"],
              ["Çocuklar İçin", "/kids"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={menuLinkClass}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-start gap-2">

            {[
              ["Genel Bilgilendirme", "/information"],
              ["Acentalar İçin", "/agencies"],
              ["İletişim", "/contact"],
              ["Kişisel Verileri Koruma Kanunu", "/kvkk"],
              ["Sürdürülebilirlik", "/sustainability"],
              ["Bölgeyi Keşfedin", "/discover"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={menuLinkClass}
              >
                {label}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-4 text-[14px] font-light text-white/80">
              <a href="mailto:info@syhotels.com" className="hover:text-white">
                ✉ &nbsp; info@syhotels.com
              </a>

              <a href="mailto:sales@syhotels.com" className="hover:text-white">
                ✉ &nbsp; sales@syhotels.com
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-3 flex items-center gap-4 text-[17px] text-white/90">
              <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

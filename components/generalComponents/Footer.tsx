
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import ParticleLogo from "./ParticleLogo";
import sunsetImage from "@/public/images/gunbatimi.webp";

import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import CookiePreferencesButton from "./CookiePreferencesButton";

const corporateLinks = [
  {
    key: "contact",
    href: "/contact",
  },
  {
    key: "privacy",
    href: "/kvkk",
  },
  {
    key: "sustainability",
    href: "/sustainability",
  },
  {
    key: "exploreRegion",
    href: "/explore-region",
  },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/syhotels",
    icon: IoLogoFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/syhotels",
    icon: AiOutlineInstagram,
  },
];

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="relative w-full overflow-hidden bg-[#b9876b] text-white">

      {/* Sunset image */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[390px] md:h-[430px]">
        <Image
          src={sunsetImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Smooth transition into footer background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-transparent via-[#b9876b]/20 via-55% to-[#b9876b]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center lg:text-start">

        {/* Particle Logo */}
        <div className="flex h-[290px] items-center justify-center pt-15 md:h-[310px] md:pt-16">
          <ParticleLogo
            src="/logo/logo_favicon1.webp"
            width={140}
            height={140}
            padding={90}
            particleGap={1}
            particleSize={0.85}
            mouseRadius={50}
            color="#ffffff"
          />
        </div>

        {/* Footer information */}
        <div className="mx-auto grid max-w-[1650px] grid-cols-1 gap-x-12 gap-y-10 px-7 pt-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 xl:gap-x-32 2xl:gap-x-44">

          {/* Corporate */}
          <div>
            <h3 className="mb-3 text-[16px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("corporate")}
            </h3>

            <ul className="text-[15px] font-normal leading-[30px]">
              {corporateLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#eee1d3]"
                  >
                    {t(`corporateLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton label={t("cookiePreferences")} />
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-[16px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("contact")}
            </h3>

            <div className="space-y-4 text-[15px] font-normal leading-[1.65]">
              <div>
                <p>{t("reservation")}</p>

                <a
                  href="tel:+902422054787"
                  className="transition-colors duration-300 hover:text-[#eee1d3]"
                >
                  0 242 205 47 87
                </a>
              </div>

               <a
                href="mailto:callcenter@syhotels.com"
                className="inline-block transition-colors duration-300 hover:text-[#eee1d3]"
              >
               callcenter@syhotels.com
              </a>

              <a
                href="mailto:info@syhotels.com"
                className="inline-block transition-colors duration-300 hover:text-[#eee1d3]"
              >
                info@syhotels.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-3 text-[16px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("address")}
            </h3>

            <address className="text-[15px] leading-[1.65] font-normal not-italic">
              {t("addressLines.line1")}
              <br />
              {t("addressLines.line2")}
              <br />
              {t("addressLines.line3")}
            </address>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SY+Hotels+Belek+Antalya"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[15px] font-normal underline underline-offset-2 transition-colors duration-300 hover:text-[#eee1d3]"
            >
              {t("getDirections")}
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-[16px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("socialMedia")}
            </h3>

            <div className="flex items-center text-center justify-center lg:justify-start gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex items-center gap-2 text-[15px] font-normal text-[#eee1d3] transition-colors duration-300 hover:text-white"
                  >
                    <Icon className="text-[25px] transition-transform duration-500 ease-out group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom branding */}
        <div className="flex items-center justify-center pt-5 pb-10">
          <span className="text-[12px] font-semibold tracking-[-0.06em] text-white">
            SY HOTELS
          </span>
        </div>

      </div>
    </footer>
  );
}

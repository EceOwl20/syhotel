
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import ParticleLogo from "./ParticleLogo";
import sunsetImage from "@/public/images/gunbatimi.webp";

import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";

const corporateLinks = [
  {
    key: "contact",
    href: "/iletisim",
  },
  {
    key: "privacy",
    href: "/kvkk",
  },
  {
    key: "sustainability",
    href: "/surdurulebilirlik",
  },
  {
    key: "exploreRegion",
    href: "/bolgeyi-kesfedin",
  },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: IoLogoFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
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
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("corporate")}
            </h3>

            <ul className="space-y-2 text-[13px] font-light">
              {corporateLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                  >
                    {t(`corporateLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("contact")}
            </h3>

            <div className="space-y-4 text-[13px] font-light">
              <div>
                <p>{t("reservation")}</p>

                <a
                  href="tel:+902423404706"
                  className="hover:underline"
                >
                  +90 242 340 47 06
                </a>
              </div>

              <div>
                <p>{t("hotelContact")}</p>

                <a
                  href="tel:+902422054780"
                  className="hover:underline"
                >
                  +90 242 205 47 80
                </a>
              </div>

              <a
                href="mailto:info@syhotels.com"
                className="inline-block hover:underline"
              >
                info@syhotels.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("address")}
            </h3>

            <address className="text-[13px] leading-[1.8] font-light not-italic">
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
              className="mt-5 inline-block text-[13px] font-light underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {t("getDirections")}
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em] underline decoration-[#ba9b74] decoration-2 underline-offset-4">
              {t("socialMedia")}
            </h3>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex items-center gap-2 text-[13px] font-light transition-opacity duration-300 hover:opacity-70"
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

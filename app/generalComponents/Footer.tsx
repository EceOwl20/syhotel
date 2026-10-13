
import Image from "next/image";
import Link from "next/link";
import ParticleLogo from "./ParticleLogo";
import sunsetImage from "@/public/images/gunbatimi.webp";

const corporateLinks = [
  { label: "İletişim", href: "/iletisim" },
  { label: "Kişisel Verileri Koruma Kanunu", href: "/kvkk" },
  { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
  { label: "Bölgeyi Keşfedin", href: "/bolgeyi-kesfedin" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
];

export default function Footer() {
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

      <div className="relative z-10">

        {/* Particle Logo */}
        <div className="flex h-[290px] items-start justify-center pt-15 md:h-[310px] md:pt-16">
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
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-x-12 gap-y-10 px-7 pt-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

          {/* Corporate */}
          <div>
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em]">
              KURUMSAL
            </h3>

            <ul className="space-y-2 text-[13px] font-light">
              {corporateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em]">
              İLETİŞİM
            </h3>

            <div className="space-y-4 text-[13px] font-light">
              <div>
                <p>Rezervasyon</p>
                <a
                  href="tel:+902423404706"
                  className="hover:underline"
                >
                  +90 242 340 47 06
                </a>
              </div>

              <div>
                <p>Hotel İletişim</p>
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
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em]">
              ADRES
            </h3>

            <address className="text-[13px] leading-[1.8] font-light not-italic">
              Kadriye, Kır Mevkii, Atatürk Cad.
              <br />
              07500 – Belek / Antalya / Türkiye
              <br />
              (Land Of Legend Karşısı)
            </address>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SY+Hotels+Belek+Antalya"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[13px] font-light underline underline-offset-2 hover:opacity-70"
            >
              Yol Tarifi Al
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-3 text-[14px] font-medium tracking-[0.08em]">
              SOSYAL MEDYA
            </h3>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[13px] font-light hover:opacity-70"
                >
                  {social.label}
                </a>
              ))}
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

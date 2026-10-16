
import Image from "next/image";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";

type HalfImageBannerProps = {
  image: string;
  imageAlt?: string;
  logo?: string;
  overlayOpacity?: number;
  logoWidth?: number;
  logoHeight?: number;
  className?: string;
};

export default function HalfImageBanner({
  image,
  imageAlt = "",
  logo = "/logo/logo_favicon1.webp",
  overlayOpacity = 0.2,
  logoWidth = 140,
  logoHeight = 140,
  className = "",
}: HalfImageBannerProps) {
  const opacity = Math.min(1, Math.max(0, overlayOpacity));

  return (
    <section
      className={`relative h-[60vh] w-full min-h-[320px] overflow-hidden ${className}`}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity }}
      />

      {/* BOTTOM GRADIENT */}
      {/* <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-linear-to-b
          from-transparent
          via-transparent
          to-[#948475]/90
        "
      /> */}

      {/* PARTICLE LOGO */}
      <div className="pointer-events-none absolute inset-0 z-10 mt-[11%] flex items-center justify-center">
        <ParticleLogo
  src="/logo/logo_favicon-beyaz.webp"
  width={135}
  height={135}
  particleGap={1}
  particleSize={0.85}
  mouseRadius={50}
  detectionMode="alpha"
  useOriginalColors
  entranceAnimation
  entranceDuration={1800}
/>
      </div>
    </section>
  );
}

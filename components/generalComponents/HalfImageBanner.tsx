import Image from "next/image";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";

type HalfImageBannerProps = {
  image: string;
  imageAlt?: string;

  // Full-image dark overlay
  overlayOpacity?: number;

  // Optional bottom gradient
  showGradient?: boolean;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientStart?: number;

  // Logo
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;

  className?: string;
};

export default function HalfImageBanner({
  image,
  imageAlt = "",

  // Black overlay is always present
  overlayOpacity = 0.35,

  // Bottom gradient is optional
  showGradient = false,
  gradientColor = "#948475",
  gradientOpacity = 0.8,
  gradientStart = 45,

  logo = "/logo/logo_favicon-beyaz.webp",
  logoWidth = 135,
  logoHeight = 135,

  className = "",
}: HalfImageBannerProps) {
  const darkOpacity = Math.min(1, Math.max(0, overlayOpacity));
  const bottomOpacity = Math.min(1, Math.max(0, gradientOpacity));
  const start = Math.min(100, Math.max(0, gradientStart));

  return (
    <section
      className={`relative h-[70vh] w-full min-h-[320px] overflow-hidden lg:h-[60vh] ${className}`}
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

      {/* FULL IMAGE BLACK OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black"
        style={{
          opacity: darkOpacity,
        }}
      />

      {/* OPTIONAL BOTTOM GRADIENT */}
      {showGradient && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent ${start}%,
              color-mix(
                in srgb,
                ${gradientColor} ${bottomOpacity * 100}%,
                transparent
              ) 100%
            )`,
          }}
        />
      )}

      {/* PARTICLE LOGO */}
      <div className="pointer-events-none absolute inset-0 z-10 mt-[11%] flex items-center justify-center">
        <ParticleLogo
          src={logo}
          width={logoWidth}
          height={logoHeight}
          particleGap={1}
          particleSize={0.95}
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
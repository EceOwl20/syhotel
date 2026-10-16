
import Link from "next/link";
import type { StaticImageData } from "next/image";

type MainBannerProps = {
  backgroundImage: StaticImageData | string;
  span?: string;
  header: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundPosition?: "center" | "start" | "end" | "top" | "bottom";
};

export default function MainBanner({
  backgroundImage,
  span,
  header,
  text,
  buttonText,
  buttonLink,
  backgroundPosition = "center",
}: MainBannerProps) {
  const imageUrl =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage.src;

  return (
   <section
  className="relative flex h-[470px] w-full items-center justify-center bg-cover px-6 md:h-[580px] lg:h-[650px]"
  style={{
    backgroundImage: `url("${imageUrl}")`,
    backgroundPosition,
  }}
>
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-black/60"
      />

      {/* Banner content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center text-[#F3F3F0]">
        {span && (
          <span className="text-xs font-medium">
            {span}
          </span>
        )}

        <h2 className="text-[30px] lg:text-[36px] leading-[1.2] tracking-[0.015em] font-extralight">
          {header}
        </h2>

        {text && (
          <p className="max-w-[90%] text-[14px] lg:text-[16px] font-light wrap-break-word leading-[1.7] tracking-[0.005em]">
            {text}
          </p>
        )}

        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="mt-4 flex items-center justify-center border-2 w-[147.8px] border-[#6d5c51] rounded-full text-[16px] font-light transition-colors duration-300 hover:bg-[#6d5c51]/60 px-12 py-3 text-center text-base text-white "
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}

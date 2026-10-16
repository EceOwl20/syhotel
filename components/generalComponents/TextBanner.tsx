
import Link from "next/link";
import type { StaticImageData } from "next/image";
import BackgroundSlideshow from "./BackgroundSlideshow";

type MainBannerProps = {
  backgroundImage: StaticImageData | string;
  span?: string;
  header: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  slideshowImages?: Array<StaticImageData | string>;
  overlayVariant?: "sage" | "taupe" | "black";
  backgroundPosition?: "center" | "start" | "end" | "top" | "bottom";
};

const overlayStyles = {
  sage: {
    background: "linear-gradient(180deg, #6c8a7b 0%, #000 100%)",
    opacity: 0.56,
  },
  taupe: {
    background: "linear-gradient(180deg, #8b7c6a 0%, #000 100%)",
    opacity: 0.37,
  },
  black: {
    background: "#000",
    opacity: 0.55,
  },
} as const;

export default function MainBanner({
  backgroundImage,
  span,
  header,
  text,
  buttonText,
  buttonLink,
  slideshowImages,
  overlayVariant = "sage",
  backgroundPosition = "center",
}: MainBannerProps) {
  const imageUrl =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage.src;

  return (
   <section
  className="relative flex h-[470px] w-full items-center justify-center bg-cover px-[3px] md:h-[70vh] md:px-6"
  style={{
    backgroundImage: slideshowImages?.length
      ? undefined
      : `url("${imageUrl}")`,
    backgroundPosition,
  }}
>
      {slideshowImages?.length ? (
        <BackgroundSlideshow images={slideshowImages} />
      ) : null}

      {/* Background color overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={overlayStyles[overlayVariant]}
      />

      {/* Banner content */}
      <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-center justify-center gap-4 text-center text-[#F3F3F0]">
        {span && (
          <span className="text-xs leading-[1.2] font-medium tracking-[0.1em] uppercase">
            {span}
          </span>
        )}

        <h2 className="text-[30px] leading-[1.2] font-extralight uppercase lg:text-[40px]">
          {header}
        </h2>

        {text && (
          <p className="w-full text-[14px] leading-[1.66] font-normal wrap-break-word lg:text-[16px]">
            {text}
          </p>
        )}

        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="mt-4 flex h-[52px] w-[100px] items-center justify-center rounded-full border border-[#b99d75] px-6 text-center text-[16px] leading-none font-normal text-white transition-colors duration-400 hover:border-[#ada190] hover:bg-[#ada190] md:w-[148px]"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}

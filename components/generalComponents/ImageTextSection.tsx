
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Reveal from "@/components/HomeComponents/Reveal";
import RoomGalleryLightbox from "@/components/rooms/RoomGalleryLightbox";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type ImageTextSectionProps = {
  title: string;
  description: string;
  images: string[];
  imagePosition?: "left" | "right";
  desktopImageSize?: "default" | "compact";
  className?: string;
};

export default function ImageTextSection({
  title,
  description,
  images,
  imagePosition = "right",
  desktopImageSize = "default",
  className = "",
}: ImageTextSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasMultipleImages = images.length > 1;
  const imageIsLeft = imagePosition === "left";
  const hasCompactDesktopImage = desktopImageSize === "compact";
  const desktopGridClass = hasCompactDesktopImage
    ? "lg:grid-cols-2"
    : "lg:grid-cols-3";
  const desktopImageClass = hasCompactDesktopImage
    ? imageIsLeft
      ? "lg:col-start-1 lg:row-start-1"
      : "lg:col-start-2 lg:row-start-1"
    : imageIsLeft
      ? "lg:col-span-2 lg:col-start-1 lg:row-start-1"
      : "lg:col-span-2 lg:col-start-2 lg:row-start-1";
  const desktopTextClass = hasCompactDesktopImage
    ? imageIsLeft
      ? "lg:col-start-2 lg:pl-5"
      : "lg:col-start-1 lg:row-start-1 lg:pr-5 lg:text-right"
    : imageIsLeft
      ? "lg:col-start-3 lg:pl-5"
      : "lg:col-start-1 lg:row-start-1 lg:pr-5 lg:text-right";
  const imageSizes = hasCompactDesktopImage
    ? "(max-width: 1023px) 100vw, 50vw"
    : "(max-width: 1023px) 100vw, 66vw";

  const galleryImages: GalleryImage[] = useMemo(
    () =>
      images.map((src, index) => ({
        id: `${src}-${index}`,
        src,
        alt: `${title} - ${index + 1}`,
      })),
    [images, title],
  );

  const nextImage = () => {
    setActiveIndex((previous) => (previous + 1) % images.length);
  };

  const previousImage = () => {
    setActiveIndex(
      (previous) =>
        (previous - 1 + images.length) % images.length,
    );
  };

  if (images.length === 0) return null;

  return (
    <>
      <section className={`w-full bg-white px-5 py-5 md:py-10 md:px-8 ${className}`}>
        <Reveal>
          <div
            className={`mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 lg:gap-0 ${desktopGridClass}`}
          >
          {/* IMAGE SLIDER */}
          <div
            className={`
              group relative aspect-video w-full overflow-hidden
              ${desktopImageClass}
            `}
          >
            {/* CLICKABLE IMAGES */}
            {images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`${title} - ${index + 1}`}
                tabIndex={index === activeIndex ? 0 : -1}
                className={`
                  absolute inset-0 h-full w-full cursor-zoom-in
                  transition-opacity duration-700 ease-in-out
                  ${
                    index === activeIndex
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }
                `}
              >
                <Image
                  src={src}
                  alt={`${title} - ${index + 1}`}
                  fill
                  sizes={imageSizes}
                  className="object-cover"
                />
              </button>
            ))}

            {/* NAVIGATION ARROWS */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="
                    absolute top-1/2 left-4 z-20
                    -translate-y-1/2 text-white
                    opacity-70 transition-opacity
                    hover:opacity-100
                  "
                >
                  <IoIosArrowBack size={24} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="
                    absolute top-1/2 right-4 z-20
                    -translate-y-1/2 text-white
                    opacity-70 transition-opacity
                    hover:opacity-100
                  "
                >
                  <IoIosArrowForward size={24} />
                </button>

                {/* SLIDER DOTS */}
                <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* TEXT */}
          <div
            className={`
              flex flex-col justify-center
              text-center text-[#8B7C6A]
              lg:text-left
              ${desktopTextClass}
            `}
          >
            <h2 className="mb-5 text-[24px] leading-[1.2] font-normal md:text-[30px]">
              {title}
            </h2>

            <p className="whitespace-pre-line text-[14px] leading-[1.66] font-normal md:text-[16px]">
              {description}
            </p>
          </div>

          </div>
        </Reveal>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      {lightboxIndex !== null && (
        <RoomGalleryLightbox
          images={galleryImages}
          activeIndex={lightboxIndex}
          onChange={(index) => {
            setLightboxIndex(index);
            setActiveIndex(index);
          }}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiChevronRight } from "react-icons/fi";

import RoomGalleryLightbox from "@/components/rooms/RoomGalleryLightbox";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type PoolImageTextSectionProps = {
  title: string;
  subtitle?: string;
  description?: string;
  images: string[];
  imagePosition?: "left" | "right";
  discoverText?: string;
  discoverHref?: "/aquapark";
  className?: string;
};

export default function PoolImageTextSection({
  title,
  subtitle,
  description,
  images,
  imagePosition = "left",
  discoverText,
  discoverHref,
  className = "",
}: PoolImageTextSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(
    null,
  );

  const imageIsLeft = imagePosition === "left";
  const hasMultipleImages = images.length > 1;

  // Convert images into the existing lightbox format
  const galleryImages: GalleryImage[] = images.map(
    (src, index) => ({
      id: `${title}-${index}`,
      src,
      alt: `${title} - ${index + 1}`,
    }),
  );

  if (images.length === 0) return null;

  return (
    <>
      <section
        className={`w-full bg-[#f7f7f5] px-5 py-8 md:px-10 lg:py-12 ${className}`}
      >
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* CIRCULAR IMAGE */}
          <div
            className={`relative mx-auto w-full max-w-[560px] ${
              imageIsLeft
                ? "lg:col-start-1 lg:row-start-1"
                : "lg:col-start-2 lg:row-start-1"
            }`}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-full">

              {/* IMAGE SLIDES */}
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`${title} - ${index + 1}`}
                  tabIndex={index === activeIndex ? 0 : -1}
                  className={`
                    absolute inset-0 h-full w-full
                    cursor-zoom-in overflow-hidden rounded-full
                    transition-opacity duration-1000 ease-in-out
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
                    sizes="(max-width: 1023px) 90vw, 560px"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </button>
              ))}

              {/* SLIDER DOTS */}
              {hasMultipleImages && (
                <div className="absolute inset-x-0 bottom-[5%] z-20 flex items-center justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`${title}: ${index + 1}. görsel`}
                      aria-current={
                        index === activeIndex
                          ? "true"
                          : undefined
                      }
                      className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-white"
                          : "bg-white/45 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* TEXT CONTENT */}
          <div
            className={`flex flex-col justify-center text-[#858585] ${
              imageIsLeft
                ? "text-center lg:col-start-2 lg:row-start-1 lg:text-left"
                : "text-center lg:col-start-1 lg:row-start-1 lg:text-right"
            }`}
          >
            <h2 className="text-[26px] font-light leading-tight md:text-[30px]">
              {title}
            </h2>

            {subtitle && (
              <h3 className="mt-1 text-[20px] font-extralight leading-snug md:text-[23px]">
                {subtitle}
              </h3>
            )}

            {description && (
              <p className="mt-5 text-[14px] font-light leading-[1.8] md:text-[15px]">
                {description}
              </p>
            )}

            {discoverText && discoverHref && (
              <div className="mt-4">
                <Link
                  href={discoverHref}
                  className="inline-flex items-center gap-1 border-b border-[#948475] pb-1 text-[14px] font-light text-[#8B7C6A] transition-colors duration-300 hover:text-[#654b39]"
                >
                  {discoverText}
                  <FiChevronRight size={15} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EXISTING ROOM LIGHTBOX */}
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

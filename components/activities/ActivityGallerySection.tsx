"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdClose,
} from "react-icons/io";

type ActivityGallerySectionProps = {
  title: string;
  dailyTitle: string;
  dailyDescription: string;
  eveningTitle: string;
  eveningDescription: string;
  images: string[];
};

export default function ActivityGallerySection({
  title,
  dailyTitle,
  dailyDescription,
  eveningTitle,
  eveningDescription,
  images,
}: ActivityGallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const previousImage = () => {
    setActiveIndex(
      (index) => (index - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    if (!isLightboxOpen || images.length === 0) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (index) => (index - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <section className="w-full bg-black px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-10 lg:grid-cols-[30%_70%] lg:gap-0">
          {/* LEFT TEXT */}
          <div className="text-center text-[#bda99c] lg:pr-8 lg:text-right">
            <h2 className="mb-5 text-[25px] font-light">
              {title}
            </h2>

            <h3 className="mb-3 text-[15px] font-light">
              {dailyTitle}
            </h3>

            <p className="text-[13px] leading-[1.9] font-light">
              {dailyDescription}
            </p>

            <h3 className="mt-6 mb-3 text-[15px] font-light">
              {eveningTitle}
            </h3>

            <p className="text-[13px] leading-[1.9] font-light">
              {eveningDescription}
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="group relative aspect-video w-full overflow-hidden">
            <button
              type="button"
              aria-label="Open image gallery"
              onClick={() => setIsLightboxOpen(true)}
              className="absolute inset-0 z-0 cursor-zoom-in"
            >
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${title} - ${index + 1}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 70vw"
                  className={`object-cover transition-opacity duration-700 ${
                    index === activeIndex
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </button>

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white"
                >
                  <IoIosArrowBack size={25} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white"
                >
                  <IoIosArrowForward size={25} />
                </button>

                <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`h-1.5 w-1.5 rounded-full ${
                        activeIndex === index
                          ? "bg-white"
                          : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Activity image gallery"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close gallery"
            className="absolute top-5 right-5 z-20 text-white"
          >
            <IoMdClose size={30} />
          </button>

          <div className="relative h-[85vh] w-full max-w-[1500px]">
            <Image
              src={images[activeIndex]}
              alt={`${title} - ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute top-1/2 left-3 z-20 -translate-y-1/2 text-white md:left-8"
              >
                <IoIosArrowBack size={32} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-3 z-20 -translate-y-1/2 text-white md:right-8"
              >
                <IoIosArrowForward size={32} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
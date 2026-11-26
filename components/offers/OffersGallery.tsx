"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

import type { GalleryCategory } from "@/data/offersGallery";

type Props = {
  categories: GalleryCategory[];
  labels: {
    [key: string]: string;
  };
};

export default function OffersGallery({
  categories,
  labels,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    null
  );
  const [activeImage, setActiveImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const currentCategory = categories.find(
    (category) => category.id === activeCategory
  );

  const images = currentCategory?.images ?? [];

  const openGallery = (id: string, imageIndex = 0) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setActiveCategory(id);
    setActiveImage(imageIndex);
  };

  const closeGallery = useCallback(() => {
    setActiveCategory(null);
    triggerRef.current?.focus();
  }, []);

  const nextImage = useCallback(() => {
    setActiveImage((prev) =>
      images.length ? (prev + 1) % images.length : 0
    );
  }, [images.length]);

  const previousImage = useCallback(() => {
    setActiveImage((prev) =>
      images.length
        ? (prev - 1 + images.length) % images.length
        : 0
    );
  }, [images.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeCategory) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeCategory,
    closeGallery,
    nextImage,
    previousImage,
  ]);

  if (!categories.length) return null;

  return (
    <>
      {/* CATEGORY THUMBNAILS */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => openGallery(category.id)}
            className="group relative overflow-hidden bg-[#e8e1d9] text-left"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={category.images[0].src}
                alt={category.images[0].alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 15vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/35" />

              <FiMaximize2
                size={18}
                className="absolute right-3 top-3 text-white opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="flex items-center justify-between gap-2 bg-[#745444] px-3 py-3 text-white transition-colors group-hover:bg-[#8e6b58]">
              <span className="text-[11px] font-light uppercase tracking-[0.08em]">
                {labels[category.titleKey]}
              </span>

              <span className="text-[10px] text-white/65">
                ({category.images.length})
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {mounted &&
        activeCategory &&
        currentCategory &&
        images.length > 0 &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-5"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeGallery();
              }
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={labels.galleryTitle}
              className="relative flex max-h-[95dvh] w-full max-w-[1250px] flex-col overflow-hidden bg-[#f8f6f3] shadow-2xl"
            >
              {/* HEADER */}
              <div className="flex shrink-0 items-center justify-between border-b border-[#e4d8ce] px-5 py-4 md:px-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#948475]">
                    SY Hotels Luxury Belek
                  </span>

                  <h2 className="mt-1 text-lg font-extralight uppercase tracking-[0.08em] text-[#745444]">
                    {labels[currentCategory.titleKey]}
                  </h2>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeGallery}
                  aria-label={labels.close}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c9bc] text-[#745444] transition-colors hover:bg-[#745444] hover:text-white"
                >
                  <FiX size={21} />
                </button>
              </div>

              {/* SCROLLABLE BODY */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                {/* MAIN IMAGE */}
                <div className="relative mx-auto w-full max-w-[1120px] px-3 pt-5 md:px-8 md:pt-8">
                  <div className="relative h-[30dvh] min-h-[190px] bg-[#e7ded5] sm:h-[43dvh] lg:h-[52dvh]">
                    <Image
                      key={images[activeImage].src}
                      src={images[activeImage].src}
                      alt={images[activeImage].alt}
                      fill
                      sizes="(max-width: 1024px) 95vw, 1100px"
                      className="object-contain"
                    />

                    {/* LEFT ARROW */}
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={previousImage}
                          aria-label={labels.previous}
                          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#745444] shadow-md transition-colors hover:bg-[#745444] hover:text-white md:left-4"
                        >
                          <FiArrowLeft size={20} />
                        </button>

                        <button
                          type="button"
                          onClick={nextImage}
                          aria-label={labels.next}
                          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#745444] shadow-md transition-colors hover:bg-[#745444] hover:text-white md:right-4"
                        >
                          <FiArrowRight size={20} />
                        </button>
                      </>
                    )}

                    {/* COUNTER */}
                    <div className="absolute bottom-4 right-4 bg-[#29221e]/80 px-4 py-2 text-[12px] font-light text-white">
                      {activeImage + 1} / {images.length}
                    </div>
                  </div>
                </div>

                {/* CATEGORY TABS */}
                <div className="mx-auto mt-6 flex max-w-[1120px] gap-6 overflow-x-auto border-b border-[#e1d6cb] px-4 md:px-8">
                  {categories.map((category) => {
                    const selected =
                      category.id === activeCategory;

                    return (
                      <button
                        type="button"
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setActiveImage(0);
                        }}
                        aria-pressed={selected}
                        className={`shrink-0 border-b-2 pb-4 text-[11px] font-light uppercase tracking-[0.12em] transition-colors ${
                          selected
                            ? "border-[#745444] text-[#745444]"
                            : "border-transparent text-[#948475] hover:text-[#745444]"
                        }`}
                      >
                        {labels[category.titleKey]}
                        <span className="ml-2 text-[10px] opacity-60">
                          ({category.images.length})
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* IMAGE THUMBNAILS */}
                <div className="mx-auto grid max-w-[1120px] grid-cols-3 gap-3 px-4 py-6 sm:grid-cols-4 md:grid-cols-6 md:px-8">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={`${image.src}-${index}`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`${labels.viewImage} ${index + 1}`}
                      aria-pressed={index === activeImage}
                      className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${
                        activeImage === index
                          ? "border-[#b9876b] opacity-100"
                          : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
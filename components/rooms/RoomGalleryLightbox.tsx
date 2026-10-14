
"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { GalleryImage } from "./RoomGallery";

type RoomGalleryLightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function RoomGalleryLightbox({
  images,
  activeIndex,
  onChange,
  onClose,
}: RoomGalleryLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const total = images.length;

  const previous = useCallback(() => {
    onChange((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onChange]);

  const next = useCallback(() => {
    onChange((activeIndex + 1) % total);
  }, [activeIndex, total, onChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && total > 1) next();
      if (event.key === "ArrowLeft" && total > 1) previous();
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, previous, onClose, total]);

  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Oda fotoğraf galerisi"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || total <= 1) return;

        const endX = event.changedTouches[0]?.clientX;
        if (endX === undefined) return;

        const difference = touchStartX.current - endX;

        if (Math.abs(difference) > 50) {
          if (difference > 0) next();
          else previous();
        }

        touchStartX.current = null;
      }}
    >
      {/* Top toolbar */}
      <div className="absolute inset-x-0 top-0 z-20 flex h-16 items-center justify-between px-5 text-white md:px-10">
        <span className="text-sm font-light tracking-[0.15em]">
          {activeIndex + 1} / {total}
        </span>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Galeriyi kapat"
          className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-60"
        >
          <IoClose size={26} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main image */}
      <div className="relative h-[78dvh] w-[92vw] max-w-[1600px]">
        <Image
  key={activeImage.id}
  src={activeImage.src}
  alt={activeImage.alt}
  fill
  priority
  sizes="92vw"
  quality={90}
  className="object-contain"
/>
      </div>

      {/* Navigation */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label="Önceki fotoğraf"
            className="absolute top-1/2 left-2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-60 md:left-6"
          >
            <FaChevronLeft size={34} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Sonraki fotoğraf"
            className="absolute top-1/2 right-2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-opacity hover:opacity-60 md:right-6"
          >
            <FaChevronRight size={34} strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Bottom image label */}
      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center text-xs font-light tracking-[0.12em] text-white/75 md:bottom-8">
        {activeImage.alt}
      </div>
    </div>
  );
}

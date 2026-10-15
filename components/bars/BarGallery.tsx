
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import RoomGalleryLightbox from "@/components/rooms/RoomGalleryLightbox";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type BarGalleryProps = {
  images: GalleryImage[];
  columns?: 4 | 7;
};

export default function BarGallery({
  images,
  columns = 4,
}: BarGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  // Observe the entire gallery once
  useEffect(() => {
    const container = containerRef.current;
    if (!container || images.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(container);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        ref={containerRef}
        className={`grid gap-2 ${
          columns === 7
            ? "grid-cols-3 md:grid-cols-5 lg:grid-cols-7"
            : "grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={image.alt}
            className="
              group relative block aspect-[4/3] w-full
              cursor-zoom-in overflow-hidden
            "
          >
            {/* Image scales from the center of its own cell */}
            
<div
  className={`
    absolute inset-0 overflow-hidden
    transition-[clip-path,opacity]
    duration-[1800ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    motion-reduce:transition-none
    ${
      isVisible
  ? "[clip-path:inset(0%_0%_0%_0%)] opacity-100"
  : "[clip-path:inset(35%_35%_35%_35%)] opacity-100 motion-reduce:[clip-path:inset(0%_0%_0%_0%)]"
    }
  `}
>
  <Image
    src={image.src}
    alt={image.alt}
    fill
    sizes={
      columns === 7
        ? "(max-width: 767px) 33vw, (max-width: 1023px) 20vw, 8vw"
        : "(max-width: 1023px) 33vw, 16vw"
    }
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/45"
  />
</div>

          </button>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      {activeIndex !== null && (
        <RoomGalleryLightbox
          images={images}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}

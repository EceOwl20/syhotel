
"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

import RoomGalleryLightbox from "@/components/rooms/RoomGalleryLightbox";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type BarGalleryProps = {
  images: GalleryImage[];
};

export default function BarGallery({
  images,
}: BarGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={image.alt}
            className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1023px) 33vw, 16vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/45"
            />
          </button>
        ))}
      </div>

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

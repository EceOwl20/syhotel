
"use client";

import { useCallback, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import RoomGalleryLightbox from "./RoomGalleryLightbox";

export type GalleryImage = {
  id: string | number;
  src: string | StaticImageData;
  alt: string;
};

type RoomGalleryProps = {
  images: GalleryImage[];
  columns?: 3 | 4 | 5 | 6;
};

const columnClasses = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

export default function RoomGallery({
  images,
  columns = 6,
}: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={`
          grid grid-cols-2 gap-2
          md:grid-cols-3 mx-auto w-[90%]
          ${columnClasses[columns]}
        `}
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${image.alt} fotoğrafını büyüt`}
            className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 17vw"
              className="
                object-cover
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
              "
            />

            {/* Hover dark overlay */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                bg-black/0
                transition-colors
                duration-500
                ease-in-out
                group-hover:bg-black/45
              "
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

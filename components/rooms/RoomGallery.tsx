"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

function GalleryItem({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    if (!("IntersectionObserver" in window)) {
      const fallbackTimer = setTimeout(() => {
        setIsVisible(true);
      }, 0);

      return () => clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(item);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(item);

    return () => observer.disconnect();
  }, []);

  const shouldReveal = loaded && isVisible;

  return (
    <button
      ref={itemRef}
      type="button"
      onClick={onClick}
      aria-label={`${image.alt} fotoğrafını büyüt`}
      className="
        group relative block
        aspect-[3/2] w-full
        cursor-zoom-in overflow-hidden
        text-left
      "
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 767px) 33vw, (max-width: 1023px) 25vw, 17vw"
        onLoad={() => setLoaded(true)}
        className={`
          object-cover
          origin-top
          transition-[filter,transform]
          duration-[800ms]
          [transition-timing-function:ease]

          motion-reduce:transform-none
          motion-reduce:filter-none
          motion-reduce:transition-none

          ${
            shouldReveal
              ? "[filter:opacity(1)] [transform:scale(1)]"
              : "[filter:opacity(0)] [transform:scale(0.5)]"
          }
        `}
      />

      {/* Hover overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-black/0
          transition-colors duration-[800ms] [transition-timing-function:ease]
          group-hover:bg-black/45
          group-focus-visible:bg-black/45
        "
      />
    </button>
  );
}

export default function RoomGallery({
  images,
  columns = 6,
}: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={`
          mx-auto grid w-[99%] max-w-[1030px]
          grid-cols-3 gap-[10px]
          md:grid-cols-4
          lg:w-full
          ${columnClasses[columns]}
        `}
      >
        {images.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            onClick={() => setActiveIndex(index)}
          />
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

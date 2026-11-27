
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { getImageProps, type StaticImageData } from "next/image";

const subscribeToHydration = () => () => {};
const getClientHydrationState = () => true;
const getServerHydrationState = () => false;

type Slide = {
  src: string | StaticImageData;
  mobileSrc?: string | StaticImageData;
  alt: string;
};

type MainBannerProps = {
  slides?: Slide[];
};

export default function MainBanner({ slides = [] }: MainBannerProps) {
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationState,
    getServerHydrationState,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([0]);

  useEffect(() => {
    if (!isHydrated || slides.length <= 1 || pendingIndex !== null) return;

    const timeout = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % slides.length;

      if (loadedIndexes.includes(nextIndex)) {
        setActiveIndex(nextIndex);
        return;
      }

      setLoadedIndexes((current) =>
        current.includes(nextIndex) ? current : [...current, nextIndex],
      );
      setPendingIndex(nextIndex);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isHydrated, loadedIndexes, pendingIndex, slides.length]);

  // Prevent an invalid index if the slide count changes
  const currentIndex = slides.length > 0 ? activeIndex % slides.length : 0;

  if (slides.length === 0) return null;

  return (
    <section
      aria-label="SY Hotels Gallery"
      className="relative h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => {
        const shouldRender =
          index === 0 || (isHydrated && loadedIndexes.includes(index));

        if (!shouldRender) return null;

        const isFirstSlide = index === 0;
        const imageLoading = isFirstSlide ? "eager" : "lazy";
        const fetchPriority = isFirstSlide ? "high" : "auto";
        const commonImageProps = {
          alt: slide.alt,
          fill: true,
          sizes: "100vw",
          loading: imageLoading,
          fetchPriority,
        } as const;
        const {
          props: { srcSet: desktopSrcSet, ...desktopImage },
        } = getImageProps({
          ...commonImageProps,
          src: slide.src,
        });
        const mobileSrcSet = slide.mobileSrc
          ? getImageProps({
              ...commonImageProps,
              src: slide.mobileSrc,
            }).props.srcSet
          : undefined;

        return (
          <div
            key={typeof slide.src === "string" ? slide.src : slide.src.src}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            <picture>
              {mobileSrcSet && (
                <source
                  media="(max-width: 767px)"
                  srcSet={mobileSrcSet}
                  sizes="100vw"
                />
              )}
              <img
                {...desktopImage}
                srcSet={desktopSrcSet}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover"
                onLoad={() => {
                  if (pendingIndex !== index) return;

                  setActiveIndex(index);
                  setPendingIndex(null);
                }}
              />
            </picture>
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-0 z-20" />
    </section>
  );
}

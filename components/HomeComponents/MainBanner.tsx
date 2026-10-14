
"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type Slide = {
  src: string | StaticImageData;
  alt: string;
};

type MainBannerProps = {
  slides?: Slide[];
};

export default function MainBanner({
  slides = [],
}: MainBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  // Prevent an invalid index if the slide count changes
  const currentIndex =
    slides.length > 0 ? activeIndex % slides.length : 0;

  if (slides.length === 0) return null;

  return (
    <section
      aria-label="SY Hotels Gallery"
      className="relative h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={
            typeof slide.src === "string"
              ? slide.src
              : slide.src.src
          }
          aria-hidden={index !== currentIndex}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === currentIndex
              ? "z-10 opacity-100"
              : "z-0 opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-20" />
    </section>
  );
}

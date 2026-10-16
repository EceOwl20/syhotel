"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type BackgroundSlideshowProps = {
  images: Array<StaticImageData | string>;
  interval?: number;
  transitionDuration?: number;
};

export default function BackgroundSlideshow({
  images,
  interval = 5000,
  transitionDuration = 500,
}: BackgroundSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {images.map((image, index) => (
        <Image
          key={typeof image === "string" ? image : image.src}
          src={image}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover transition-opacity ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${transitionDuration}ms` }}
        />
      ))}
    </div>
  );
}

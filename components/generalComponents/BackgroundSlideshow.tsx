"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [images.length, interval, isVisible]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0"
    >
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

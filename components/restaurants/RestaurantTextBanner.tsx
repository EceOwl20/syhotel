"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type RestaurantTextBannerProps = {
  image: string;
  title: string;
  variant?: "default" | "restaurant";
};

export default function RestaurantTextBanner({
  image,
  title,
  variant = "default",
}: RestaurantTextBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isRestaurantVariant = variant === "restaurant";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden ${
        isRestaurantVariant
          ? "h-[calc(40vh+60px)] md:h-[450px]"
          : "h-[260px] sm:h-[340px] lg:h-[460px]"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      {/* Banner text */}
      <div
        className={`relative z-10 mx-auto flex h-full w-full items-center ${
          isRestaurantVariant
            ? "max-w-[1200px]"
            : "max-w-[1800px] px-6 md:px-12 lg:px-20"
        }`}
      >
        <h3
  className={`
    ${
      isRestaurantVariant
        ? "ml-3 md:ml-0 w-[95%] text-[24px] font-light tracking-normal text-[#eee1d3] md:w-[60%] md:text-[52px]"
        : "max-w-[1100px] text-[24px] font-extralight tracking-[0.02em] text-white sm:text-[32px] md:text-[36px] lg:text-[44px]"
    }
    leading-[1.2]

    transform-gpu
    transition-[transform,opacity]
    duration-[2200ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]

    motion-reduce:transform-none
    motion-reduce:opacity-100
    motion-reduce:transition-none

    ${
  isVisible
    ? "translate-y-0 opacity-100"
    : "-translate-y-[140px] opacity-0"
}
  `}
>
  {title}
</h3>
      </div>
    </section>
  );
}

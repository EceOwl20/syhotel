"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type RestaurantTextBannerProps = {
  image: string;
  title: string;
};

export default function RestaurantTextBanner({
  image,
  title,
}: RestaurantTextBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[460px]"
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
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] items-center px-6 md:px-12 lg:px-20">
        <h2
  className={`
    max-w-[1100px]
    text-[30px] leading-[1.2]
    font-extralight tracking-[0.02em] text-white
    sm:text-[40px] lg:text-[52px]

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
</h2>
      </div>
    </section>
  );
}
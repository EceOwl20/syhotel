
"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RoomRowRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function RoomRowReveal({
  children,
  className = "",
}: RoomRowRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
  <div
    ref={ref}
    className={`
      ${className}
      motion-safe:transition-[opacity,transform]
      motion-safe:duration-400ms

      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "motion-safe:opacity-0 motion-safe:translate-y-28"
      }
    `}
  >
    {children}
  </div>
);
}

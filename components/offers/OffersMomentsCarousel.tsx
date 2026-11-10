"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export type MomentSlide = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
};

type Props = {
  slides: MomentSlide[];
  eyebrow: string;
  heading: string;
  description: string;
};

export default function OffersMomentsCarousel({
  slides,
  eyebrow,
  heading,
  description,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const count = slides.length;

  useEffect(() => {
    if (paused || count <= 1) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, count]);

  const next = () => {
    setActive((prev) => (prev + 1) % count);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + count) % count);
  };

  const getOffset = (index: number) => {
    let offset = index - active;

    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    return offset;
  };

  if (!count) return null;

  return (
    <section
      className="relative overflow-hidden bg-[#eee9e3] py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-20 h-[450px] w-[450px] rounded-full bg-[#cdb3a4]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#b9876b]/10 blur-[100px]" />

      {/* HEADER */}
      <div className="relative z-10 mx-auto mb-8 max-w-[800px] px-5 text-center md:mb-12">

        <span className="text-[11px] font-light uppercase tracking-[0.35em] text-[#948475]">
          {eyebrow}
        </span>

        <h2 className="mt-2 text-4xl font-extralight uppercase tracking-[0.08em] text-[#745444] md:text-5xl">
          {heading}
        </h2>

        <div className="mx-auto my-5 h-px w-16 bg-[#b9876b]" />

        <p className="text-sm font-light leading-8 text-[#8e7d6c] md:text-base">
          {description}
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative h-[360px] w-full select-none sm:h-[440px] lg:h-[540px]"
        onTouchStart={(e) => {
          setTouchStart(e.touches[0].clientX);
        }}
        onTouchEnd={(e) => {
          if (touchStart === null) return;

          const diff = touchStart - e.changedTouches[0].clientX;

          if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else previous();
          }

          setTouchStart(null);
        }}
      >
        {slides.map((slide, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;
          const distance = Math.abs(offset);

          return (
            <div
              key={slide.id}
              className="absolute left-1/2 top-1/2 h-[310px] w-[78vw] max-w-[760px] overflow-hidden bg-[#cdb3a4] shadow-2xl transition-[transform,opacity] duration-1000 ease-in-out sm:h-[390px] sm:w-[65vw] lg:h-[490px] lg:w-[55vw]"
              style={{
                transform: `
                  translate(
                    calc(-50% + ${offset * 72}%),
                    -50%
                  )
                  scale(${isActive ? 1 : 0.79})
                `,
                opacity: distance > 1 ? 0 : isActive ? 1 : 0.65,
                zIndex: isActive ? 10 : 5 - distance,
                pointerEvents: distance > 1 ? "none" : "auto",
                visibility: distance > 1 ? "hidden" : "visible",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 65vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* IMAGE CONTENT */}
              <div
                className={`absolute bottom-0 left-0 right-0 px-7 pb-9 text-white transition-all duration-700 md:px-12 md:pb-12 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/80">
                  SY HOTELS BELEK
                </span>

                <h3 className="mt-4 text-3xl font-extralight uppercase tracking-[0.05em] md:text-5xl">
                  {slide.title}
                </h3>

                <p className="mt-4 max-w-[450px] text-sm font-light leading-7 text-white/85">
                  {slide.subtitle}
                </p>
              </div>

              {/* CARD NUMBER */}
              <span className="absolute right-6 top-6 text-[12px] font-light tracking-widest text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="relative z-20 mt-12 flex flex-col items-center gap-7">

        <div className="flex items-center gap-8">

          <button
            type="button"
            onClick={previous}
            disabled={count <= 1}
            aria-label="Previous slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#948475]/50 text-[#745444] transition-all duration-300 hover:border-[#745444] hover:bg-[#745444] hover:text-white disabled:opacity-40"
          >
            <FiArrowLeft size={19} />
          </button>

          <span className="min-w-16 text-center text-sm font-light tracking-[0.18em] text-[#745444]">
            {String(active + 1).padStart(2, "0")}
            <span className="mx-2 text-[#948475]">/</span>
            {String(count).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={next}
            disabled={count <= 1}
            aria-label="Next slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#948475]/50 text-[#745444] transition-all duration-300 hover:border-[#745444] hover:bg-[#745444] hover:text-white disabled:opacity-40"
          >
            <FiArrowRight size={19} />
          </button>
        </div>

        {/* PROGRESS INDICATORS */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              className={`h-[3px] transition-all duration-500 ${
                index === active
                  ? "w-12 bg-[#745444]"
                  : "w-6 bg-[#948475]/30 hover:bg-[#948475]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
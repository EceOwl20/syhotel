"use client";

import type { ComponentProps } from "react";
import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { Link } from "@/i18n/navigation";

type RelatedItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: string | StaticImageData;
  href: string;
};

type RelatedContentProps = {
  title: string;
  items: RelatedItem[];
  previousLabel: string;
  nextLabel: string;
};

export default function RelatedContent({
  title,
  items,
  previousLabel,
  nextLabel,
}: RelatedContentProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  if (items.length === 0) return null;

  return (
    <section className="w-full bg-[#f0eae5] px-3 py-14 text-[#8b7c6a] md:px-8 md:py-20">
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-8 flex items-center justify-between gap-5 md:mb-12">
          <h2 className="text-[28px] leading-[1.2] font-extralight tracking-[0.04em] md:text-[40px]">
            {title}
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label={previousLabel}
              className="flex size-10 items-center justify-center border border-[#8b7c6a]/60 transition-colors duration-300 hover:bg-[#8b7c6a] hover:text-white focus-visible:bg-[#8b7c6a] focus-visible:text-white md:size-12"
            >
              <IoChevronBack aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label={nextLabel}
              className="flex size-10 items-center justify-center border border-[#8b7c6a]/60 transition-colors duration-300 hover:bg-[#8b7c6a] hover:text-white focus-visible:bg-[#8b7c6a] focus-visible:text-white md:size-12"
            >
              <IoChevronForward aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href as ComponentProps<typeof Link>["href"]}
              className="group relative aspect-[4/3] min-w-[84%] snap-start overflow-hidden bg-[#8b7c6a] sm:min-w-[48%] lg:min-w-[calc((100%-3rem)/3)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) 84vw, (max-width: 1023px) 48vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-85 group-focus-visible:opacity-85"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-right text-white md:p-8">
                <h3 className="text-[20px] leading-[1.25] font-light tracking-[0.03em] md:text-[27px]">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mt-1 text-[12px] tracking-[0.12em] uppercase md:text-[13px]">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

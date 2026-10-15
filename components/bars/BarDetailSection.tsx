
import BarGallery from "./BarGallery";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type BarDetailSectionProps = {
  title: string;
  subtitle?: string;
  description: string;
  images: GalleryImage[];
};

export default function BarDetailSection({
  title,
  subtitle,
  description,
  images,
}: BarDetailSectionProps) {
  return (
    <section className="w-full bg-[#f7f7f5] px-3 py-16 text-[#948475] md:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-0">

        {/* LEFT: Text */}
        <div className="flex flex-col items-center text-center lg:items-end lg:pr-6 lg:text-right">
          <div className="max-w-[850px]">
            <h2 className="text-[32px] font-extralight leading-[1.2] tracking-[0.04em] md:text-[40px]">
              {title}
            </h2>

            {subtitle && (
              <h3 className="mt-1 text-[22px] font-extralight leading-[1.3] md:text-[28px]">
                {subtitle}
              </h3>
            )}

            <p className="mt-7 text-[14px] font-light leading-[1.7] md:text-[16px]">
              {description}
            </p>
          </div>
        </div>

        {/* RIGHT: Gallery */}
        <div className="min-w-0 lg:border-l lg:border-[#948475] lg:pl-6">
          <BarGallery images={images} />
        </div>

      </div>
    </section>
  );
}

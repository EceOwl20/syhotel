
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
    <section className="w-full bg-[#f7f7f5] px-3 py-8 md:py-12 text-[#7a7a7a] md:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-0">

        {/* LEFT: Text */}
        <div className="flex flex-col items-center text-center lg:items-end lg:pr-6 lg:text-right">
          <div className="max-w-[850px]">
            <div
              className="mb-2 hidden items-center justify-center gap-5 md:flex lg:justify-end"
              aria-hidden="true"
            >
              <i className="flaticon-cocktail-1 text-[30px]" />
              <i className="flaticon-room-service-2 text-[30px]" />
              <i className="flaticon-breakfast-4 text-[30px]" />
            </div>

            <h2 className="text-[25px] font-extralight leading-[1.2] tracking-[0.04em] md:text-[32px] lg:text-[36px]">
              {title}
            </h2>

            {subtitle && (
              <h3 className="mt-1 text-[20px] lg:text-[24px] font-extralight leading-[1.3] md:text-[28px]">
                {subtitle}
              </h3>
            )}

            <p className="mt-7 text-[14px] font-light leading-[1.7] md:text-[16px] lg:text-[14px]">
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

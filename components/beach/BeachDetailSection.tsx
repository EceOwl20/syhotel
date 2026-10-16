
import BarGallery from "@/components/bars/BarGallery";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type BeachDetailSectionProps = {
  title: string;
  description: string;
  images: GalleryImage[];
};

export default function BeachDetailSection({
  title,
  description,
  images,
}: BeachDetailSectionProps) {
  return (
    <section className="w-full px-5 py-10 md:py-16 text-[#b47c56] md:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-5">

        {/* LEFT: TEXT */}
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
          <h1 className="text-[25px] font-extralight tracking-[0.1em] md:text-[32px] lg:text-[40px]">
            {title}
          </h1>

          <p className="mt-5 max-w-[800px] text-[14px] leading-[1.8] font-light md:text-[15px]">
            {description}
          </p>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden h-full min-h-[400px] w-px bg-[#b47c56]/25 lg:block" />

        {/* RIGHT: IMAGE GALLERY */}
        <div className="min-w-0">
          <BarGallery images={images} columns={4} />
        </div>

      </div>
    </section>
  );
}

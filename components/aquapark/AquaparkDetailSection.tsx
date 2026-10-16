
import BarGallery from "@/components/bars/BarGallery";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type AquaparkDetailSectionProps = {
  title: string;
  description: string;
  slideDetails: string[];
  images: GalleryImage[];
  backgroundImage?: string;
};

export default function AquaparkDetailSection({
  title,
  description,
  slideDetails,
  images,
  backgroundImage = "/images/backgrounds/stone-texture.webp",
}: AquaparkDetailSectionProps) {
  return (
    <section
      className="w-full bg-[#b6a095] bg-cover bg-center px-5 py-16 text-white md:px-8 md:py-20"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] lg:gap-5">

        {/* LEFT: TITLE, DESCRIPTION AND SLIDE DETAILS */}
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
          <h1 className="text-[30px] font-extralight leading-tight tracking-[0.025em] md:text-[38px]">
            {title}
          </h1>

          <p className="mt-5 max-w-[800px] text-[14px] leading-[1.8] font-light md:text-[15px]">
            {description}
          </p>

          {/* Slide specifications */}
          <ul className="mt-5 space-y-1 text-[14px] leading-[1.6] font-light md:text-[15px]">
            {slideDetails.map((detail, index) => (
              <li key={`${index}-${detail}`}>
                <span aria-hidden="true">· </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden h-full min-h-[400px] w-px bg-white/65 lg:block" />

        {/* RIGHT: GALLERY */}
        <div className="min-w-0">
          <BarGallery images={images} columns={4} />
        </div>
      </div>
    </section>
  );
}

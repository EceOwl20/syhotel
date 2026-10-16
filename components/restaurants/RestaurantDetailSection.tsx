import BarGallery from "@/components/bars/BarGallery";
import type { GalleryImage } from "@/components/rooms/RoomGallery";

type RestaurantDetailSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  images: GalleryImage[];
  buffetImages?: GalleryImage[];
  buffetTitle?: string;
  background: "stone" | "white";
};

export default function RestaurantDetailSection({
  title,
  subtitle,
  description,
  images,
  buffetImages = [],
  buffetTitle,
  background,
}: RestaurantDetailSectionProps) {
  const isStone = background === "stone";

  return (
    <section
      className={`relative w-full px-3 py-16 md:px-8 lg:py-20 ${
        isStone ? "bg-[#bba79d] text-white" : "bg-[#f7f7f5] text-[#b9876b]"
      }`}
      style={
        isStone
          ? {
              backgroundImage: "url('/images/bg-pattern.jpg')",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-0">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center text-center lg:items-end lg:pr-6 lg:text-right">
          
<div className="max-w-[850px]">

  {/* Restaurant icons */}
  <div
    className="mb-2 flex items-center justify-center gap-5 lg:justify-end"
    aria-hidden="true"
  >
    <i className="flaticon-cocktail-1 text-[30px]" />
    <i className="flaticon-room-service-2 text-[30px]" />
    <i className="flaticon-breakfast-4 text-[30px]" />
  </div>

  {/* Restaurant title */}
  <span className="text-[25px] md:text-[32px] leading-[1.2] font-extralight tracking-[0.06em] lg:text-[40px]">
    {title}
  </span>

  {/* Subtitle */}
  <h2 className="mt-1 tetx-[20px] md:text-[22px] leading-[1.3] font-extralight lg:text-[28px]">
    {subtitle}
  </h2>

  {/* Description */}
  <p className="mt-5 lg:mt-7 text-[14px] leading-[1.7] font-light md:text-[16px]">
    {description}
  </p>

</div>

        </div>

        {/* RIGHT COLUMN */}
        <div
          className={`min-w-0 lg:border-l lg:pl-6 ${
            isStone ? "lg:border-white/70" : "lg:border-[#948475]"
          }`}
        >
          {/* Main gallery */}
          <BarGallery images={images} columns={4} />

          {/* Optional buffet gallery */}
          {/* Open Buffet gallery */}
          {buffetImages.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-5 text-[20px] font-extralight tracking-[0.04em] md:text-[26px] text-center lg:text-start text-[#EEE1D3]">
                {buffetTitle}
              </h3>

              <BarGallery images={buffetImages} columns={7} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

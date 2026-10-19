
import { getTranslations } from "next-intl/server";
import type { RoomDetail } from "@/data/roomTypes";
import RoomGallery from "./RoomGallery";
import RoomServices from "./RoomServices";
import RoomFeatures from "./RoomFeatures";
import MainBanner from "../HomeComponents/MainBanner";

type Props = {
  room: RoomDetail;
};

export default async function RoomDetailSection({ room }: Props) {
  const bannerImages = room.gallery.slice(
    0,
    room.bannerImageCount ?? room.gallery.length,
  );

  const slides = bannerImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

   const t = await getTranslations("Rooms");

  return (
    <main className="w-full bg-[#f7f7f5]">

      {/* Dynamic room banner */}
      {slides.length > 0 && (
        <MainBanner slides={slides} />
      )}

      {/* Room header */}
      <section className="mx-auto max-w-[1800px] px-0 pt-7 md:px-8 lg:pt-16">

        <div className="mx-auto mb-12 max-w-[1030px] px-[3px] text-center text-[#7A7A7A] md:px-0">

          <p className="mb-4 lg:mb-6 text-[12px] tracking-[0.15em]"> 
            {room.subtitle}
          </p>

          <h2 className="text-[26px] leading-[1.35] font-extralight tracking-[0.04em] md:text-[40px] lg:text-[44px]">
            {room.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[1030px] text-[14px] leading-[1.66] font-normal md:text-[16px] lg:mt-7">
            {room.description}
          </p>

        </div>

        {/* Dynamic room features */}
        <RoomFeatures features={room.features} />

        {/* Dynamic gallery */}
        <RoomGallery
          images={room.gallery}
          columns={6}
        />

      </section>

      {/* Room services */}
     <RoomServices
  freeServices={room.freeServices}
  paidServices={room.paidServices}
  freeTitle={t("freeTitle")}
  paidTitle={t("paidTitle")}
/>

    </main>
  );
}

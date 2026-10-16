
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
  const slides = room.gallery.map((image) => ({
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
      <section className="mx-auto max-w-[1800px] px-5 pt-7 lg:pt-16 md:px-8">

        <div className="mb-12 text-center text-[#8B7C6A]">

          <p className="mb-4 lg:mb-6 text-[12px] tracking-[0.15em]"> 
            {room.subtitle}
          </p>

          <h1 className="text-[26px] font-extralight tracking-[0.04em] md:text-[32px] lg:text-[36px]">
            {room.title}
          </h1>

          <p className="mx-auto mt-4 lg:mt-7 max-w-[1500px] text-[14px] lg:text-[16px] font-light leading-[1.8]">
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

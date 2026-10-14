
import type { RoomDetail } from "@/data/rooms";
import RoomGallery from "./RoomGallery";
import RoomServices from "./RoomServices";
import RoomFeatures from "./RoomFeatures";
import MainBanner from "../HomeComponents/MainBanner";

type Props = {
  room: RoomDetail;
};

export default function RoomDetailSection({ room }: Props) {
  const slides = room.gallery.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <main className="w-full bg-[#f7f7f5]">

      {/* Dynamic room banner */}
      {slides.length > 0 && (
        <MainBanner slides={slides} />
      )}

      {/* Room header */}
      <section className="mx-auto max-w-[1800px] px-5 pt-16 md:px-8">

        <div className="mb-12 text-center text-[#948475]">

          <p className="mb-6 text-[12px] tracking-[0.15em]">
            {room.subtitle}
          </p>

          <h1 className="text-[34px] font-extralight tracking-[0.04em] md:text-[46px]">
            {room.title}
          </h1>

          <p className="mx-auto mt-7 max-w-[1500px] text-[16px] font-light leading-[1.8]">
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
      />

    </main>
  );
}

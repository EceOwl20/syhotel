
import RoomCard, { type Room } from "./RoomCard";
import Reveal from "./Reveal";

type RoomsSectionProps = {
  rooms: Room[];
  title?: string;
  description?: string;
  discoverText?: string;
};

export default function RoomsSection({
  rooms,
  title = "KONAKLAMA",
  description,
  discoverText = "Keşfet",
}: RoomsSectionProps) {
  return (
    <section className="w-full px-5 py-2 md:px-8 ">
      
      <div className="mx-auto max-w-[1800px]">

        {/* Section heading */}
        <div className="mb-14 flex flex-col items-center text-center text-[#8B7C6A]">
          <h2 className="text-[26px] font-extralight tracking-[0.04em] md:text-[32px] lg:text-[40px]">
            {title}
          </h2>

          {description && (
            <p className="mt-6 max-w-[1500px] text-[14px] leading-[1.7] font-light md:text-[16px]">
              {description}
            </p>
          )}
        </div>

        {/* Dynamic room grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-10">
  {rooms.map((room, index) => (
    <Reveal key={room.id} delay={0}>
      <RoomCard room={room} discoverText={discoverText} />
    </Reveal>
  ))}
</div>

      </div>
    </section>
  );
}

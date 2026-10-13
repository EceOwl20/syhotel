
import RoomCard, { type Room } from "./RoomCard";

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
        <div className="mb-14 flex flex-col items-center text-center text-[#948475]">
          <h2 className="text-[32px] font-extralight tracking-[0.04em] md:text-[42px]">
            {title}
          </h2>

          {description && (
            <p className="mt-6 max-w-[1500px] text-[16px] leading-[1.7] font-light md:text-[18px]">
              {description}
            </p>
          )}
        </div>

        {/* Dynamic room grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              discoverText={discoverText}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

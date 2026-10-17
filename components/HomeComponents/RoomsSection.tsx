
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
  const roomColumns = Array.from({ length: 3 }, (_, columnIndex) =>
    rooms.filter((_, roomIndex) => roomIndex % 3 === columnIndex),
  );

  return (
    <section className="w-full px-[3px] py-2 md:px-8">
      
      <div className="mx-auto max-w-[1800px]">

        {/* Section heading */}
        <div className="mb-14 flex flex-col items-center text-center text-[#8B7C6A]">
          <h2 className="text-[30px] leading-[1.2] font-extralight md:text-[40px]">
            {title}
          </h2>

          {description && (
            <p className="w-[95%] mt-6 max-w-[1500px] text-[14px] leading-[1.66] font-normal md:text-[16px]">
              {description}
            </p>
          )}
        </div>

        {/* Dynamic room grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-10">
          {roomColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex min-w-0 flex-col gap-6 lg:gap-10"
            >
              {column.map((room) => (
                <Reveal key={room.id} delay={0}>
                  <RoomCard room={room} discoverText={discoverText} />
                </Reveal>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

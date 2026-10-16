
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type Room = {
  id: string;
  title: string;
  area: number;
  image: StaticImageData | string;
  href: string;
};

type RoomCardProps = {
  room: Room;
  discoverText?: string;
};

export default function RoomCard({
  room,
  discoverText = "Keşfet",
}: RoomCardProps) {
  return (
    <Link
      href={room.href}
      aria-label={`${room.title} - ${discoverText}`}
      className="group relative block aspect-[1/1] w-full overflow-hidden bg-[#8e7d6c]"
    >
      {/* Background image */}
      <Image
        src={room.image}
        alt={room.title}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
      />

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-black/10 to-transparent"
      />

      {/* Inner frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[10px] border border-white/75"
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-8 pb-10 text-white md:px-10">
        <div className="flex flex-col items-end transition-transform duration-500 ease-in-out group-hover:-translate-y-5 group-focus-visible:-translate-y-5">

          <h3 className="w-full text-right text-[18px] sm:text-[20px] leading-[1.3] font-light lg:text-[30px]">
            {room.title}
          </h3>

          <span className="mt-3 text-[15px] font-light">
            {room.area} m²
          </span>
        </div>

        {/* Discover text */}
        <span
          className="absolute right-8 bottom-5 translate-y-3 text-[13px] font-normal opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:right-10 max-md:translate-y-0 max-md:opacity-100"
        >
          {discoverText}
        </span>
      </div>
    </Link>
  );
}


export type HomeRoom = {
  id: string;
  area: number;
  image: string;
  href: string;
};

export const rooms: HomeRoom[] = [
  {
    id: "deluxe-standard",
    area: 23,
    image: "/images/rooms/deluxeRoom/deluxe-rooms-2.webp",
    href: "/rooms/deluxe-rooms",
  },
  {
    id: "deluxe-family",
    area: 43,
    image: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-2.webp",
    href: "/rooms/deluxe-family-rooms",
  },
  {
    id: "deluxe-superior",
    area: 41,
    image: "/images/rooms/deluxeSuperiorRoom/deluxe-superior-rooms-1.webp",
    href: "/rooms/deluxe-superior-rooms",
  },
  {
    id: "deluxe-swim-up-aile",
    area: 57,
    image: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-1.webp",
    href: "/rooms/deluxe-swimup-family-rooms",
  },
  {
    id: "deluxe-swim-up",
    area: 23,
    image: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-1.webp",
    href: "/rooms/deluxe-swimup-rooms",
  },
  {
    id: "deluxe-sig-havuzlu",
    area: 23,
    image: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-2.webp",
    href: "/rooms/deluxe-shallow-pool-rooms",
  },
  {
    id: "deluxe-dubleks-aile-standard",
    area: 39,
    image: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-1.webp",
    href: "/rooms/deluxe-duplex-family-rooms",
  },
  {
    id: "deluxe-engelli",
    area: 23,
    image: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-1.webp",
    href: "/rooms/deluxe-handicap-rooms",
  },
];

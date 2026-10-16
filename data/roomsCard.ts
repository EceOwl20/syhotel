
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
    image: "/images/homepage/rooms/deluxe-rooms-2.webp",
    href: "/rooms/deluxe-rooms",
  },
  {
    id: "deluxe-family",
    area: 43,
    image: "/images/homepage/rooms/deluxe-family-rooms-2.webp",
    href: "/rooms/deluxe-family-rooms",
  },
  {
    id: "deluxe-superior",
    area: 41,
    image: "/images/homepage/rooms/deluxe-superior-rooms-5.webp",
    href: "/rooms/deluxe-superior-rooms",
  },
  {
    id: "deluxe-swim-up-aile",
    area: 57,
    image: "/images/homepage/rooms/deluxe-family-swimup-rooms.webp",
    href: "/rooms/deluxe-swimup-family-rooms",
  },
  {
    id: "deluxe-swim-up",
    area: 23,
    image: "/images/homepage/rooms/deluxe-swimup-rooms-6.webp",
    href: "/rooms/deluxe-swimup-rooms",
  },
  {
    id: "deluxe-sig-havuzlu",
    area: 23,
    image: "/images/homepage/rooms/deluxe-shallow-pool-rooms-6.webp",
    href: "/rooms/deluxe-shallow-pool-rooms",
  },
  {
    id: "deluxe-dubleks-aile-standard",
    area: 39,
    image: "/images/homepage/rooms/deluxe-family-dublex-rooms.webp",
    href: "/rooms/deluxe-duplex-family-rooms",
  },
  {
    id: "deluxe-engelli",
    area: 23,
    image: "/images/homepage/rooms/deluxe-engelli-odalar.webp",
    href: "/rooms/deluxe-handicap-rooms",
  },
];

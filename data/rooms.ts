
import type { GalleryImage } from "@/components/rooms/RoomGallery";
import type { RoomServiceId } from "./roomServices";

export type RoomFeatureConfig = {
  id: string;
  icon: string;
};

export type RoomConfig = {
  slug: string;
  features: RoomFeatureConfig[];
  gallery: GalleryImage[];
  freeServices: RoomServiceId[];
  paidServices: RoomServiceId[];
};

export const rooms: RoomConfig[] = [
  {
    slug: "deluxe",

    features: [
      { id: "area", icon: "flaticon-area" },
      { id: "guests", icon: "flaticon-user-2" },
      { id: "bed", icon: "flaticon-bed-5" },
      { id: "sofa", icon: "flaticon-sofa" },
      { id: "bath", icon: "flaticon-shower-2" },
    ],

    gallery: [
      {
        id: "deluxe-1",
        src: "/images/rooms/deluxe-rooms-1.webp",
        alt: "Deluxe room - 1",
      },
      {
        id: "deluxe-2",
        src: "/images/rooms/deluxe-rooms-2.webp",
        alt: "Deluxe room - 2",
      },
      {
        id: "deluxe-3",
        src: "/images/rooms/deluxe-rooms-3.webp",
        alt: "Deluxe room - 3",
      },
      {
        id: "deluxe-4",
        src: "/images/rooms/deluxe-rooms-4.webp",
        alt: "Deluxe room - 4",
      },
      {
        id: "deluxe-5",
        src: "/images/rooms/deluxe-rooms-5.webp",
        alt: "Deluxe room - 5",
      },
      {
        id: "deluxe-6",
        src: "/images/rooms/deluxe-rooms-6.webp",
        alt: "Deluxe room - 6",
      },
    ],

    freeServices: [
      "wifi",
      "minibar",
      "housekeeping",
      "hairdryer",
      "bathroom",
      "balcony",
      "amenities",
      "safe",
      "tv",
      "coffee",
      "airConditioner",
      "mirror",
      "floor",
    ],

    paidServices: [
      "roomService",
      "phone",
      "laundry",
    ],
  },
];


import type { GalleryImage } from "@/components/rooms/RoomGallery";
import type { RoomServiceId } from "./roomServices";

export type RoomFeatureConfig = {
  id: string;
  icon: string;
};

export type RoomConfig = {
  slug: string;
  bannerImageCount?: number;
  features: RoomFeatureConfig[];
  gallery: GalleryImage[];
  freeServices: RoomServiceId[];
  paidServices: RoomServiceId[];
};

export const rooms: RoomConfig[] = [
  {
    slug: "deluxe-rooms",
    bannerImageCount: 6,

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
      {
        id: "deluxe-7",
        src: "/images/rooms/deluxe-rooms-7-300x169.webp",
        alt: "Deluxe room - 7",
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


  {
    slug: "deluxe-family-rooms",

    features: [
      { id: "area", icon: "flaticon-area" },
      { id: "guests", icon: "flaticon-user-2" },
      { id: "doubleBed", icon: "flaticon-bed-5" },
      { id: "singleBed", icon: "flaticon-bed-9" },
      { id: "rooms", icon: "flaticon-maximize" },
      { id: "balconies", icon: "flaticon-balcony-2" },
      { id: "bath", icon: "flaticon-shower-2" },
    ],

    gallery: [
      {
        id: "deluxe-family-1",
        src: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-1.webp",
        alt: "Deluxe room - 1",
      },
      {
        id: "deluxe-family-2",
        src: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-2.webp",
        alt: "Deluxe room - 2",
      },
      {
        id: "deluxe-family-3",
        src: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-3.webp",
        alt: "Deluxe room - 3",
      },
      {
        id: "deluxe-family-4",
        src: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-4.webp",
        alt: "Deluxe room - 4",
      },
      {
        id: "deluxe-family-5",
        src: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-5.webp",
        alt: "Deluxe room - 5",
      },
      {
        id: "deluxe-family-6",
        src: "/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-6.webp",
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

  {
    slug: "deluxe-superior-rooms",

    features: [
      { id: "area", icon: "flaticon-area" },
      { id: "guests", icon: "flaticon-user-2" },
      { id: "doubleBed", icon: "flaticon-bed-5" },
      { id: "singleBed", icon: "flaticon-bed-9" },
      { id: "sofa", icon: "flaticon-sofa" },
    ],

    gallery: [
      {
        id: "deluxe-family-1",
        src: "/images/rooms/deluxeSuperiorRoom/deluxe-superior-rooms-1.webp",
        alt: "Deluxe room - 1",
      },
      {
        id: "deluxe-family-2",
        src: "/images/rooms/deluxeSuperiorRoom/deluxe-superior-rooms-2.webp",
        alt: "Deluxe room - 2",
      },
      {
        id: "deluxe-family-3",
        src: "/images/rooms/deluxeSuperiorRoom/deluxe-superior-rooms-3.webp",
        alt: "Deluxe room - 3",
      },
      {
        id: "deluxe-family-4",
        src: "/images/rooms/deluxeSuperiorRoom/deluxe-superior-rooms-4.webp",
        alt: "Deluxe room - 4",
      }
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


{
  slug: "deluxe-swimup-family-rooms",

  features: [
    { id: "area", icon: "flaticon-area" },
    { id: "guests", icon: "flaticon-users" },
    { id: "doubleBed", icon: "flaticon-bed-5" },
    { id: "singleBed", icon: "flaticon-single-bed" },
    { id: "daybeds", icon: "flaticon-bed-7" },
    { id: "rooms", icon: "flaticon-maximize" },
    { id: "bath", icon: "flaticon-shower-2" },
    { id: "swimUp", icon: "flaticon-swimming-pool" },
    { id: "sunbeds", icon: "flaticon-sun-bath" },
  ],

  gallery: [
    {
      id: "swim-up-family-1",
      src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-1.webp",
      alt: "Deluxe Swim-Up Family Room 1",
    },
    {
      id: "swim-up-family-2",
      src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-2.webp",
      alt: "Deluxe Swim-Up Family Room 2",
    },
    {
      id: "swim-up-family-3",
      src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-3.webp",
      alt: "Deluxe Swim-Up Family Room 3",
    },
    {
      id: "swim-up-family-4",
      src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-4.webp",
      alt: "Deluxe Swim-Up Family Room 4",
    },
    {
      id: "swim-up-family-5",
      src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-5.webp",
      alt: "Deluxe Swim-Up Family Room 5",
    },
    {
      id: "swim-up-family-6",
      src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-6.webp",
      alt: "Deluxe Swim-Up Family Room 6",
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


{
  slug: "deluxe-swimup-rooms",

  features: [
    { id: "area", icon: "flaticon-area"},
    { id: "guests", icon: "flaticon-users"},
    { id: "doubleBed", icon: "flaticon-bed-5" },
    { id: "daybed", icon: "flaticon-bed-7" },
    { id: "bath", icon: "flaticon-shower-2" },
    { id: "swimUp", icon: "flaticon-swimming-pool"},
    { id: "sunbeds", icon: "flaticon-sun-bath" },
  ],

  gallery: [
    {
      id: "swim-up-1",
      src: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-1.webp",
      alt: "Deluxe Swim-Up room 1",
    },
    {
      id: "swim-up-2",
      src: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-2.webp",
      alt: "Deluxe Swim-Up room 2",
    },
    {
      id: "swim-up-3",
      src: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-3.webp",
      alt: "Deluxe Swim-Up room 3",
    },
    {
      id: "swim-up-4",
      src: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-4.webp",
      alt: "Deluxe Swim-Up room 4",
    },
    {
      id: "swim-up-5",
      src: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-5.webp",
      alt: "Deluxe Swim-Up room 5",
    },
    {
      id: "swim-up-6",
      src: "/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-6.webp",
      alt: "Deluxe Swim-Up room 6",
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


{
  slug: "deluxe-shallow-pool-rooms",

  features: [
    { id: "area", icon: "flaticon-area" },
    { id: "guests", icon: "flaticon-users" },
    { id: "doubleBed", icon: "flaticon-bed-5" },
    { id: "daybed", icon: "flaticon-sofa" },
    { id: "bath", icon: "flaticon-shower-2" },
  ],

  gallery: [
    {
      id: "shallow-pool-1",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-1.webp",
      alt: "Deluxe Shallow Pool room 1",
    },
    {
      id: "shallow-pool-2",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-2.webp",
      alt: "Deluxe Shallow Pool room 2",
    },
    {
      id: "shallow-pool-3",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-3.webp",
      alt: "Deluxe Shallow Pool room 3",
    },
    {
      id: "shallow-pool-4",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-4.webp",
      alt: "Deluxe Shallow Pool room 4",
    },
    {
      id: "shallow-pool-5",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-5.webp",
      alt: "Deluxe Shallow Pool room 5",
    },
    {
      id: "shallow-pool-6",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-6.webp",
      alt: "Deluxe Shallow Pool room 6",
    },
    {
      id: "shallow-pool-7",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-7.webp",
      alt: "Deluxe Shallow Pool room 7",
    },
    {
      id: "shallow-pool-8",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-8.webp",
      alt: "Deluxe Shallow Pool room 8",
    },
    {
      id: "shallow-pool-9",
      src: "/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-9.webp",
      alt: "Deluxe Shallow Pool room 9",
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


{
  slug: "deluxe-duplex-family-rooms",

  features: [
    { id: "area", icon: "flaticon-area" },
    { id: "guests", icon: "flaticon-users" },
    { id: "doubleBed", icon: "flaticon-bed-5" },
    { id: "singleBed", icon: "flaticon-single-bed" },
    { id: "rooms", icon: "flaticon-maximize" },
    { id: "bath", icon: "flaticon-shower-2" },
  ],

  gallery: [
    {
      id: "duplex-family-1",
      src: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-1.webp",
      alt: "Deluxe Duplex Family Room 1",
    },
    {
      id: "duplex-family-2",
      src: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-2.webp",
      alt: "Deluxe Duplex Family Room 2",
    },
    {
      id: "duplex-family-3",
      src: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-3.webp",
      alt: "Deluxe Duplex Family Room 3",
    },
    {
      id: "duplex-family-4",
      src: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-4.webp",
      alt: "Deluxe Duplex Family Room 4",
    },
    {
      id: "duplex-family-5",
      src: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-5.webp",
      alt: "Deluxe Duplex Family Room 5",
    },
    {
      id: "duplex-family-6",
      src: "/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-6.webp",
      alt: "Deluxe Duplex Family Room 6",
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


{
  slug: "deluxe-handicap-rooms",

  features: [
    { id: "area", icon: "flaticon-area" },
    { id: "guests", icon: "flaticon-users" },
    { id: "doubleBed", icon: "flaticon-bed-5" },
    { id: "bath", icon: "flaticon-shower-2" },
  ],

  gallery: [
    {
      id: "accessible-1",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-1.webp",
      alt: "Deluxe Accessible Room 1",
    },
    {
      id: "accessible-2",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-2.webp",
      alt: "Deluxe Accessible Room 2",
    },
    {
      id: "accessible-3",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-3.webp",
      alt: "Deluxe Accessible Room 3",
    },
    {
      id: "accessible-4",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-4.webp",
      alt: "Deluxe Accessible Room 4",
    },
    {
      id: "accessible-5",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-5.webp",
      alt: "Deluxe Accessible Room 5",
    },
    {
      id: "accessible-6",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-6.webp",
      alt: "Deluxe Accessible Room 6",
    },
    {
      id: "accessible-7",
      src: "/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-7.webp",
      alt: "Deluxe Accessible Room 7",
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

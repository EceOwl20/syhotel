
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
    
 gallery: Array.from({ length: 11 }, (_, index) => {
  const number = index + 1;
  return {
    id: `deluxe-${number}`,
    src: `/images/rooms/deluxeFamilyRoom/deluxe-rooms-${number}.webp`,
    alt: `Deluxe Room ${number}`,
  };
}),

   

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

    gallery: Array.from({ length: 17 }, (_, index) => {
  const number = index + 1;
  return {
    id: `deluxe-family-${number}`,
    src: `/images/rooms/deluxeFamilyRoom/deluxe-family-rooms-${number}.webp`,
    alt: `Deluxe Family Room ${number}`,
  };
}),

 

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

    gallery: Array.from({ length: 10 }, (_, index) => {
  const number = index + 1;
  return {
    id: `deluxe-superior-${number}`,
    src: `/images/rooms/deluxeSuperiorRoom/deluxe-superior-rooms-${number}.webp`,
    alt: `Deluxe Superior Room ${number}`,
  };
}),

  
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

   gallery: Array.from({ length: 15 }, (_, index) => {
  const number = index + 1;
  return {
    id: `deluxe-family-swimup-rooms-${number}`,
    src: `/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-${number}.webp`,
    alt: `Deluxe Swim-up Family Room ${number}`,
  };
}),


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

  gallery: Array.from({ length: 12 }, (_, index) => {
  const number = index + 1;

  return {
    id: `swim-up-${number}`,
    src: `/images/rooms/deluxeSwimupRoom/deluxe-swimup-rooms-${number}.webp`,
    alt: `Deluxe Swim-Up Room ${number}`,
  };
}),


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

     gallery: Array.from({ length: 15 }, (_, index) => {
  const number = index + 1;
  return {
    id: `shallow-pool-${number}`,
    src: `/images/rooms/deluxeShallowPoolRoom/deluxe-shallow-pool-rooms-${number}.webp`,
    alt: `Deluxe Shallow Pool Room ${number}`,
  };
}),



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

gallery: Array.from({ length: 21 }, (_, index) => {
  const number = index + 1;

  return {
    id: `duplex-family-${number}`,
    src: `/images/rooms/duplexFamilyRoom/deluxe-family-dublex-rooms-${number}.webp`,
    alt: `Deluxe Duplex Family Room ${number}`,
  };
}),

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

   gallery: Array.from({ length: 9 }, (_, index) => {
  const number = index + 1;
  return {
    id: `accessible-${number}`,
    src: `/images/rooms/deluxeHandicapRoom/deluxe-handicap-rooms-${number}.webp`,
    alt: `Deluxe Accessible Room ${number}`,
  };
}),


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

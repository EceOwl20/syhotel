
export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryCategory = {
  id: string;
  titleKey: "rooms" | "gastronomy" | "pools" | "spa" | "entertainment";
  images: GalleryImage[];
};

export const offersGallery: GalleryCategory[] = [
  // ROOMS
  {
    id: "rooms",
    titleKey: "rooms",
    images: [
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-1.webp",
        alt: "SY Hotels Belek Standard Room",
      },
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-2.webp",
        alt: "SY Hotels Belek Standard Room Interior",
      },
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-3.webp",
        alt: "SY Hotels Belek Standard Accommodation",
      },
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-4.webp",
        alt: "SY Hotels Belek Standard Room Design",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-1.webp",
        alt: "SY Hotels Belek Family Swim-Up Room",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-2.webp",
        alt: "SY Hotels Belek Swim-Up Family Accommodation",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-3.webp",
        alt: "SY Hotels Belek Swim-Up Family Room Interior",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-4.webp",
        alt: "SY Hotels Belek Swim-Up Family Room",
      },
    ],
  },

  // GASTRONOMY
  {
    id: "gastronomy",
    titleKey: "gastronomy",
    images: [
      {
        src: "/images/restaurants/sirius/sirius-1.webp",
        alt: "SY Hotels Belek Sirius Restaurant",
      },
      {
        src: "/images/restaurants/sirius/sirius-2.webp",
        alt: "SY Hotels Belek Sirius Dining Experience",
      },
      {
        src: "/images/restaurants/sirius/sirius-restoran-bufe-1.webp",
        alt: "SY Hotels Belek Sirius Buffet",
      },
      {
        src: "/images/restaurants/sirius/sirius-restoran-teras-1.webp",
        alt: "SY Hotels Belek Sirius Restaurant Terrace",
      },
      {
        src: "/images/restaurants/bettelglow/bettelglow-1.webp",
        alt: "SY Hotels Belek Bettelglow",
      },
      {
        src: "/images/restaurants/bettelglow/bettelglow-2.webp",
        alt: "SY Hotels Belek Bettelglow Dining Area",
      },
      {
        src: "/images/restaurants/larimar/larimar-1.webp",
        alt: "SY Hotels Belek Larimar Restaurant",
      },
      {
        src: "/images/restaurants/larimar/larimar-gallery-1.webp",
        alt: "SY Hotels Belek Larimar Restaurant Interior",
      },
      {
        src: "/images/restaurants/nova/nova-1.webp",
        alt: "SY Hotels Belek Nova Restaurant",
      },
      {
        src: "/images/restaurants/nova/nova-2.webp",
        alt: "SY Hotels Belek Nova Dining Experience",
      },
    ],
  },

  // POOLS
  {
    id: "pools",
    titleKey: "pools",
    images: [
      {
        src: "/images/pools/ablok-acik-havuz-1.webp",
        alt: "SY Hotels Belek A Block Outdoor Swimming Pool",
      },
      {
        src: "/images/pools/ablok-acik-havuz-2.webp",
        alt: "SY Hotels Belek Outdoor Pool Area",
      },
      {
        src: "/images/pools/ablok-acik-havuz-3.webp",
        alt: "SY Hotels Belek Poolside Experience",
      },
      {
        src: "/images/pools/bblok-acik-havuz-1.webp",
        alt: "SY Hotels Belek B Block Swimming Pool",
      },
      {
        src: "/images/pools/bblok-acik-havuz-2.webp",
        alt: "SY Hotels Belek B Block Outdoor Pool",
      },
      {
        src: "/images/pools/maldiv-havuz-1.webp",
        alt: "SY Hotels Belek Maldives Pool",
      },
      {
        src: "/images/pools/maldiv-havuz-2.webp",
        alt: "SY Hotels Belek Maldives Pool Experience",
      },
      {
        src: "/images/pools/maldiv-havuz-3.webp",
        alt: "SY Hotels Belek Maldives Swimming Pool",
      },
      {
        src: "/images/pools/kapali-havuz-1.webp",
        alt: "SY Hotels Belek Indoor Swimming Pool",
      },
      {
        src: "/images/pools/kapali-havuz-2.webp",
        alt: "SY Hotels Belek Indoor Pool Area",
      },
    ],
  },

  // SPA & WELLNESS
  {
    id: "spa",
    titleKey: "spa",
    images: [
      {
        src: "/images/homepage/spa-1.webp",
        alt: "SY Hotels Belek Spa & Wellness",
      },
      {
        src: "/images/spa/spa-3.webp",
        alt: "SY Hotels Belek Indoor Pool and Wellness",
      },
      {
        src: "/images/spa/spa-4.webp",
        alt: "SY Hotels Belek Relaxation Area",
      },
         {
        src: "/images/spa/sauna-1.webp",
        alt: "SY Hotels Belek Relaxation Area",
      },
          {
        src: "/images/spa/masaj-odalari-1.webp",
        alt: "SY Hotels Belek Relaxation Area",
      },
          {
        src: "/images/spa/masaj-odalari-2.webp",
        alt: "SY Hotels Belek Relaxation Area",
      },
    ],
  },

  // ENTERTAINMENT
  {
    id: "entertainment",
    titleKey: "entertainment",
    images: [
      {
        src: "/images/aquapark/aquapark-1.webp",
        alt: "SY Hotels Belek Aquapark",
      },
      {
        src: "/images/aquapark/aquapark-2.webp",
        alt: "SY Hotels Belek Water Slides",
      },
      {
        src: "/images/aquapark/aquapark-3.webp",
        alt: "SY Hotels Belek Aquapark Experience",
      },
      {
        src: "/images/aquapark/aquapark-4.webp",
        alt: "SY Hotels Belek Family Water Activities",
      },
      {
        src: "/images/activities/aksam-sovlari-1-1.webp",
        alt: "SY Hotels Belek Evening Entertainment",
      },
      {
        src: "/images/activities/aksam-sovlari-2-1.webp",
        alt: "SY Hotels Belek Evening Shows",
      },
      {
        src: "/images/activities/aksam-sovlari-3-1.webp",
        alt: "SY Hotels Belek Live Entertainment",
      },
      {
        src: "/images/activities/canli-muzik-1.jpg",
        alt: "SY Hotels Belek Live Music",
      },
    ],
  },
];

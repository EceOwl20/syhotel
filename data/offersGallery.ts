
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
        alt: "SY Hotels Luxury Belek Standard Room",
      },
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-2.webp",
        alt: "SY Hotels Luxury Belek Standard Room Interior",
      },
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-3.webp",
        alt: "SY Hotels Luxury Belek Standard Accommodation",
      },
      {
        src: "/images/rooms/deluxeRoom/deluxe-rooms-4.webp",
        alt: "SY Hotels Luxury Belek Standard Room Design",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-1.webp",
        alt: "SY Hotels Luxury Belek Family Swim-Up Room",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-2.webp",
        alt: "SY Hotels Luxury Belek Swim-Up Family Accommodation",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-3.webp",
        alt: "SY Hotels Luxury Belek Swim-Up Family Room Interior",
      },
      {
        src: "/images/rooms/deluxeSwimupFamilyRoom/deluxe-family-swimup-rooms-4.webp",
        alt: "SY Hotels Luxury Belek Swim-Up Family Room",
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
        alt: "SY Hotels Luxury Belek Sirius Restaurant",
      },
      {
        src: "/images/restaurants/sirius/sirius-2.webp",
        alt: "SY Hotels Luxury Belek Sirius Dining Experience",
      },
      {
        src: "/images/restaurants/sirius/sirius-restoran-bufe-1.webp",
        alt: "SY Hotels Luxury Belek Sirius Buffet",
      },
      {
        src: "/images/restaurants/sirius/sirius-restoran-teras-1.webp",
        alt: "SY Hotels Luxury Belek Sirius Restaurant Terrace",
      },
      {
        src: "/images/restaurants/bettelglow/bettelglow-1.webp",
        alt: "SY Hotels Luxury Belek Bettelglow",
      },
      {
        src: "/images/restaurants/bettelglow/bettelglow-2.webp",
        alt: "SY Hotels Luxury Belek Bettelglow Dining Area",
      },
      {
        src: "/images/restaurants/larimar/larimar-1.webp",
        alt: "SY Hotels Luxury Belek Larimar Restaurant",
      },
      {
        src: "/images/restaurants/larimar/larimar-gallery-1.webp",
        alt: "SY Hotels Luxury Belek Larimar Restaurant Interior",
      },
      {
        src: "/images/restaurants/nova/nova-1.webp",
        alt: "SY Hotels Luxury Belek Nova Restaurant",
      },
      {
        src: "/images/restaurants/nova/nova-2.webp",
        alt: "SY Hotels Luxury Belek Nova Dining Experience",
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
        alt: "SY Hotels Luxury Belek A Block Outdoor Swimming Pool",
      },
      {
        src: "/images/pools/ablok-acik-havuz-2.webp",
        alt: "SY Hotels Luxury Belek Outdoor Pool Area",
      },
      {
        src: "/images/pools/ablok-acik-havuz-3.webp",
        alt: "SY Hotels Luxury Belek Poolside Experience",
      },
      {
        src: "/images/pools/bblok-acik-havuz-1.webp",
        alt: "SY Hotels Luxury Belek B Block Swimming Pool",
      },
      {
        src: "/images/pools/bblok-acik-havuz-2.webp",
        alt: "SY Hotels Luxury Belek B Block Outdoor Pool",
      },
      {
        src: "/images/pools/maldiv-havuz-1.webp",
        alt: "SY Hotels Luxury Belek Maldives Pool",
      },
      {
        src: "/images/pools/maldiv-havuz-2.webp",
        alt: "SY Hotels Luxury Belek Maldives Pool Experience",
      },
      {
        src: "/images/pools/maldiv-havuz-3.webp",
        alt: "SY Hotels Luxury Belek Maldives Swimming Pool",
      },
      {
        src: "/images/pools/kapali-havuz-1.webp",
        alt: "SY Hotels Luxury Belek Indoor Swimming Pool",
      },
      {
        src: "/images/pools/kapali-havuz-2.webp",
        alt: "SY Hotels Luxury Belek Indoor Pool Area",
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
        alt: "SY Hotels Luxury Belek Spa & Wellness",
      },
      {
        src: "/images/spa/spa-3.webp",
        alt: "SY Hotels Luxury Belek Indoor Pool and Wellness",
      },
      {
        src: "/images/spa/spa-4.webp",
        alt: "SY Hotels Luxury Belek Relaxation Area",
      },
         {
        src: "/images/spa/sauna-1.webp",
        alt: "SY Hotels Luxury Belek Relaxation Area",
      },
          {
        src: "/images/spa/masaj-odalari-1.webp",
        alt: "SY Hotels Luxury Belek Relaxation Area",
      },
          {
        src: "/images/spa/masaj-odalari-2.webp",
        alt: "SY Hotels Luxury Belek Relaxation Area",
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
        alt: "SY Hotels Luxury Belek Aquapark",
      },
      {
        src: "/images/aquapark/aquapark-2.webp",
        alt: "SY Hotels Luxury Belek Water Slides",
      },
      {
        src: "/images/aquapark/aquapark-3.webp",
        alt: "SY Hotels Luxury Belek Aquapark Experience",
      },
      {
        src: "/images/aquapark/aquapark-4.webp",
        alt: "SY Hotels Luxury Belek Family Water Activities",
      },
      {
        src: "/images/activities/aksam-sovlari-1-1.webp",
        alt: "SY Hotels Luxury Belek Evening Entertainment",
      },
      {
        src: "/images/activities/aksam-sovlari-2-1.webp",
        alt: "SY Hotels Luxury Belek Evening Shows",
      },
      {
        src: "/images/activities/aksam-sovlari-3-1.webp",
        alt: "SY Hotels Luxury Belek Live Entertainment",
      },
      {
        src: "/images/activities/canli-muzik-1.jpg",
        alt: "SY Hotels Luxury Belek Live Music",
      },
    ],
  },
];

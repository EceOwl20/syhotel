
import type { GalleryImage } from "@/components/rooms/RoomGallery";

export type BarConfig = {
  slug: string;
  logo: string;
  gallery: GalleryImage[];
  bannerImages?: GalleryImage[];
};

function createBarGallery(
  slug: string,
  folder: string,
  count: number,
  prefix: string = folder,
): GalleryImage[] {
  return Array.from({ length: count }, (_, index) => {
    const imageNumber = index + 1;

    return {
      id: `${slug}-${imageNumber}`,
      src: `/images/bars/${folder}/${prefix}-${imageNumber}.webp`,
      alt: `${slug} - ${imageNumber}`,
    };
  });
}

const larimarBannerImages: GalleryImage[] = [1, 4, 5].map(
  (imageNumber) => ({
    id: `larimar-beach-restaurant-${imageNumber}`,
    src: `/images/bars/larimar/larimar-${imageNumber}.webp`,
    alt: `larimar-beach-restaurant - ${imageNumber}`,
  }),
);

const larimarGalleryImages: GalleryImage[] = [
  larimarBannerImages[0],
  {
    id: "larimar-beach-restaurant-2",
    src: "/images/bars/larimar/larimar-beach-bar-restoran-2-300x169.webp",
    alt: "larimar-beach-restaurant - 2",
  },
  {
    id: "larimar-beach-restaurant-3",
    src: "/images/bars/larimar/larimar-beach-bar-restoran-3-300x169.webp",
    alt: "larimar-beach-restaurant - 3",
  },
  larimarBannerImages[1],
  larimarBannerImages[2],
  {
    id: "larimar-beach-restaurant-6",
    src: "/images/bars/larimar/larimar-beach-bar-restoran-6-300x169.webp",
    alt: "larimar-beach-restaurant - 6",
  },
  {
    id: "larimar-beach-restaurant-7",
    src: "/images/bars/larimar/larimar-beach-bar-restoran-7-300x169.webp",
    alt: "larimar-beach-restaurant - 7",
  },
  {
    id: "larimar-beach-restaurant-8",
    src: "/images/bars/larimar/larimar-beach-bar-restoran-8-300x169.webp",
    alt: "larimar-beach-restaurant - 8",
  },
];

export const bars: BarConfig[] = [
  {
    slug: "ruby-lobby-bar",
    logo: "/images/bars/ruby/logos_rubby-lobby-bar.webp",
    gallery: createBarGallery(
      "ruby-lobby-bar",
      "ruby",
      7,
    ),
  },
  {
    slug: "lal-terrace-bar",
    logo: "/images/bars/lal/logos_lal-terrace-bar.webp",
    gallery: createBarGallery(
      "lal-terrace-bar",
      "lal",
      11,
    ),
  },
  {
    slug: "marin-shallow-bar",
    logo: "/images/bars/marine/logos_marin-shallow-bar.webp",
    gallery: createBarGallery(
      "marin-shallow-bar",
      "marine",
      7,
    ),
  },
  {
    slug: "aquarius-pool-bar",
    logo: "/images/bars/aquarius/logos_aquarius-pool-bar.webp",
    gallery: createBarGallery(
      "aquarius-pool-bar",
      "aquarius",
      10,
    ),
  },
  {
    slug: "larimar-beach-restaurant",
    logo: "/images/bars/larimar/logos_larimar-beach-restaurant.webp",
    bannerImages: larimarBannerImages,
    gallery: larimarGalleryImages,
  },
];

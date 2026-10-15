
import type { GalleryImage } from "@/components/rooms/RoomGallery";

export type BarConfig = {
  slug: string;
  logo: string;
  gallery: GalleryImage[];
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
    gallery: createBarGallery(
      "larimar-beach-restaurant",
      "larimar",
      3,
    ),
  },
];

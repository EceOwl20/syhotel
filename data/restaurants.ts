
import type { GalleryImage } from "@/components/rooms/RoomGallery";

export type RestaurantConfig = {
  slug: string;
  logo?: string;
  gallery: GalleryImage[];
  bannerImages?: GalleryImage[];
  buffetGallery?: GalleryImage[];
  showTextBanner: boolean;
  textBannerImage?: string;
  galleryBackground: "stone" | "white";
};

function createGallery(
  slug: string,
  folder: string,
  prefix: string,
  count: number,
): GalleryImage[] {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      id: `${slug}-${prefix}-${number}`,
      src: `/images/restaurants/${folder}/${prefix}-${number}.webp`,
      alt: `${slug} ${number}`,
    };
  });
}

export const restaurants: RestaurantConfig[] = [
 
{
  slug: "sirius-restaurant",

  logo: "/images/restaurants/sirius/logos_sirius.webp",

  // Main restaurant gallery
  gallery: createGallery(
    "sirius-restaurant",
    "sirius",
    "sirius",
    11,
  ),

  // Open Buffet gallery
  buffetGallery: createGallery(
    "sirius-restaurant",
    "sirius",
    "sirius-restoran-bufe",
    9,
  ),

  showTextBanner: true,

  textBannerImage:
    "/images/restaurants/sirius/sirius-restoran-bufe-1.webp",

  galleryBackground: "stone",
},


  {
    slug: "nova-food-court",

    logo: "/images/restaurants/nova/logos_nova.webp",

    gallery: createGallery(
      "nova-food-court",
      "nova",
      "nova",
      4,
    ),

    showTextBanner: true,

    textBannerImage:
      "/images/restaurants/nova/nova-2.webp",

    galleryBackground: "stone",
  },

  {
    slug: "bettelglow-patisserie",

    logo: "/images/restaurants/bettelglow/logos_bettelglow.webp",

    gallery: createGallery(
      "bettelglow-patisserie",
      "bettelglow",
      "bettelglow",
      9,
    ),

    showTextBanner: true,

    textBannerImage:
      "/images/restaurants/bettelglow/bettelglow-5.webp",

    galleryBackground: "stone",
  },



{
  slug: "larimar-beach-restaurant",

  logo: "/images/restaurants/larimar/logos_larimar.webp",

  // MainBanner: only 3 large images
  bannerImages: createGallery(
    "larimar-beach-restaurant",
    "larimar",
    "larimar",
    3,
  ),

  // Gallery: 3 banner images + 6 additional images
  gallery: [
    ...createGallery(
      "larimar-beach-restaurant",
      "larimar",
      "larimar",
      3,
    ),

    ...createGallery(
      "larimar-beach-restaurant",
      "larimar",
      "larimar-gallery",
      6,
    ),
  ],

  showTextBanner: false,

  galleryBackground: "white",
},


];


import type { GalleryImage } from "@/components/rooms/RoomGallery";

export type BeachConfig = {
  bannerImages: GalleryImage[];
  gallery: GalleryImage[];
};

const BEACH_PATH = "/images/beach";

function createBeachImage(
  number: number,
  thumbnail = false,
): GalleryImage {
  const filename = thumbnail
    ? `beach-${number}-300x169.webp`
    : `beach-${number}.webp`;

  return {
    id: `beach-${number}`,
    src: `${BEACH_PATH}/${filename}`,
    alt: `SY Hotels Beach - ${number}`,
  };
}

// Full-size images also used in MainBanner
const bannerImages: GalleryImage[] = [
  createBeachImage(6),
  createBeachImage(7),
  createBeachImage(9),
];

// All ten images, ordered by their filenames
const galleryImages: GalleryImage[] = [
  createBeachImage(1, true),
  createBeachImage(2, true),
  createBeachImage(3, true),
  createBeachImage(4, true),
  createBeachImage(5, true),
  createBeachImage(6),
  createBeachImage(7),
  createBeachImage(8, true),
  createBeachImage(9),
  createBeachImage(10, true),
];

export const beach: BeachConfig = {
  bannerImages,
  gallery: galleryImages,
};

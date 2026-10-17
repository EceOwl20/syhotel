import type { GalleryImage } from "@/components/rooms/RoomGallery";
import type { RoomService } from "@/components/rooms/RoomServices";

export type RoomFeature = {
  id: string;
  label: string;
  icon: string;
};

export type RoomDetail = {
  slug: string;
  bannerImageCount?: number;
  title: string;
  subtitle: string;
  description: string;
  features: RoomFeature[];
  gallery: GalleryImage[];
  freeServices: RoomService[];
  paidServices: RoomService[];
};

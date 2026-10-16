
import type { GalleryImage } from "@/components/rooms/RoomGallery";

const AQUAPARK_PATH = "/images/aquapark";

export const aquaparkVideo = {
  youtubeUrl: "https://www.youtube.com/watch?v=VWTV_PN4i-k",
  start: 336,
  end: 351,
};

export const aquaparkGallery: GalleryImage[] = [
  1, 2, 3, 4, 5, 6,
].map((number) => ({
  id: `aquapark-${number}`,
  src: `${AQUAPARK_PATH}/aquapark-${number}.webp`,
  alt: `SY Hotels Mega Splash Aquapark - ${number}`,
}));


import "server-only";

import { getTranslations } from "next-intl/server";

import { rooms } from "@/data/rooms";
import { roomServiceCatalog } from "@/data/roomServices";

import type { RoomDetail } from "@/data/roomTypes";
import type { RoomService } from "@/components/rooms/RoomServices";
import type { RoomServiceId } from "@/data/roomServices";

export async function getRoomDetail(
  slug: string,
  locale: string,
): Promise<RoomDetail | null> {
  const room = rooms.find((item) => item.slug === slug);

  if (!room) return null;

  const t = await getTranslations({
    locale,
    namespace: "Rooms",
  });

  const roomKey = `details.${slug}`;

  // Translate room services
  const translateServices = (
    serviceIds: RoomServiceId[],
  ): RoomService[] => {
    return serviceIds.map((id) => {
      const descriptionKey = `services.${id}.description`;

      return {
        id,
        icon: roomServiceCatalog[id],
        title: t(`services.${id}.title`),
        description: t.has(descriptionKey)
          ? t(descriptionKey)
          : undefined,
      };
    });
  };

  return {
    slug: room.slug,

    title: t(`${roomKey}.title`),
    subtitle: t(`${roomKey}.subtitle`),
    description: t(`${roomKey}.description`),

    features: room.features.map((feature) => ({
      id: feature.id,
      icon: feature.icon,
      label: t(`${roomKey}.features.${feature.id}`),
    })),

    gallery: room.gallery.map((image, index) => ({
      ...image,
      alt: `${t(`${roomKey}.galleryAlt`)} ${index + 1}`,
    })),

    freeServices: translateServices(room.freeServices),
    paidServices: translateServices(room.paidServices),
  };
}

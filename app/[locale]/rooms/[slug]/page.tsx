import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { rooms } from "@/data/rooms";
import { getRoomDetail } from "@/lib/getRoomDetail";
import RoomDetailSection from "@/components/rooms/RoomDetailSection";
import RelatedContent from "@/components/generalComponents/RelatedContent";
import { getTranslations } from "next-intl/server";
import {
  createRoomSeoAlternates,
  type Locale,
} from "@/lib/seo";

import RoomVirtualTour from "@/components/rooms/RoomVirtualTour";
import { roomVirtualTours } from "@/data/roomVirtualTours";

type PageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export const instant = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const room = await getRoomDetail(slug, locale);

  return room
    ? {
        title: room.title,
        alternates: createRoomSeoAlternates(slug, locale),
      }
    : {};
}

export default async function RoomDetailPage({
  params,
}: PageProps) {
  const { slug, locale } = await params;

  const room = await getRoomDetail(slug, locale);

  if (!room) {
    notFound();
  }

  const tVirtualTour = await getTranslations({
    locale,
    namespace: "RoomVirtualTour",
  });

  const tourUrl = roomVirtualTours[slug];

  return (
    <>
      <RoomDetailSection room={room} />

      {tourUrl && (
        <RoomVirtualTour
          title={tVirtualTour("title", {
            room: room.title,
          })}
          description={tVirtualTour("description")}
          tourUrl={tourUrl}
          openTourText={tVirtualTour("openTour")}
        />
      )}
      
    </>
  );
}

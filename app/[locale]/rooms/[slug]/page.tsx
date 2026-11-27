import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRoomDetail } from "@/lib/getRoomDetail";
import RoomDetailSection from "@/components/rooms/RoomDetailSection";
import JsonLd from "@/components/seo/JsonLd";
import { getTranslations } from "next-intl/server";
import {
  createRoomSeoAlternates,
  type Locale,
} from "@/lib/seo";
import { createMetadataDescription } from "@/lib/metadata";
import { getLocalizedRoomUrl, getLocalizedUrl } from "@/lib/structureData/config";
import { buildHotelRoomJsonLd } from "@/lib/structureData/room";
import { buildWebPageGraph } from "@/lib/structureData/webPage";

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
        title: room.metadata?.title ?? room.title,
        description: createMetadataDescription(
          room.metadata?.description ?? room.description,
        ),
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

  const [tVirtualTour, tHeader] = await Promise.all([
    getTranslations({
      locale,
      namespace: "RoomVirtualTour",
    }),
    getTranslations({ locale, namespace: "Header" }),
  ]);

  const tourUrl = roomVirtualTours[slug];
  const pageUrl = getLocalizedRoomUrl(locale, slug);
  const pageTitle = room.metadata?.title ?? room.title;
  const pageDescription = createMetadataDescription(
    room.metadata?.description ?? room.description,
  );
  const hotelRoom = buildHotelRoomJsonLd({
    pageUrl,
    name: room.title,
    description: room.description,
    images: room.gallery.map((image) =>
      typeof image.src === "string" ? image.src : image.src.src,
    ),
    amenities: room.freeServices.map((service) => service.title),
  });
  const structuredData = buildWebPageGraph({
    locale,
    pageUrl,
    title: pageTitle,
    description: pageDescription,
    breadcrumbs: [
      {
        name: tHeader("home"),
        url: getLocalizedUrl(locale),
      },
      {
        name: room.title,
        url: pageUrl,
      },
    ],
    mainEntityId: hotelRoom["@id"],
    additionalNodes: [hotelRoom],
  });

  return (
    <>
      <JsonLd data={structuredData} />

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

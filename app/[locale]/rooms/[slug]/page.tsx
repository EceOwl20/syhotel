import { notFound } from "next/navigation";

import { rooms } from "@/data/rooms";
import { getRoomDetail } from "@/lib/getRoomDetail";
import RoomDetailSection from "@/components/rooms/RoomDetailSection";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailPage({
  params,
}: PageProps) {
  const { slug, locale } = await params;

  const room = await getRoomDetail(slug, locale);

  if (!room) {
    notFound();
  }

  return <RoomDetailSection room={room} />;
}
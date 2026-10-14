import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms"
import RoomDetailSection from "@/components/rooms/RoomDetailSection";

type PageProps = {
  params: Promise<{
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
  const { slug } = await params;

  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    notFound();
  }

  return <RoomDetailSection room={room} />;
}
import { notFound } from "next/navigation";

import { rooms } from "@/data/rooms";
import { getRoomDetail } from "@/lib/getRoomDetail";
import RoomDetailSection from "@/components/rooms/RoomDetailSection";
import RelatedContent from "@/components/generalComponents/RelatedContent";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export const instant = false;

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

  const tRooms = await getTranslations({ locale, namespace: "Rooms" });
  const tRelated = await getTranslations({
    locale,
    namespace: "RelatedContent",
  });

  const relatedRooms = rooms
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      id: item.slug,
      title: tRooms(`details.${item.slug}.title`),
      image: item.gallery[0].src,
      href: `/rooms/${item.slug}`,
    }));

  return (
    <>
      <RoomDetailSection room={room} />
      {/* <RelatedContent
        title={tRelated("otherRooms")}
        items={relatedRooms}
        previousLabel={tRelated("previous")}
        nextLabel={tRelated("next")}
      /> */}
    </>
  );
}

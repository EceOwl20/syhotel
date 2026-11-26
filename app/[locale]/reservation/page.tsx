
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AsisiaWidget from "@/components/reservation/AsisiaWidget";

export const metadata: Metadata = {
  title: "Online Rezervasyon | SY Hotels",
  description:
    "SY Hotels Luxury Belek Luxury için online rezervasyon yapın. Tarihlerinizi ve odanızı seçerek konaklamanızı planlayın.",
};

type ReservationPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ReservationPage({
  params,
}: ReservationPageProps) {
  const { locale } = await params;

  if (locale !== "tr") {
    notFound();
  }

  const widgetUrl =
    "https://sy-hotel.asisia.com/tr/Home/WidgetJs" +
    "?url=/SY-Belek-Luxury" +
    "&parent=main" +
    "&View=Widget" +
    "&parentPost=/tr/sepet" +
    "&ProjectId=3972227C-D542-4EB9-8E2F-72417A375B31";

  return <AsisiaWidget src={widgetUrl} />;
}

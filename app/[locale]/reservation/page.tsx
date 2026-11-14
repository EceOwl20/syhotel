
import type { Metadata } from "next";
import AsisiaWidget from "@/components/reservation/AsisiaWidget";

export const metadata: Metadata = {
  title: "Online Rezervasyon | SY Hotels",
  description:
    "SY Hotels Belek Luxury için online rezervasyon yapın. Tarihlerinizi ve odanızı seçerek konaklamanızı planlayın.",
};

export default function ReservationPage() {
  const widgetUrl =
    "https://sy-hotel.asisia.com/tr/Home/WidgetJs" +
    "?url=/SY-Belek-Luxury" +
    "&parent=main" +
    "&View=Widget" +
    "&parentPost=/tr/sepet" +
    "&ProjectId=3972227C-D542-4EB9-8E2F-72417A375B31";

  return <AsisiaWidget src={widgetUrl} />;
}

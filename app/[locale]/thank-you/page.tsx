
import type { Metadata } from "next";
import AsisiaWidget from "@/components/reservation/AsisiaWidget";

export const metadata: Metadata = {
  title: "Rezervasyon Onayı | SY Hotels",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const widgetUrl =
    "https://sy-hotel.asisia.com/tr/Home/WidgetJs" +
    "?url=/Basket/Index/" +
    "&parent=main" +
    "&View=Widget" +
    "&parentPost=/tr/tesekkur";

  return <AsisiaWidget src={widgetUrl} />;
}

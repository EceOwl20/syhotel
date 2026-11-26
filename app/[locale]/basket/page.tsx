
import AsisiaWidget from "@/components/reservation/AsisiaWidget";
import { createTranslatedMetadata } from "@/lib/metadata";

export const generateMetadata = createTranslatedMetadata(
  "basket",
  "/basket",
  { robots: { index: false, follow: false } },
);

export default function BasketPage() {
  const widgetUrl =
    "https://sy-hotel.asisia.com/tr/Home/WidgetJs" +
    "?url=/Basket/Index/" +
    "&parent=main" +
    "&View=Widget" +
    "&parentPost=/tr/tesekkur";

  return <AsisiaWidget src={widgetUrl} />;
}

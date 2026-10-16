import { getTranslations } from "next-intl/server";

import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import SustainabilityContent from "@/components/sustainability/SustainabilityContent";

type PolicySection = {
  title: string;
  items: string[];
};

export default async function SustainabilityPage() {
  const t = await getTranslations("Sustainability");

  const sections = t.raw("sections") as PolicySection[];

  return (
    <main className="min-h-screen bg-white">
      <HalfImageBanner
        image="/images/general/genel-gorunum-1.webp"
        imageAlt="SY Hotels Belek"
        logo="/logo/logo_favicon-beyaz.webp"
        overlayOpacity={0.5}
      />

      <SustainabilityContent
        title={t("title")}
        introduction={t("introduction")}
        sections={sections}
        conclusion={t("conclusion")}
      />
    </main>
  );
}
import { getTranslations } from "next-intl/server";

import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import ExploreRegionSection from "@/components/explore-region/ExploreRegionSection";
import RegionInformationSection from "@/components/explore-region/RegionInformationSection";

import { exploreRegionItems } from "@/data/exploreRegion";
import { createTranslatedMetadata } from "@/lib/metadata";

export const generateMetadata = createTranslatedMetadata(
  "ExploreRegion",
  "title",
);

type InformationSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export default async function ExploreRegionPage() {
  const t = await getTranslations("ExploreRegion");

  const places = exploreRegionItems.map((item) => ({
    ...item,
    title: t(`places.${item.id}.title`),
    description: t(`places.${item.id}.description`),
  }));

  const informationSections = t.raw(
    "informationSections",
  ) as InformationSection[];

  return (
    <main className="min-h-screen bg-white">
      <HalfImageBanner
        image="/images/general/genel-gorunum-1.webp"
        imageAlt="SY Hotels Belek"
        overlayOpacity={0.5}
      />

      <ExploreRegionSection
        title={t("title")}
        description={t("description")}
        items={places}
      />

      <RegionInformationSection
        sections={informationSections}
      />
    </main>
  );
}


import { getTranslations } from "next-intl/server";

import MainBanner from "@/components/HomeComponents/MainBanner";
import BeachDetailSection from "@/components/beach/BeachDetailSection";

import { beach } from "@/data/beach";

export default async function BeachPage() {
  const t = await getTranslations("Beach");

  const slides = beach.bannerImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <main className="min-h-screen bg-white">

      {/* MAIN BANNER */}
      <MainBanner slides={slides} />

      {/* BEACH GALLERY AND DESCRIPTION */}
      <BeachDetailSection
        title={t("title")}
        description={t("description")}
        images={beach.gallery}
      />

    </main>
  );
}

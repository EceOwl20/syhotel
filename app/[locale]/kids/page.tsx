import { getTranslations } from "next-intl/server";

import VideoBanner from "@/components/generalComponents/VideoBanner";
import InfoTextSection from "@/components/generalComponents/InfoTextSection";
import ImageTextSection from "@/components/generalComponents/ImageTextSection";

import { kidsGalleries, kidsVideo } from "@/data/kids";

export default async function KidsPage() {
  const t = await getTranslations("KidsPage");

  const kidsClubDescription = [
    t("kidsClub.miniTitle"),
    t("kidsClub.miniDescription"),
    "",
    t("kidsClub.juniorTitle"),
    t("kidsClub.juniorDescription"),
  ].join("\n");

  return (
    <main className="min-h-screen bg-white">

      {/* FULLSCREEN VIDEO */}
      <VideoBanner
        youtubeUrl={kidsVideo.url}
        start={kidsVideo.start}
        end={kidsVideo.end}
        mobileHeight="compact"
      />

      {/* PAGE INTRODUCTION */}
      <InfoTextSection
        subtitle={t("subtitle")}
        title={t("title")}
        description={t("description")}
      />

      {/* KIDS CLUB - TEXT LEFT / IMAGE RIGHT */}
      <ImageTextSection
        title={t("kidsClub.title")}
        description={kidsClubDescription}
        images={kidsGalleries.kidsClub}
        imagePosition="right"
        desktopImageSize="compact"
      />

      {/* AQUAPARK - IMAGE LEFT / TEXT RIGHT */}
      <ImageTextSection
        title={t("aquapark.title")}
        description={t("aquapark.description")}
        images={kidsGalleries.aquapark}
        imagePosition="left"
        desktopImageSize="compact"
      />

    </main>
  );
}

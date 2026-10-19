
import { getTranslations } from "next-intl/server";

import VideoBanner from "@/components/generalComponents/VideoBanner";
import InfoTextSection from "@/components/generalComponents/InfoTextSection";
import ImageTextSection from "@/components/generalComponents/ImageTextSection";

export default async function SpaWellnessPage() {
  const t = await getTranslations("SpaWellness");

  return (
    <main className="min-h-screen bg-white">

      {/* VIDEO BANNER */}
      <VideoBanner
        youtubeUrl="https://www.youtube.com/watch?v=VWTV_PN4i-k"
        start={246}
        end={284}
        overlayOpacity={0.15}
        mobileHeight="compact"
      />

      {/* INTRODUCTION */}
      <InfoTextSection
        subtitle={t("intro.subtitle")}
        title={t("intro.title")}
        description={t("intro.description")}
      />

      {/* SPA */}
      <ImageTextSection
        title={t("spa.title")}
        description={t("spa.description")}
        imagePosition="right"
        images={[
          "/images/spa/spa-3.webp",
          "/images/spa/spa-4.webp",
        ]}
      />

      {/* MASSAGE ROOMS */}
      <ImageTextSection
        title={t("massageRooms.title")}
        description={t("massageRooms.description")}
        imagePosition="left"
        images={[
          "/images/spa/masaj-odalari-1.webp",
          "/images/spa/masaj-odalari-2.webp",
        ]}
      />

      {/* FITNESS CENTER */}
      <ImageTextSection
        title={t("fitnessCenter.title")}
        description={t("fitnessCenter.description")}
        imagePosition="right"
        images={[
          "/images/spa/fitness-center-1.webp",
        ]}
      />

      {/* TURKISH BATH */}
      <ImageTextSection
        title={t("turkishBath.title")}
        description={t("turkishBath.description")}
        imagePosition="left"
        images={[
          "/images/spa/hamam-1.webp",
          "/images/spa/hamam-2.webp",
        ]}
      />

      {/* SAUNA */}
      <ImageTextSection
        title={t("sauna.title")}
        description={t("sauna.description")}
        imagePosition="right"
        images={[
          "/images/spa/sauna-1.webp",
        ]}
      />

    </main>
  );
}


import { getTranslations } from "next-intl/server";

import VideoBanner from "@/components/generalComponents/VideoBanner";
import InfoTextSection from "@/components/generalComponents/InfoTextSection";
import ImageTextSection from "@/components/generalComponents/ImageTextSection";
import JsonLd from "@/components/seo/JsonLd";
import { createTranslatedMetadata } from "@/lib/metadata";
import {
  type Locale,
  getLocalizedUrl,
} from "@/lib/structureData/config";
import { buildWebPageGraph } from "@/lib/structureData/webPage";

export const generateMetadata = createTranslatedMetadata(
  "spaWellness",
  "/spa-wellness",
);

export default async function SpaWellnessPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [t, tMetadata, tHeader] = await Promise.all([
    getTranslations({ locale, namespace: "SpaWellness" }),
    getTranslations({ locale, namespace: "Metadata" }),
    getTranslations({ locale, namespace: "Header" }),
  ]);
  const pageUrl = getLocalizedUrl(locale, "/spa-wellness");
  const structuredData = buildWebPageGraph({
    locale,
    pageUrl,
    title: tMetadata("spaWellness.title"),
    description: tMetadata("spaWellness.description"),
    breadcrumbs: [
      {
        name: tHeader("home"),
        url: getLocalizedUrl(locale),
      },
      {
        name: tMetadata("spaWellness.title"),
        url: pageUrl,
      },
    ],
  });

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={structuredData} />

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
        images={Array.from(
    { length: 20 },
    (_, index) => `/images/spa/spa-${index + 1}.webp`
  )}
      />

      {/* MASSAGE ROOMS */}
      <ImageTextSection
        title={t("massageRooms.title")}
        description={t("massageRooms.description")}
        imagePosition="left"
         images={Array.from(
    { length: 13 },
    (_, index) => `/images/spa/masaj-odalari-${index + 1}.webp`
  )}
      />

      {/* FITNESS CENTER */}
      <ImageTextSection
        title={t("fitnessCenter.title")}
        description={t("fitnessCenter.description")}
        imagePosition="right"
        images={Array.from(
    { length: 6 },
    (_, index) => `/images/spa/fitness-center-${index + 1}.webp`
  )}
      />

      {/* TURKISH BATH */}
      <ImageTextSection
        title={t("turkishBath.title")}
        description={t("turkishBath.description")}
        imagePosition="left"
        images={Array.from(
    { length: 12 },
    (_, index) => `/images/spa/hamam-${index + 1}.webp`
  )}
      />

      {/* SAUNA */}
      <ImageTextSection
        title={t("sauna.title")}
        description={t("sauna.description")}
        imagePosition="right"
        images={Array.from(
    { length: 4 },
    (_, index) => `/images/spa/sauna-${index + 1}.webp`
  )}
      />

    </main>
  );
}

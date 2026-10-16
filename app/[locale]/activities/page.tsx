import { getTranslations } from "next-intl/server";

import VideoBanner from "@/components/generalComponents/VideoBanner";
import RestaurantTextBanner from "@/components/restaurants/RestaurantTextBanner";
import ActivityGallerySection from "@/components/activities/ActivityGallerySection";

import {
  activitiesVideo,
  activitiesBannerImage,
  activitiesGallery,
} from "@/data/activities";

export default async function ActivitiesPage() {
  const t = await getTranslations("Activities");

  return (
    <main className="min-h-screen bg-black">
      {/* 1. VIDEO BANNER */}
      <VideoBanner
        youtubeUrl={activitiesVideo.youtubeUrl}
        start={activitiesVideo.start}
        overlayOpacity={0.15}
      />

      {/* 2. IMAGE TEXT BANNER */}
      <RestaurantTextBanner
        image={activitiesBannerImage}
        title={t("bannerTitle")}
      />

      {/* 3. INFORMATION TEXT */}
      <section className="w-full bg-black px-5 pt-20 pb-12 text-center md:px-8">
        <div className="mx-auto max-w-[1500px] text-[#bda99c]">
          <span className="mb-5 block text-[11px] tracking-[0.18em] uppercase">
            {t("subtitle")}
          </span>

          <h1 className="mb-5 text-[30px] font-light md:text-[38px]">
            {t("title")}
          </h1>

          <p className="text-[13px] leading-[1.9] font-light md:text-[15px]">
            {t("description")}
          </p>
        </div>
      </section>

      {/* 4. ACTIVITIES & GALLERY */}
      <ActivityGallerySection
        title={t("activitiesTitle")}
        dailyTitle={t("dailyTitle")}
        dailyDescription={t("dailyDescription")}
        eveningTitle={t("eveningTitle")}
        eveningDescription={t("eveningDescription")}
        images={activitiesGallery}
      />
    </main>
  );
}
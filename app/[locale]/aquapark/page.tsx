
import { getTranslations } from "next-intl/server";

import VideoBanner from "@/components/generalComponents/VideoBanner";
import AquaparkDetailSection from "@/components/aquapark/AquaparkDetailSection";

import { aquaparkVideo, aquaparkGallery } from "@/data/aquapark";

export default async function AquaparkPage() {
  const t = await getTranslations("Aquapark");

  const slideDetails = t.raw("slides") as string[];

  return (
    <main className="min-h-screen bg-white">

      {/* YOUTUBE VIDEO BANNER */}
      {aquaparkVideo.youtubeUrl && (
        <VideoBanner
          youtubeUrl={aquaparkVideo.youtubeUrl}
          start={aquaparkVideo.start}
          end={aquaparkVideo.end}
          overlayOpacity={0.15}
        />
      )}

      {/* AQUAPARK GALLERY AND DETAILS */}
      <AquaparkDetailSection
        title={t("title")}
        description={t("description")}
        slideDetails={slideDetails}
        images={aquaparkGallery}
        backgroundImage="/images/backgrounds/stone-texture.webp"
      />

    </main>
  );
}


import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { rooms as roomConfigs } from "@/data/roomsCard";
import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import TextBanner from "@/components/generalComponents/TextBanner";
import RoomsSection from "@/components/HomeComponents/RoomsSection";
import GastronomySection from "@/components/HomeComponents/GastronomySection";

import { gastronomyItems } from "@/data/gastronomy";

import backgroundImageSpa from "@/public/images/homepage/spa-1.webp";
import backgroundImagePools from "@/public/images/homepage/acik-havuz.webp";
import backgroundImageAquapark from "@/public/images/aquapark/aquapark-1.webp";
import backgroundImageShows from "@/public/images/homepage/aksam-sovlari.webp";
import backgroundImageKids from "@/public/images/kids/mini-kulup-1.webp";
import backgroundImageKids2 from "@/public/images/kids/mini-kulup-2.webp";
import backgroundImageKids4 from "@/public/images/kids/mini-kulup-4.webp";
import backgroundImageKids6 from "@/public/images/kids/mini-kulup-6.webp";

export const metadata: Metadata = {
  title: {
    absolute: "SY Hotels Belek",
  },
};

export default async function Home() {
  const t = await getTranslations("HomePage");

  const tRooms = await getTranslations("HomeRooms");
  
  const translatedRooms = roomConfigs.map((room) => ({
  ...room,
  title: tRooms(`roomNames.${room.id}`),
}));

  const slides = [
    {
      src: "/images/homepage/rubby-lobi-bar-1.webp",
      alt: "SY Hotels - Hotel view",
    },
    {
      src: "/images/homepage/rubby-lobi-bar-3.webp",
      alt: "SY Hotels - Pool view",
    },
    {
      src: "/images/homepage/rubby-lobi-bar-7.webp",
      alt: "SY Hotels - Beach view",
    },
  ];

  return (
    <main className="flex w-full flex-col items-center justify-center lg:gap-10 bg-[#f0eae5] pb-0 lg:pb-20">

      {/* Main Banner */}
      <MainBanner slides={slides} />

      {/* Particle Logo */}
      <ParticleLogo
        src="/logo/logo_favicon1.webp"
        width={135}
        height={135}
        particleGap={1}
        particleSize={0.85}
        mouseRadius={50}
        color="#877565"
      />

      {/* Rooms */}
     
<RoomsSection
  rooms={translatedRooms}
  title={tRooms("title")}
  description={tRooms("description")}
  discoverText={tRooms("discover")}
/>


      {/* Gastronomy */}
      <GastronomySection
        items={gastronomyItems}
        title={t("gastronomy.title")}
        description={t("gastronomy.description")}
      />

      <div className="flex w-full flex-col gap-0 md:gap-20">
        {/* Pools */}
        <TextBanner
          backgroundImage={backgroundImagePools}
          span={t("pools.span")}
          header={t("pools.title")}
          text={t("pools.description")}
          buttonText={t("pools.button")}
          buttonLink="/pools"
          overlayVariant="sage"
        />

        {/* Spa & Wellness */}
        <TextBanner
          backgroundImage={backgroundImageSpa}
          span={t("spa.span")}
          header={t("spa.title")}
          text={t("spa.description")}
          buttonText={t("spa.button")}
          buttonLink="/spa-wellness"
          overlayVariant="sage"
        />

        {/* Activities & Entertainment */}
        <TextBanner
          backgroundImage={backgroundImageShows}
          span={t("entertainment.span")}
          header={t("entertainment.title")}
          text={t("entertainment.description")}
          buttonText={t("entertainment.button")}
          buttonLink="/activities"
          overlayVariant="taupe"
        />

        {/* Aquapark */}
        <TextBanner
          backgroundImage={backgroundImageAquapark}
          span={t("aquapark.span")}
          header={t("aquapark.title")}
          text={t("aquapark.description")}
          buttonText={t("aquapark.button")}
          buttonLink="/aquapark"
          overlayVariant="black"
          backgroundPosition="top"
        />

        {/* Kids Club */}
        <TextBanner
          backgroundImage={backgroundImageKids}
          slideshowImages={[
            backgroundImageKids,
            backgroundImageKids2,
            backgroundImageKids4,
            backgroundImageKids6,
          ]}
          span={t("kids.span")}
          header={t("kids.title")}
          text={t("kids.description")}
          buttonText={t("kids.button")}
          buttonLink="/kids"
          overlayVariant="sage"
        />
      </div>

    </main>
  );
}

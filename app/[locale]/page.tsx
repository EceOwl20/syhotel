
import { getTranslations } from "next-intl/server";
import { rooms as roomConfigs } from "@/data/roomsCard";
import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import TextBanner from "@/components/generalComponents/TextBanner";
import RoomsSection from "@/components/HomeComponents/RoomsSection";
import GastronomySection from "@/components/HomeComponents/GastronomySection";

import { rooms } from "@/data/roomsCard";
import { gastronomyItems } from "@/data/gastronomy";

import backgroundImageSpa from "@/public/images/homepage/spa-1.webp";
import backgroundImagePools from "@/public/images/homepage/acik-havuz.webp";
import backgroundImageAquapark from "@/public/images/homepage/aquapark-1.webp";
import backgroundImageShows from "@/public/images/homepage/aksam-sovlari.webp";
import backgroundImageKids from "@/public/images/kids/mini-kulup-1.webp";

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
    <main className="flex w-full flex-col items-center justify-center gap-10 bg-white pb-20">

      {/* Main Banner */}
      <MainBanner slides={slides} />

      {/* Particle Logo */}
      <ParticleLogo
        src="/logo/logo_favicon1.webp"
        width={140}
        height={140}
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

      {/* Pools */}
      <TextBanner
        backgroundImage={backgroundImagePools}
        span={t("pools.span")}
        header={t("pools.title")}
        text={t("pools.description")}
        buttonText={t("pools.button")}
        buttonLink="/pools"
      />

      {/* Spa & Wellness */}
      <TextBanner
        backgroundImage={backgroundImageSpa}
        span={t("spa.span")}
        header={t("spa.title")}
        text={t("spa.description")}
        buttonText={t("spa.button")}
        buttonLink="/spa-wellness"
      />

      {/* Activities & Entertainment */}
      <TextBanner
        backgroundImage={backgroundImageShows}
        span={t("entertainment.span")}
        header={t("entertainment.title")}
        text={t("entertainment.description")}
        buttonText={t("entertainment.button")}
        buttonLink="/shows"
      />

      {/* Aquapark */}
      <TextBanner
        backgroundImage={backgroundImageAquapark}
        span={t("aquapark.span")}
        header={t("aquapark.title")}
        text={t("aquapark.description")}
        buttonText={t("aquapark.button")}
        buttonLink="/aquapark"
      />

      {/* Kids Club */}
      <TextBanner
        backgroundImage={backgroundImageKids}
        span={t("kids.span")}
        header={t("kids.title")}
        text={t("kids.description")}
        buttonText={t("kids.button")}
        buttonLink="/aquapark"
      />

    </main>
  );
}

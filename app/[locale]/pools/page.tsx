
import { getTranslations } from "next-intl/server";

import MainBanner from "@/components/HomeComponents/MainBanner";
import InfoTextSection from "@/components/generalComponents/InfoTextSection";
import PoolImageTextSection from "@/components/generalComponents/PoolImageTextSection";

import { pools, poolBannerSlides } from "@/data/pools";

export default async function PoolsPage() {
  const t = await getTranslations("Pools");

  return (
    <main className="min-h-screen bg-[#f7f7f5]">

      {/* MAIN BANNER */}
      <MainBanner slides={poolBannerSlides} />

      {/* POOLS INTRODUCTION */}
      <InfoTextSection
        subtitle={t("intro.subtitle")}
        title={t("intro.title")}
        description={t("intro.description")}
        className="!bg-[#f7f7f5] !text-[#858585]"
      />

      {/* POOLS CONTENT */}
      <div className="pb-16 md:pb-24">
        {pools.map((pool) => {
          const title = t(`${pool.id}.title`);
          const subtitle = t(`${pool.id}.subtitle`);
          const description = t(`${pool.id}.description`);

          return (
            <PoolImageTextSection
              key={pool.id}
              title={title}
              subtitle={subtitle || undefined}
              description={description || undefined}
              images={pool.images}
              imagePosition={pool.imagePosition}
              discoverText={
                pool.discoverHref
                  ? t("discover")
                  : undefined
              }
              discoverHref={pool.discoverHref}
            />
          );
        })}
      </div>

    </main>
  );
}

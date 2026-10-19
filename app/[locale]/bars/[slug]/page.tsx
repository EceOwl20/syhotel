
import { notFound } from "next/navigation";

import { bars } from "@/data/bars";
import { getBarDetail } from "@/lib/getBarDetail";

import BarDetailSection from "@/components/bars/BarDetailSection";
import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import RelatedContent from "@/components/generalComponents/RelatedContent";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export const instant = false;

export function generateStaticParams() {
  return bars.map((bar) => ({
    slug: bar.slug,
  }));
}

export default async function BarDetailPage({
  params,
}: PageProps) {
  const { locale, slug } = await params;

  const bar = await getBarDetail(slug, locale);

  if (!bar) {
    notFound();
  }

  const tBars = await getTranslations({ locale, namespace: "Bars" });
  const tRelated = await getTranslations({
    locale,
    namespace: "RelatedContent",
  });

  const relatedBars = bars
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      id: item.slug,
      title: tBars(`${item.slug}.title`),
      subtitle: tBars(`${item.slug}.subtitle`),
      image: item.gallery[0].src,
      href: `/bars/${item.slug}`,
    }));

  const slides = (bar.bannerImages ?? bar.gallery).map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <main className="min-h-screen bg-[#f7f7f5]">

      {/* Dynamic bar banner */}
     
{/* Banner with particle logo */}

{/* Banner with particle logo */}
<div className="relative w-full overflow-hidden">

  {/* Main Banner */}
  {slides.length > 0 && (
    <MainBanner slides={slides} />
  )}

  {/* Bottom gradient overlay */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute inset-x-0 bottom-0 z-20
      h-[40%]
      bg-linear-to-t
      from-[#887565]/85
      via-[#887565]/30
      via-45%
      to-transparent
    "
  />

  {/* Bottom centered particle logo */}
  <div
    className="
      absolute left-1/2 z-30
      -translate-x-1/2 bottom-[-12px]
      md:bottom-[10px]
    "
  >
    <ParticleLogo
  src={bar.logo}
  width={450}
  height={250}
  padding={0}
  particleGap={1}
  particleSize={1.2}
  mouseRadius={50}
  color="#EEE1D3"
  detectionMode="alpha"
  entranceAnimation
  entranceOrigin="random"
  entranceDuration={1800}
/>
  </div>

</div>




      {/* Dynamic bar content */}
      <BarDetailSection
        title={bar.title}
        subtitle={bar.subtitle}
        description={bar.description}
        images={bar.gallery}
      />

      {/* <RelatedContent
        title={tRelated("otherBars")}
        items={relatedBars}
        previousLabel={tRelated("previous")}
        nextLabel={tRelated("next")}
      /> */}

    </main>
  );
}

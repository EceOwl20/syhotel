
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { bars } from "@/data/bars";
import { getBarDetail } from "@/lib/getBarDetail";

import BarDetailSection from "@/components/bars/BarDetailSection";
import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import JsonLd from "@/components/seo/JsonLd";
import { getTranslations } from "next-intl/server";
import {
  createBarSeoAlternates,
  type Locale,
} from "@/lib/seo";
import { createMetadataDescription } from "@/lib/metadata";
import {
  getLocalizedBarUrl,
  getLocalizedUrl,
} from "@/lib/structureData/config";
import { buildGastronomyJsonLd } from "@/lib/structureData/gastronomy";
import { buildWebPageGraph } from "@/lib/structureData/webPage";

type PageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export const instant = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const bar = await getBarDetail(slug, locale);

  if (!bar) return {};

  return {
    title: `${bar.title} ${bar.subtitle}`.trim(),
    description: createMetadataDescription(bar.description),
    alternates: createBarSeoAlternates(slug, locale),
  };
}

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

  const tHeader = await getTranslations({
    locale,
    namespace: "Header",
  });

  const slides = (bar.bannerImages ?? bar.gallery).map((image) => ({
    src: image.src,
    alt: image.alt,
  }));
  const pageUrl = getLocalizedBarUrl(locale, slug);
  const pageTitle = `${bar.title} ${bar.subtitle}`.trim();
  const pageDescription = createMetadataDescription(bar.description);
  const venue = buildGastronomyJsonLd({
    schemaType: "BarOrPub",
    pageUrl,
    name: bar.title,
    description: bar.description,
    images: bar.gallery.map((image) =>
      typeof image.src === "string" ? image.src : image.src.src,
    ),
    logo: bar.logo,
  });
  const structuredData = buildWebPageGraph({
    locale,
    pageUrl,
    title: pageTitle,
    description: pageDescription,
    breadcrumbs: [
      {
        name: tHeader("home"),
        url: getLocalizedUrl(locale),
      },
      {
        name: bar.title,
        url: pageUrl,
      },
    ],
    mainEntityId: venue["@id"],
    additionalNodes: [venue],
  });

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <JsonLd data={structuredData} />

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

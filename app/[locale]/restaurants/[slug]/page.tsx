
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { restaurants } from "@/data/restaurants";
import { getRestaurantDetail } from "@/lib/getRestaurantDetail";

import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import RestaurantTextBanner from "@/components/restaurants/RestaurantTextBanner";
import RestaurantDetailSection from "@/components/restaurants/RestaurantDetailSection";
import JsonLd from "@/components/seo/JsonLd";
import { getTranslations } from "next-intl/server";
import {
  createRestaurantSeoAlternates,
  type Locale,
} from "@/lib/seo";
import { createMetadataDescription } from "@/lib/metadata";
import {
  getLocalizedRestaurantUrl,
  getLocalizedUrl,
} from "@/lib/structureData/config";
import {
  buildGastronomyJsonLd,
  getRestaurantSchemaType,
} from "@/lib/structureData/gastronomy";
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
  const restaurant = await getRestaurantDetail(slug, locale);

  if (!restaurant) return {};

  return {
    title: `${restaurant.title} ${restaurant.subtitle}`.trim(),
    description: createMetadataDescription(
      restaurant.description,
    ),
    alternates: createRestaurantSeoAlternates(
      slug,
      locale,
    ),
  };
}

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export default async function RestaurantDetailPage({
  params,
}: PageProps) {
  const { locale, slug } = await params;

  const restaurant = await getRestaurantDetail(
    slug,
    locale,
  );

  if (!restaurant) {
    notFound();
  }

  const tHeader = await getTranslations({
    locale,
    namespace: "Header",
  });

  const slides = (
    restaurant.bannerImages ?? restaurant.gallery
  ).map((image) => ({
    src: image.src,
    alt: image.alt,
  }));
  const pageUrl = getLocalizedRestaurantUrl(locale, slug);
  const pageTitle = `${restaurant.title} ${restaurant.subtitle}`.trim();
  const pageDescription = createMetadataDescription(
    restaurant.description,
  );
  const venue = buildGastronomyJsonLd({
    schemaType: getRestaurantSchemaType(slug),
    pageUrl,
    name: restaurant.title,
    description: restaurant.description,
    images: [
      ...restaurant.gallery,
      ...restaurant.buffetGallery,
    ].map((image) =>
      typeof image.src === "string" ? image.src : image.src.src,
    ),
    logo: restaurant.logo,
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
        name: restaurant.title,
        url: pageUrl,
      },
    ],
    mainEntityId: venue["@id"],
    additionalNodes: [venue],
  });

  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <JsonLd data={structuredData} />

      {/* Main banner and optional particle logo */}
      {slides.length > 0 && (
        <div className="relative w-full overflow-hidden">
          <MainBanner slides={slides} />

          {restaurant.logo && (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[45%] bg-linear-to-t from-[#948475]/95 via-[#948475]/35 via-50% to-transparent"
              />

             <div
    className="
      absolute bottom-5 left-1/2 z-30
      -translate-x-1/2 bottom-[-8%]
      lg::bottom-[-5%] 
    ">
                <ParticleLogo
  src={restaurant.logo}
  width={460}
  height={300}
  padding={20}
  particleGap={1}
  particleSize={0.85}
  mouseRadius={50}
  color="#ffffff"
  detectionMode="alpha"
  entranceAnimation
  entranceDuration={1800}
/>
              </div>
            </>
          )}
        </div>
      )}

      {/* Optional slogan image banner */}
      {restaurant.showTextBanner &&
        restaurant.textBannerImage && (
          <RestaurantTextBanner
            image={restaurant.textBannerImage}
            title={restaurant.slogan}
            variant="restaurant"
          />
        )}

      {/* Restaurant details and galleries */}
      <RestaurantDetailSection
        title={restaurant.title}
        subtitle={restaurant.subtitle}
        description={restaurant.description}
        images={restaurant.gallery}
        buffetImages={restaurant.buffetGallery}
        buffetTitle={restaurant.buffetTitle}
        background={restaurant.galleryBackground}
      />

      {/* <RelatedContent
        title={tRelated("otherRestaurants")}
        items={relatedRestaurants}
        previousLabel={tRelated("previous")}
        nextLabel={tRelated("next")}
      /> */}

    </main>
  );
}

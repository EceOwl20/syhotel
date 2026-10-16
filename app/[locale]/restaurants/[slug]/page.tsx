
import { notFound } from "next/navigation";

import { restaurants } from "@/data/restaurants";
import { getRestaurantDetail } from "@/lib/getRestaurantDetail";

import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import RestaurantTextBanner from "@/components/restaurants/RestaurantTextBanner";
import RestaurantDetailSection from "@/components/restaurants/RestaurantDetailSection";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

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

  const slides = (
    restaurant.bannerImages ?? restaurant.gallery
  ).map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <main className="min-h-screen bg-[#f7f7f5]">

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

    </main>
  );
}

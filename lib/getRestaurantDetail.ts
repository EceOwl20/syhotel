
import "server-only";

import { getTranslations } from "next-intl/server";
import { restaurants } from "@/data/restaurants";

export async function getRestaurantDetail(
  slug: string,
  locale: string,
) {
  const restaurant = restaurants.find(
    (item) => item.slug === slug,
  );

  if (!restaurant) return null;

  const t = await getTranslations({
    locale,
    namespace: "Restaurants",
  });

  const translateGallery = (
    images: typeof restaurant.gallery,
  ) =>
    images.map((image, index) => ({
      ...image,
      alt: `${t(`${slug}.title`)} - ${index + 1}`,
    }));

  return {
    ...restaurant,
    title: t(`${slug}.title`),
    subtitle: t(`${slug}.subtitle`),
    description: t(`${slug}.description`),
    slogan: t("slogan"),
    buffetTitle: t("openBuffet"),
    gallery: translateGallery(restaurant.gallery),
    buffetGallery: restaurant.buffetGallery
      ? translateGallery(restaurant.buffetGallery)
      : [],
  };
}


import "server-only";

import { getTranslations } from "next-intl/server";
import { bars } from "@/data/bars";

export async function getBarDetail(
  slug: string,
  locale: string,
) {
  const bar = bars.find((item) => item.slug === slug);

  if (!bar) return null;

  const t = await getTranslations({
    locale,
    namespace: "Bars",
  });

  const translateGallery = (images: typeof bar.gallery) =>
    images.map((image, index) => ({
      ...image,
      alt: `${t(`${slug}.title`)} - ${index + 1}`,
    }));

  return {
    slug: bar.slug,
    logo: bar.logo,

    title: t(`${slug}.title`),
    subtitle: t(`${slug}.subtitle`),
    description: t(`${slug}.description`),

    gallery: translateGallery(bar.gallery),
    bannerImages: bar.bannerImages
      ? translateGallery(bar.bannerImages)
      : undefined,
  };
}

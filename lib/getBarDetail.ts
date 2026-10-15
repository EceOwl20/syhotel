
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

  return {
    slug: bar.slug,
    logo: bar.logo,

    title: t(`${slug}.title`),
    subtitle: t(`${slug}.subtitle`),
    description: t(`${slug}.description`),

    gallery: bar.gallery.map((image, index) => ({
      ...image,
      alt: `${t(`${slug}.title`)} - ${index + 1}`,
    })),
  };
}

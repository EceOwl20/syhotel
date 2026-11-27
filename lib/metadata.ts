import "server-only";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  createSeoAlternates,
  type Locale,
  type StaticPath,
} from "@/lib/seo";

export type LocalePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export type MetadataPage =
  | "home"
  | "activities"
  | "agencies"
  | "aquapark"
  | "beach"
  | "contact"
  | "exploreRegion"
  | "generalInformation"
  | "kids"
  | "kvkk"
  | "offers"
  | "pools"
  | "spaWellness"
  | "sustainability"
  | "reservation"
  | "basket"
  | "thankYou";

type TranslatedMetadataOptions = {
  robots?: Metadata["robots"];
  absoluteTitle?: boolean;
};

export function createMetadataDescription(
  value: string,
  maxLength = 160,
) {
  const description = value.replace(/\s+/g, " ").trim();

  if (description.length <= maxLength) return description;

  const candidate = description.slice(0, maxLength - 1);
  const lastSpace = candidate.lastIndexOf(" ");
  const cutoff = lastSpace > maxLength * 0.75
    ? lastSpace
    : candidate.length;

  return `${candidate.slice(0, cutoff).replace(/[.,;:!?-]+$/, "")}…`;
}

export function createTranslatedMetadata(
  page: MetadataPage,
  pathname: StaticPath,
  options: TranslatedMetadataOptions = {},
) {
  return async function generateMetadata({
    params,
  }: LocalePageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });
    const title = t(`${page}.title`);

    return {
      title: options.absoluteTitle ? { absolute: title } : title,
      description: createMetadataDescription(
        t(`${page}.description`),
      ),
      alternates: createSeoAlternates(pathname, locale),
      robots: options.robots,
    };
  };
}

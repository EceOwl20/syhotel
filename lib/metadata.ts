import "server-only";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type MetadataNamespace =
  | "Activities"
  | "Agencies"
  | "Aquapark"
  | "Beach"
  | "Contact"
  | "ExploreRegion"
  | "GeneralInformation"
  | "KidsPage"
  | "KVKK"
  | "Pools"
  | "SpaWellness"
  | "Sustainability";

export function createTranslatedMetadata(
  namespace: MetadataNamespace,
  titleKey: string,
) {
  return async function generateMetadata({
    params,
  }: LocalePageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace });

    return {
      title: t(titleKey as never),
    };
  };
}

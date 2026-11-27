import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locale as getRootLocale } from "next/root-params";

import { routing } from "@/i18n/routing";
import type { MetadataPage } from "@/lib/metadata";
import {
  type StaticPath,
  getLocalizedUrl,
} from "@/lib/structureData/config";
import {
  type WebPageSchemaType,
  buildWebPageGraph,
} from "@/lib/structureData/webPage";
import JsonLd from "./JsonLd";

type StaticPageJsonLdProps = {
  metadataPage: MetadataPage;
  pathname: StaticPath;
  pageType?: WebPageSchemaType;
};

export default async function StaticPageJsonLd({
  metadataPage,
  pathname,
  pageType,
}: StaticPageJsonLdProps) {
  const locale = await getRootLocale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const [tMetadata, tHeader] = await Promise.all([
    getTranslations({ locale, namespace: "Metadata" }),
    getTranslations({ locale, namespace: "Header" }),
  ]);
  const pageUrl = getLocalizedUrl(locale, pathname);
  const title = tMetadata(`${metadataPage}.title`);
  const structuredData = buildWebPageGraph({
    locale,
    pageUrl,
    title,
    description: tMetadata(`${metadataPage}.description`),
    pageType,
    breadcrumbs: [
      {
        name: tHeader("home"),
        url: getLocalizedUrl(locale),
      },
      {
        name: title,
        url: pageUrl,
      },
    ],
  });

  return <JsonLd data={structuredData} />;
}

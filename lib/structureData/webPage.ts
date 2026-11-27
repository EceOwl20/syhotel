import {
  type Locale,
  SCHEMA_IDS,
  createSchemaId,
} from "./config";
import {
  type BreadcrumbEntry,
  buildBreadcrumbJsonLd,
} from "./breadcrumb";
import {
  type JsonLdNode,
  createSchemaGraph,
  createSchemaReference,
} from "./graph";
import { buildHotelJsonLd } from "./hotel";
import { buildWebsiteJsonLd } from "./website";

export type WebPageSchemaType =
  | "WebPage"
  | "ContactPage"
  | "AboutPage";

type WebPageGraphProps = {
  locale: Locale;
  pageUrl: string;
  title: string;
  description: string;
  pageType?: WebPageSchemaType;
  breadcrumbs?: BreadcrumbEntry[];
  mainEntityId?: string;
  additionalNodes?: JsonLdNode[];
};

export function buildWebPageGraph({
  locale,
  pageUrl,
  title,
  description,
  pageType = "WebPage",
  breadcrumbs,
  mainEntityId,
  additionalNodes = [],
}: WebPageGraphProps) {
  const breadcrumb = breadcrumbs
    ? buildBreadcrumbJsonLd({
        pageUrl,
        entries: breadcrumbs,
      })
    : null;

  const webPage = {
    "@type": pageType,
    "@id": createSchemaId(pageUrl, "webpage"),
    url: pageUrl,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: createSchemaReference(SCHEMA_IDS.website),
    about: createSchemaReference(SCHEMA_IDS.hotel),
    publisher: createSchemaReference(SCHEMA_IDS.hotel),
    ...(mainEntityId && {
      mainEntity: createSchemaReference(mainEntityId),
    }),
    ...(breadcrumb && {
      breadcrumb: createSchemaReference(breadcrumb["@id"]),
    }),
  };

  return createSchemaGraph(
    buildHotelJsonLd(),
    buildWebsiteJsonLd(),
    webPage,
    ...(breadcrumb ? [breadcrumb] : []),
    ...additionalNodes,
  );
}

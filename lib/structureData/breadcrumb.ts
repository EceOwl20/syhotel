import { createSchemaId } from "./config";

export type BreadcrumbEntry = {
  name: string;
  url: string;
};

type BreadcrumbJsonLdProps = {
  pageUrl: string;
  entries: BreadcrumbEntry[];
};

export function buildBreadcrumbJsonLd({
  pageUrl,
  entries,
}: BreadcrumbJsonLdProps) {
  return {
    "@type": "BreadcrumbList",
    "@id": createSchemaId(pageUrl, "breadcrumb"),
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.url,
    })),
  };
}

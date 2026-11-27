import {
  HOTEL_ADDRESS,
  HOTEL_GEO,
  SCHEMA_IDS,
  createSchemaId,
  getAbsoluteUrl,
} from "./config";
import { createSchemaReference } from "./graph";

export type GastronomySchemaType =
  | "Restaurant"
  | "FoodEstablishment"
  | "Bakery"
  | "BarOrPub";

type GastronomyJsonLdProps = {
  schemaType: GastronomySchemaType;
  pageUrl: string;
  name: string;
  description: string;
  images: string[];
  logo?: string;
};

export function getRestaurantSchemaType(
  slug: string,
): GastronomySchemaType {
  if (slug === "nova-food-court") return "FoodEstablishment";
  if (slug === "bettelglow-patisserie") return "Bakery";

  return "Restaurant";
}

export function buildGastronomyJsonLd({
  schemaType,
  pageUrl,
  name,
  description,
  images,
  logo,
}: GastronomyJsonLdProps) {
  return {
    "@type": schemaType,
    "@id": createSchemaId(pageUrl, "venue"),
    url: pageUrl,
    name,
    description,
    image: [...new Set(images)].map(getAbsoluteUrl),
    ...(logo && { logo: getAbsoluteUrl(logo) }),
    address: HOTEL_ADDRESS,
    geo: HOTEL_GEO,
    containedInPlace: createSchemaReference(SCHEMA_IDS.hotel),
  };
}

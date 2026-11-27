import {
  SCHEMA_IDS,
  createSchemaId,
  getAbsoluteUrl,
} from "./config";
import { createSchemaReference } from "./graph";

type HotelRoomJsonLdProps = {
  pageUrl: string;
  name: string;
  description: string;
  images: string[];
  amenities: string[];
};

export function buildHotelRoomJsonLd({
  pageUrl,
  name,
  description,
  images,
  amenities,
}: HotelRoomJsonLdProps) {
  const uniqueAmenities = [...new Set(amenities)];

  return {
    "@type": "HotelRoom",
    "@id": createSchemaId(pageUrl, "room"),
    url: pageUrl,
    name,
    description,
    image: images.map(getAbsoluteUrl),
    containedInPlace: createSchemaReference(SCHEMA_IDS.hotel),
    amenityFeature: uniqueAmenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
  };
}

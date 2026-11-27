import type { GastronomyItem } from "@/components/HomeComponents/GastronomyCard";

type GastronomyTitleKey =
  | "bars"
  | "snack"
  | "restaurants"
  | "alacarte";

type GastronomyItemConfig = Omit<GastronomyItem, "title"> & {
  titleKey: GastronomyTitleKey;
};

export const gastronomyItems: GastronomyItemConfig[] = [
  {
    id: "bars",
    titleKey: "bars",
    image: "/images/homepage/gastronomy/bars.jpg",
    href: {
      pathname: "/bars/[slug]",
      params: { slug: "ruby-lobby-bar" },
    },
  },
  {
    id: "snack",
    titleKey: "snack",
    image: "/images/homepage/gastronomy/snack.jpg",
    href: {
      pathname: "/restaurants/[slug]",
      params: { slug: "nova-food-court" },
    },
  },
  {
    id: "restaurants",
    titleKey: "restaurants",
    image: "/images/homepage/gastronomy/restaurants.jpg",
    href: {
      pathname: "/restaurants/[slug]",
      params: { slug: "sirius-restaurant" },
    },
  },
  {
    id: "alacarte",
    titleKey: "alacarte",
    image: "/images/homepage/gastronomy/alacarte.jpg",
    href: null,
  },
];

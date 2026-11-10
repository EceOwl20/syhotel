export interface Offer {
  id: string;
  image?: string;
  titleKey: string;
  descriptionKey: string;
  href?: string;
}

export const offers: Offer[] = [
  {
    id: "offer-01",
    titleKey: "offer01",
    descriptionKey: "description01",
  },
  {
    id: "offer-02",
    titleKey: "offer02",
    descriptionKey: "description02",
  },
  {
    id: "offer-03",
    titleKey: "offer03",
    descriptionKey: "description03",
  },
  {
    id: "offer-04",
    titleKey: "offer04",
    descriptionKey: "description04",
  },
];
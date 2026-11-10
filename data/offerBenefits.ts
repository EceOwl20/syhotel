export type RatingProvider = {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  url: string;
};

export type BenefitOffer = {
  id: string;
  discount: number;
  image: string;
  titleKey: "swimupTitle" | "spaTitle";
  descriptionKey: "swimupDescription" | "spaDescription";
  categoryKey: "accommodation" | "wellness";
  href?: string;
};

export const hotelRatings: RatingProvider[] = [
  {
    id: "tripadvisor",
    name: "Tripadvisor",
    score: 4.3,
    maxScore: 5,
    url: "https://www.tripadvisor.com.tr/Hotel_Review-g7380333-d32974936-Reviews-SY_Luxury_Belek-Kadriye_Belek_Serik_District_Turkish_Mediterranean_Coast.html",
  },
  {
    id: "holidaycheck",
    name: "HolidayCheck",
    score: 5.2,
    maxScore: 6,
    url: "https://www.holidaycheck.de/hi/sy-luxury-belek/3c0937bc-b1d6-42a8-9280-0644000c2a43",
  },
  {
    id: "anextour",
    name: "ANEX Tour",
    score: 4.5,
    maxScore: 6,
    url: "https://nurhotel.anextour.de/search/offer?aidgiata=1449005&dur=7&ibe=hotel&ddate=2026-11-15&rdate=2027-11-10&srtReg=15&srtHot=5&stars=3&adult=2",
  },
  {
    id: "expedia",
    name: "Expedia",
    score: 8.8,
    maxScore: 10,
    url: "https://www.expedia.de/Serik-Hotels-Sy-Hotels-Belek.h112329850.Hotel-Beschreibung",
  },
];

export const benefitOffers: BenefitOffer[] = [
  {
    id: "swimup",
    discount: 20, // SAMPLE ONLY
    image: "/images/homepage/acik-havuz.webp",
    titleKey: "swimupTitle",
    descriptionKey: "swimupDescription",
    categoryKey: "accommodation",
  },
  {
    id: "spa",
    discount: 15, // SAMPLE ONLY
    image: "/images/homepage/spa-1.webp",
    titleKey: "spaTitle",
    descriptionKey: "spaDescription",
    categoryKey: "wellness",
  },
];
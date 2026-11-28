import { getTranslations, setRequestLocale } from "next-intl/server";
import { createTranslatedMetadata } from "@/lib/metadata";

import OfferShowcase from "@/components/offers/OfferShowcase";
import OffersExperience from "@/components/offers/OffersExperience";
import OffersContact from "@/components/offers/OffersContact";
import OffersBenefits from "@/components/offers/OffersBenefits";
import OffersMomentsCarousel from "@/components/offers/OffersMomentsCarousel";
import OffersFlights2 from "@/components/offers/OffersFlights2";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = createTranslatedMetadata(
  "offers",
  "/offers",
  { robots: { index: false, follow: true } },
);

export default async function OffersPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "Offers",
  });

const showcaseOffers = [
  {
    id: "offer-01",
    title: t("offer01"),
    description: t("description01"),
    imageNumber: 4,

    upgradesLabel: t("upgradeListTitle"),

    upgrades: [
      {
        from: "Standard Land",
        to: "Standard Pool",
      },
      {
        from: "Standard Shallow",
        to: "Standard Swim-up",
      },
      {
        from: "Superior Room",
        to: "Dublex Family Room",
      },
    ],
  },

  {
    id: "offer-02",
    title: t("accommodation"),
    description: t("prepaymentDescription"),
    imageNumber: 6,

    upgradesLabel: t("upgradeListTitle"),
  },

   {
    id: "offer-03",
    title: t("longStayTitle"),
    description: t("longStayDescription"),
    imageNumber: 2,

    upgradesLabel: t("upgradeListTitle"),
  }
];

  const momentSlides = [
  {
    id: "pool",
    image: "/images/homepage/acik-havuz.webp",
    title: t("momentsPoolTitle"),
    subtitle: t("momentsPoolDescription"),
  },
  {
    id: "spa",
    image: "/images/homepage/spa-1.webp",
    title: t("momentsSpaTitle"),
    subtitle: t("momentsSpaDescription"),
  },
  {
    id: "aquapark",
    image: "/images/aquapark/aquapark-1.webp",
    title: t("momentsAquaparkTitle"),
    subtitle: t("momentsAquaparkDescription"),
  },
];


  return (
    <main className="w-full overflow-hidden">

      {/* <OffersHero
        title={t("title")}
        description={t("description")}
        discoverLabel={t("discoverMore")}
      /> */}

      <OffersBenefits locale={locale} />

      <OffersMomentsCarousel
  slides={momentSlides}
  eyebrow="SY Hotels Luxury Belek"
  heading={t("momentsTitle")}
  description={t("momentsDescription")}
/>

      <OfferShowcase
        offers={showcaseOffers}
        label={t("offerLabel")}
        discoverMore={t("discoverMore")}
         locale={locale}
      />

      <OffersExperience
        eyebrow={t("experienceEyebrow")}
        title={t("experienceTitle")}
        description={t("experienceDescription")}
      />
      
      {/* <OffersFlights
  eyebrow={t("flightsEyebrow")}
  title={t("flightsTitle")}
  description={t("flightsDescription")}
  arrivalLabel={t("flightsArrival")}
  selectPartnerLabel={t("flightsPartners")}
  searchFlightsLabel={t("flightsSearch")}
  disclaimer={t("flightsDisclaimer")}
/> */}

      <OffersFlights2
  eyebrow={t("flightsEyebrow")}
  title={t("flightsTitle")}
  description={t("flightsDescription")}
  arrivalLabel={t("flightsArrival")}
  selectPartnerLabel={t("flightsPartners")}
  searchFlightsLabel={t("flightsSearch")}
  disclaimer={t("flightsDisclaimer")}
/>

      <OffersContact
        eyebrow={t("contactEyebrow")}
        title={t("contactHeading")}
        description={t("contactDescription")}
        bookNow={t("bookNow")}
        contactTitle={t("contactTitle")}
        callLabel={t("callLabel")}
        emailLabel={t("emailLabel")}
      />

    </main>
  );
}

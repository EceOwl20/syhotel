import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import OffersHero from "@/components/offers/OffersHero";
import OfferShowcase from "@/components/offers/OfferShowcase";
import OffersExperience from "@/components/offers/OffersExperience";
import OffersContact from "@/components/offers/OffersContact";
import OffersBenefits from "@/components/offers/OffersBenefits";
import OffersMomentsCarousel from "@/components/offers/OffersMomentsCarousel";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Offers" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    // Geçici içerikler için:
    robots: { index: false, follow: true },
  };
}

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
      image: "/images/pools/kapali-havuz-3.webp",
    },
    {
      id: "offer-02",
      title: t("offer02"),
      description: t("description02"),
      image: "/images/pools/bblok-acik-havuz-11.webp",
    },
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

      <OffersHero
        title={t("title")}
        description={t("description")}
        discoverLabel={t("discoverMore")}
      />

      <OffersBenefits locale={locale} />

      <OffersMomentsCarousel
  slides={momentSlides}
  eyebrow="SY HOTELS BELEK"
  heading={t("momentsTitle")}
  description={t("momentsDescription")}
/>

      <OfferShowcase
        offers={showcaseOffers}
        label={t("offerLabel")}
        discoverMore={t("discoverMore")}
      />

      <OffersExperience
        eyebrow={t("experienceEyebrow")}
        title={t("experienceTitle")}
        description={t("experienceDescription")}
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
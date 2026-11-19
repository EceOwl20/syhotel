import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FiArrowUpRight } from "react-icons/fi";

import OffersGallery from "./OffersGallery";
import { offersGallery } from "@/data/offersGallery";
import { benefitOffers, hotelRatings } from "@/data/offerBenefits";
import { getOfferImage } from "@/lib/offerImages";

type Props = {
  locale: string;
};

export default async function OffersBenefits({ locale }: Props) {
  const t = await getTranslations({
    locale,
    namespace: "OffersBenefits",
  });

  const galleryLabels = {
    galleryTitle: t("galleryTitle"),
    rooms: t("galleryRooms"),
    gastronomy: t("galleryGastronomy"),
    pools: t("galleryPools"),
    spa: t("gallerySpa"),
    entertainment: t("galleryEntertainment"),
    close: t("galleryClose"),
    next: t("galleryNext"),
    previous: t("galleryPrevious"),
    viewImage: t("galleryViewImage"),
  };

  return (
    <section className="w-full bg-[#f8f6f3] px-5 py-10 md:px-8 md:py-16 lg:pb-20">
      <div className="mx-auto max-w-[1650px] 3xl:max-w-[1800px]">
        {/* MAIN LAYOUT */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT COLUMN */}
          <div className="flex min-w-0 flex-col gap-5">
            {/* MAIN HOTEL VISUAL */}
            <div className="group relative min-h-[480px] flex-1 overflow-hidden md:min-h-[550px]">
              <Image
                src={getOfferImage(1, locale)}
                alt="SY Hotels Belek campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" /> */}

              {/* CORNER LABEL */}
              {/* <div className="absolute left-6 top-6 border border-white/70 px-5 py-3 text-[10px] font-light uppercase tracking-[0.2em] text-white md:left-9 md:top-9">
                BOUTIQUE LUXURY
              </div> */}

              {/* IMAGE CONTENT */}
              {/* <div className="absolute bottom-8 left-7 right-7 text-white md:bottom-12 md:left-12 md:right-12">
                <span className="text-[11px] font-light uppercase tracking-[0.3em] text-white/80">
                  THE SY HOTELS EXPERIENCE
                </span>

                <h3 className="mt-5 max-w-[520px] text-[35px] font-extralight leading-tight tracking-[0.04em] md:text-[52px]">
                  {t("imageHeading")}
                </h3>

                <div className="mt-7 h-px w-16 bg-white/70" />
              </div> */}
            </div>

            {/* HOTEL PHOTO GALLERY */}
            <OffersGallery categories={offersGallery} labels={galleryLabels} />
          </div>

          {/* RIGHT COLUMN - CAMPAIGN IMAGES */}
          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
            {benefitOffers.map((offer) => (
              <article
                key={offer.id}
                className="group relative min-h-0 overflow-hidden bg-[#172A27] aspect-[4/3] lg:aspect-auto"
              >
                <Image
                  src={getOfferImage(offer.imageNumber, locale)}
                  alt={t(offer.titleKey)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />

                {offer.href && (
                  <a
                    href={offer.href}
                    aria-label={t(offer.titleKey)}
                    className="absolute inset-0 z-10"
                  >
                    <span className="sr-only">{t("discoverMore")}</span>
                  </a>
                )}
              </article>
            ))}
          </div>

          {/* HOTEL RATINGS - FULL WIDTH */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:col-span-2 lg:mt-1 lg:gap-5">
            {hotelRatings.map((rating) => {
              const percentage = (rating.score / rating.maxScore) * 100;

              return (
                <a
                  key={rating.id}
                  href={rating.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${rating.name}: ${rating.score} / ${rating.maxScore}`}
                  className="
                    group relative flex min-w-0 flex-col
                    border border-[#d9cfc4]/60
                    bg-white px-4 py-6
                    transition-all duration-500
                    hover:border-[#b9876b]
                    hover:bg-[#f5f0eb]
                    md:px-6 lg:px-8 lg:py-7
                  "
                >
                  {/* PROVIDER */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[12px] font-medium text-[#745444] md:text-[14px]">
                      {rating.name}
                    </span>

                    <FiArrowUpRight
                      size={16}
                      className="shrink-0 text-[#948475] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* SCORE */}
                  <div className="mt-7 flex items-baseline gap-1.5">
                    <span className="text-[36px] font-extralight leading-none text-[#745444] md:text-[43px] lg:text-[48px]">
                      {rating.score.toFixed(1)}
                    </span>

                    <span className="text-[13px] font-light text-[#948475]">
                      / {rating.maxScore}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="mt-6 h-[3px] w-full overflow-hidden bg-[#e8e1d9]">
                    <div
                      className="h-full bg-[#b9876b]"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  {/* LABEL */}
                  <span className="mt-4 text-[10px] font-light uppercase tracking-[0.15em] text-[#948475]">
                    {t("guestRating")}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <p className="mt-8 text-center text-[11px] font-light leading-6 text-[#948475]">
          {t("disclaimer")}
        </p>

        <p className="mt-2 text-center text-[11px] font-light text-[#948475]">
          {t("ratingDisclaimer")}
        </p>
      </div>
    </section>
  );
}

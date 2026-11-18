import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FiArrowUpRight } from "react-icons/fi";
import OffersGallery from "./OffersGallery";
import { offersGallery } from "@/data/offersGallery";

import { benefitOffers, hotelRatings } from "@/data/offerBenefits";

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
      <div className="mx-auto max-w-[1600px]">
        {/* SECTION HEADER */}
        {/* <div className="mb-3 text-center md:mb-5">

          <span className="text-[11px] font-light uppercase tracking-[0.3em] text-[#948475]">
            SY HOTELS BELEK
          </span>

          <h2 className="mt-2 text-[32px] font-extralight uppercase tracking-[0.09em] text-[#745444] md:text-[46px]">
            {t("title")}
          </h2>

          <div className="mx-auto my-2 h-px w-16 bg-[#b9876b]" />

          <p className="mx-auto max-w-[620px] text-[14px] font-light leading-8 text-[#8e7d6c]">
            {t("description")}
          </p>

        </div> */}

        {/* MAIN LAYOUT */}
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT MAIN VISUAL */}
          <div className="flex min-w-0 flex-col gap-5">
            <div className="group relative min-h-[480px] flex-1 overflow-hidden bg-[#d9d0c6] md:min-h-[600px]">
              <Image
                src="/images/homepage/acik-havuz.webp"
                alt="SY Hotels Belek swimming pool"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />

              {/* CORNER LABEL */}
              <div className="absolute left-6 top-6 border border-white/70 px-5 py-3 text-[10px] font-light uppercase tracking-[0.2em] text-white md:left-9 md:top-9">
                BOUTIQUE LUXURY
              </div>

              {/* IMAGE CONTENT */}
              <div className="absolute bottom-8 left-7 right-7 text-white md:bottom-12 md:left-12 md:right-12">
                <span className="text-[11px] font-light uppercase tracking-[0.3em] text-white/80">
                  THE SY HOTELS EXPERIENCE
                </span>

                <h3 className="mt-5 max-w-[520px] text-[35px] font-extralight leading-tight tracking-[0.04em] md:text-[52px]">
                  {t("imageHeading")}
                </h3>

                <div className="mt-7 h-px w-16 bg-white/70" />
              </div>
            </div>

            {/* HOTEL PHOTO GALLERY */}
            <OffersGallery categories={offersGallery} labels={galleryLabels} />

            {/* HOTEL RATINGS */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
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
          group relative flex flex-col
          border border-[#d9cfc4]/60
          bg-white px-4 py-6
          transition-all duration-500
          hover:border-[#b9876b]
          hover:bg-[#f5f0eb]
          md:px-6
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
                      <span className="text-[36px] font-extralight leading-none text-[#745444] md:text-[43px]">
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
                        style={{ width: `${percentage}%` }}
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

          {/* RIGHT OFFERS */}
          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {benefitOffers.map((offer, index) => (
              <article
                key={offer.id}
                className="group relative min-h-[300px] overflow-hidden bg-[#65584d] md:min-h-[340px]"
              >
                <Image
                  src={offer.image}
                  alt={t(offer.titleKey)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#251c18]/85 via-[#251c18]/55 to-[#251c18]/30" />

                {/* NUMBER */}
                <span className="absolute right-7 top-7 text-[13px] font-extralight tracking-[0.1em] text-white/60">
                  0{index + 1}
                </span>

                {/* CONTENT */}
                <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-center px-8 py-12 text-white md:min-h-[340px] md:px-12">
                  <span className="text-[10px] font-light uppercase tracking-[0.25em] text-white/80">
                    {t(offer.categoryKey)}
                  </span>

                  <div className="mt-5 flex flex-wrap items-baseline gap-3">
                    <span className="text-[64px] font-extralight leading-none tracking-[-0.04em] md:text-[80px]">
                      {offer.discount}
                      {offer.showPercent && "%"}
                    </span>

                    <span className="text-[18px] font-light uppercase tracking-[0.1em]">
                      {t(offer.suffixKey)}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[23px] font-light tracking-[0.02em] md:text-[27px]">
                    {t(offer.titleKey)}
                  </h3>

                  <p className="mt-3 max-w-[540px] text-[13px] lg:text-[15px] font-light leading-6 text-white/85 lg:font-normal">
                    {t(offer.descriptionKey)}
                  </p>

                  {/* <span className="mt-3 text-[10px] font-light italic text-white/70">
                    
                  </span> */}

                  {offer.href && (
                    <a
                      href={offer.href}
                      className="mt-7 flex w-fit items-center gap-4 border-b border-white/60 pb-2 text-[11px] font-light uppercase tracking-[0.15em] transition-all duration-300 hover:gap-6"
                    >
                      {t("discoverMore")}
                      <FiArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
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

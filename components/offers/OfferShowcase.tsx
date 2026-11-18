
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export type ShowcaseOffer = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  upgrades?: {
    from: string;
    to: string;
  }[];
  upgradesLabel?: string;
};

type Props = {
  offers: ShowcaseOffer[];
  label: string;
  discoverMore: string;
};

export default function OfferShowcase({
  offers,
  label,
  discoverMore,
}: Props) {
  return (
    <section
      id="offers-content"
      className="bg-[#f8f6f3] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1500px] space-y-20 md:space-y-28">
        {offers.map((offer, index) => (
          <article
            key={offer.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
          >
            {/* IMAGE */}
            <div
              className={`group relative overflow-hidden bg-[#e8e4de] ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <span className="absolute bottom-6 left-6 text-5xl font-extralight text-white/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* CONTENT */}
            <div className="mx-auto w-full max-w-[630px] py-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#948475]">
                {label}
              </span>

              {/* TITLE */}
              <h2 className="mt-5 text-[27px] font-extralight uppercase leading-[1.35] tracking-[0.04em] text-[#776a5f] md:text-[36px] lg:text-[38px]">
                {offer.title}
              </h2>

              <div className="my-6 h-px w-16 bg-[#948475]" />

              {/* DESCRIPTION */}
              <p className="text-[14px] font-light leading-7 text-[#706961] md:text-[15px]">
                {offer.description}
              </p>

              {/* ROOM UPGRADE LIST */}
              {offer.upgrades && offer.upgrades.length > 0 && (
                <div className="mt-7">
                  {offer.upgradesLabel && (
                    <h3 className="mb-4 text-[12px] font-normal uppercase tracking-[0.15em] text-[#948475]">
                      {offer.upgradesLabel}
                    </h3>
                  )}

                  <ul className="space-y-3">
                    {offer.upgrades.map((upgrade) => (
                      <li
                        key={`${upgrade.from}-${upgrade.to}`}
                        className="flex items-start gap-3 text-[13px] font-light leading-6 text-[#706961] md:text-[14px]"
                      >
                        <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#b9876b]" />

                        <span>
                          {upgrade.from}
                          <span className="mx-2 text-[#b9876b]">
                            →
                          </span>
                          <span className="font-normal text-[#745444]">
                            {upgrade.to}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* DISCOVER MORE */}
              {offer.href && (
                <a
                  href={offer.href}
                  className="group mt-10 inline-flex items-center gap-8 border-b border-[#948475] pb-3 text-xs uppercase tracking-[0.18em] text-[#948475]"
                >
                  {discoverMore}

                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

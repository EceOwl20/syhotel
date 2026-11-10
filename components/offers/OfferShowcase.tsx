import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export type ShowcaseOffer = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
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
            <div className="mx-auto w-full max-w-[480px] py-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#948475]">
                {label}
              </span>

              <h2 className="mt-6 text-3xl font-extralight uppercase leading-snug tracking-[0.05em] text-[#776a5f] md:text-5xl">
                {offer.title}
              </h2>

              <div className="my-8 h-px w-16 bg-[#948475]" />

              <p className="text-[15px] font-light leading-8 text-[#706961]">
                {offer.description}
              </p>

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
import Image from "next/image";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

type FlightPartner = {
  id: string;
  name: string;
  url: string;
  logo?: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  arrivalLabel: string;
  selectPartnerLabel: string;
  searchFlightsLabel: string;
  disclaimer: string;
};

const flightPartners: FlightPartner[] = [
  {
    id: "pegasus",
    name: "Pegasus",
    url: "https://www.flypgs.com/en/cities/flights-to-antalya",
    logo: "/images/offers/pegasus.webp",
  },
  {
    id: "skyscanner",
    name: "Skyscanner",
    url: "https://www.skyscanner.net/flights-to/ayt/cheap-flights-to-antalya-airport.html",
    logo: "/images/offers/skyscanner.png",
  },
  {
    id: "corendon",
    name: "Corendon",
    url: "https://www.corendonairlines.com/turkey/antalya-airport",
    logo: "/images/offers/corendon.png",
  },
  {
    id: "turkish",
    name: "Turkish Airlines",
    url: "https://www.turkishairlines.com/en-int/flights/flights-to-antalya",
    logo: "/images/offers/turkish-airlines.jpeg",
  },
  {
    id: "aviasales",
    name: "Aviasales",
    url: "https://www.aviasales.com/",
    logo: "/images/offers/aviasales.jpeg",
  },
];

export default function OffersFlights({
  eyebrow,
  title,
  description,
  arrivalLabel,
  selectPartnerLabel,
  searchFlightsLabel,
  disclaimer,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f6f2ed] px-5 py-14 md:px-8 md:py-24">
      {/* Soft ambient background glows (same palette) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#b9876b]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#745444]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1600px] overflow-hidden rounded-[32px] border border-[#e3d7cc] bg-white shadow-[0_30px_80px_-20px_rgba(116,84,68,0.18)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT IMAGE */}
        <div className="group/image relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[500px]">
          <Image
            src="/images/offers/flight-plane.png"
            alt="Flight to Antalya"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-[center_45%] transition-transform duration-[1400ms] ease-out group-hover/image:scale-105 motion-reduce:transition-none motion-reduce:group-hover/image:scale-100"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#745444]/15 to-transparent" />

          {/* Destination badge */}
          <div className="absolute bottom-6 left-6 min-w-[240px] rounded-3xl border border-white/30 bg-white/10 px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md md:bottom-8 md:left-8">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              {arrivalLabel}
            </span>

            <div className="mt-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15">
                <FiMapPin className="text-white" size={16} />
              </span>
              <span className="text-[32px] font-extralight tracking-[0.1em] text-white md:text-[40px]">
                AYT
              </span>
            </div>

            <div className="my-3 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />

            <span className="block text-[11px] uppercase tracking-[0.14em] text-white/85">
              Antalya International Airport
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-12 xl:px-14">
          <span className="inline-flex w-fit items-center gap-3 text-[10px] font-light uppercase tracking-[0.28em] text-[#948475]">
            <span className="h-px w-8 bg-[#b9876b]" />
            {eyebrow}
          </span>

          <h2 className="mt-5 text-[28px] font-extralight uppercase leading-[1.1] tracking-[0.08em] text-[#745444] md:text-[36px] xl:text-[44px]">
            {title}
          </h2>

          <div className="my-3 h-px w-20 bg-gradient-to-r from-[#b9876b] to-transparent" />

          <p className="max-w-[520px] text-[14px] font-light leading-8 text-[#8e7d6c] md:text-[15px]">
            {description}
          </p>

          <h3 className="mt-5 flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.22em] text-[#948475]">
            <span>{selectPartnerLabel}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#e5dbd1] to-transparent" />
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {flightPartners.map((partner, index) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} - ${searchFlightsLabel}`}
                className="group relative flex min-h-[96px] flex-col justify-between overflow-hidden rounded-2xl border border-[#e5dbd1] bg-[#fcfbf9] px-5 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#b9876b] hover:bg-white hover:shadow-[0_18px_40px_-12px_rgba(116,84,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9876b] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {/* Accent line on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#b9876b] to-[#745444] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <div className="flex items-center justify-between gap-4">
                  {partner.logo ? (
                    <div className="relative h-8 w-[120px]">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="120px"
                        className="object-contain object-left"
                      />
                    </div>
                  ) : (
                    <span className="text-[16px] font-medium text-[#745444]">
                      {partner.name}
                    </span>
                  )}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e5dbd1] bg-white text-[#948475] transition-all duration-300 group-hover:border-[#b9876b] group-hover:bg-[#b9876b] group-hover:text-white">
                    <FiArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    />
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-[10px] font-light uppercase tracking-[0.18em] text-[#948475] transition-colors duration-300 group-hover:text-[#745444]">
                    {searchFlightsLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-extralight tabular-nums tracking-[0.18em] text-[#b9876b]/60"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-[560px] border-l-2 border-[#e5dbd1] pl-4 text-[11px] font-light leading-6 text-[#948475]">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
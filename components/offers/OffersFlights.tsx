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
    <section className="relative isolate w-full overflow-hidden bg-[#745444] mt-16 lg:mt-24">
      {/* FULL-WIDTH BACKGROUND IMAGE */}
      <Image
        src="/images/offers/flight-plane.png"
        alt="Flight to Antalya"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[center_45%]"
        priority={false}
      />

      {/* Sunset-style overlays (warm palette tones) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#745444]/55 via-black/25 to-black/75"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#b9876b]/30 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#b9876b]/25 blur-3xl"
      />

      <div className="mx-auto flex min-h-[540px] max-w-[1600px] flex-col justify-between gap-14 px-5 py-14 md:min-h-[550px] md:px-10 md:py-20 xl:px-14">
        {/* TOP: heading + destination badge */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.28em] text-white/75">
              <span className="h-px w-8 bg-[#b9876b]" />
              {eyebrow}
            </span>

            <h2 className="mt-5 text-[36px] font-extralight uppercase leading-[1.1] tracking-[0.08em] text-white md:text-[36px] xl:text-[50px]">
              {title}
            </h2>

            <div className="my-7 h-px w-20 bg-gradient-to-r from-[#b9876b] to-transparent" />

            <p className="max-w-[520px] text-[14px] font-light leading-8 text-white/80 md:text-[15px]">
              {description}
            </p>
          </div>

          {/* Destination badge */}
          <div className="w-fit min-w-[250px] rounded-3xl border border-white/30 bg-white/10 px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md">
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
              <span className="text-[28px] font-extralight tracking-[0.1em] text-white md:text-[36px]">
                AYT
              </span>
            </div>

            <div className="my-3 h-px w-full bg-gradient-to-r from-white/40 to-transparent" />

            <span className="block text-[11px] uppercase tracking-[0.14em] text-white/85">
              Antalya International Airport
            </span>
          </div>
        </div>

        {/* BOTTOM: partners in a row */}
        <div>
          <h3 className="flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.22em] text-white/75">
            <span>{selectPartnerLabel}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {flightPartners.map((partner, index) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} - ${searchFlightsLabel}`}
                className="group relative flex min-h-[110px] flex-col justify-between overflow-hidden rounded-2xl border border-white/40 bg-[#fcfbf9]/90 px-5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#b9876b] hover:bg-white hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9876b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#745444] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {/* Accent line on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#b9876b] to-[#745444] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <div className="flex items-center justify-between gap-3">
                  {partner.logo ? (
                    <div className="relative h-8 w-[110px]">
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
                    className="text-[10px] font-extralight tabular-nums tracking-[0.18em] text-[#b9876b]/70"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-[640px] border-l-2 border-white/30 pl-4 text-[11px] font-light leading-6 text-white/70">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
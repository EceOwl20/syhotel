import Image from "next/image";
import { FiArrowUpRight, FiPhone, FiMail } from "react-icons/fi";
import ReservationLink from "@/components/generalComponents/ReservationLink";
import img1 from "@/public/images/rooms/deluxeRoom/deluxe-rooms-3.webp";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  bookNow: string;
  contactTitle: string;
  callLabel: string;
  emailLabel: string;
};

export default function OffersContact({
  eyebrow,
  title,
  description,
  bookNow,
  contactTitle,
  callLabel,
  emailLabel,
}: Props) {
  return (
    <section className="bg-[#252b29] text-white mt-10 lg:mt-24">
      <div className="grid min-h-[650px] lg:grid-cols-2">

        {/* LEFT */}
        <div className="flex flex-col justify-center px-7 py-24 md:px-16 lg:px-20 xl:px-28">

          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8b59c]">
            {eyebrow}
          </span>

          <h2 className="mt-8 max-w-xl text-4xl font-extralight uppercase leading-[1.2] tracking-[0.04em] md:text-5xl xl:text-6xl">
            {title}
          </h2>

          <div className="my-9 h-px w-16 bg-[#c8b59c]" />

          <p className="max-w-md text-sm font-light leading-8 text-white/70 md:text-base">
            {description}
          </p>

          <ReservationLink
            className="group mt-12 inline-flex w-fit items-center gap-10 border border-[#c8b59c] px-8 py-5 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[#c8b59c] hover:text-[#252b29]"
          >
            {bookNow}
            <FiArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </ReservationLink>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[420px] overflow-hidden bg-[#5c554e] lg:min-h-[650px]">
          <Image
            src={img1}
            alt="SY Hotels Luxury Belek swim-up accommodation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* CONTACT STRIP */}
      <div className="border-t border-white/15 bg-[#f5f2ed] px-6 py-10 text-[#5c5147] md:px-12 md:py-14">

        <div className="mx-auto grid max-w-[1400px] gap-9 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-14">

          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#948475]">
              SY HOTELS
            </span>

            <h3 className="mt-3 text-2xl font-extralight uppercase tracking-[0.06em] md:text-3xl">
              {contactTitle}
            </h3>
          </div>

          <a
            href="tel:+902422054787"
            className="group flex items-center gap-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#948475]/50 transition-colors group-hover:bg-[#948475] group-hover:text-white">
              <FiPhone size={18} />
            </span>

            <span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#948475]">
                {callLabel}
              </span>

              <span className="mt-1 block text-sm">
                +90 242 205 47 87
              </span>
            </span>
          </a>

          <a
            href="mailto:callcenter@syhotels.com"
            className="group flex items-center gap-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#948475]/50 transition-colors group-hover:bg-[#948475] group-hover:text-white">
              <FiMail size={18} />
            </span>

            <span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#948475]">
                {emailLabel}
              </span>

              <span className="mt-1 block text-sm">
                callcenter@syhotels.com
              </span>
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

"use client";

import { FiPhone } from "react-icons/fi";

type MobileBookingBarProps = {
  phoneNumber: string;
  bookingUrl: string;
  bookNowText?: string;
};

export default function MobileBookingBar({
  phoneNumber,
  bookingUrl,
  bookNowText = "Book Now",
}: MobileBookingBarProps) {
  return (
    <div className="pointer-events-none fixed bottom-3 left-0 z-40 w-full md:hidden">
      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call hotel"
        className="
          pointer-events-auto
          absolute bottom-0 left-[5px]
          flex h-[54px] w-[54px]
          items-center justify-center
          rounded-full border border-white/80
          bg-[#292929] text-white
          shadow-[0_4px_18px_rgba(0,0,0,0.2)]
        "
      >
        <FiPhone size={24} className="animate-phone-ring" />
      </a>

      {/* Book Now Button */}
      <div className="mx-auto w-full max-w-[420px] px-[85px]">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            pointer-events-auto
            flex h-[46px] w-full
            items-center justify-center
            bg-black px-3
            text-center text-[16px]
            font-semibold text-white
            shadow-[0_4px_15px_rgba(0,0,0,0.15)]
            transition-all duration-300
            active:scale-[0.97]
          "
        >
          {bookNowText}
        </a>
      </div>
    </div>
  );
}
import { FiArrowUpRight } from "react-icons/fi";

type RoomVirtualTourProps = {
  title: string;
  description?: string;
  tourUrl: string;
  openTourText: string;
};

export default function RoomVirtualTour({
  title,
  description,
  tourUrl,
  openTourText,
}: RoomVirtualTourProps) {
  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1500px]">

        {/* Section header */}
        <div className="mx-auto mb-10 max-w-[850px] text-center">
          <span className="mb-4 block text-[12px] font-light tracking-[0.2em] text-[#A58B6F]">
            SY HOTELS
          </span>

          <h2 className="text-[26px] leading-[1.35] font-extralight tracking-[0.04em] text-[#292929] md:text-[40px] lg:text-[44px]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-[1.7] text-[#7A7A7A] md:text-[16px]">
              {description}
            </p>
          )}
        </div>

        {/* 360° Viewer */}
        <div className="relative overflow-hidden bg-[#e9e5df]">
          <div className="relative h-[380px] w-full sm:h-[480px] md:h-[580px] lg:h-[640px]">
            <iframe
              src={tourUrl}
              title={title}
              loading="lazy"
              allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>

        {/* Bottom action */}
        <div className="mt-6 flex justify-center">
          <a
            href={tourUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-[#292929] px-7 py-3.5 text-[12px] font-medium tracking-[0.08em] text-[#292929] transition-all duration-300 hover:bg-[#292929] hover:text-white"
          >
            {openTourText}

            <FiArrowUpRight className="text-[17px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
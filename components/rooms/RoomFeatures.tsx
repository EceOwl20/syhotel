
import type { RoomDetail } from "@/data/roomTypes";

type RoomFeaturesProps = {
  features: RoomDetail["features"];
};

export default function RoomFeatures({
  features,
}: RoomFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <div
      className="
        mx-auto grid w-full max-w-[1100px]
        grid-cols-2
        gap-x-5 gap-y-5
        px-4 py-8
        text-[#948475]
        sm:gap-x-8 sm:px-8
        lg:flex lg:flex-wrap lg:items-center
        lg:justify-center lg:gap-8 lg:p-10
      "
    >
      {features.map((feature) => (
        <div
          key={feature.id}
          className="
            flex min-w-0 items-center
            justify-start gap-2
            lg:justify-center lg:gap-3
          "
        >
          <i
            className={`
              ${feature.icon}
              shrink-0 text-[32px] leading-none
              sm:text-[38px]
              lg:text-[40px]
            `}
            aria-hidden="true"
          />

          <p
            className="
              text-[14px] leading-snug font-light
              wrap-break-word
              sm:text-[16px]
              lg:text-[20px]
            "
          >
            {feature.label}
          </p>
        </div>
      ))}
    </div>
  );
}

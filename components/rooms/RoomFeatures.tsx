
import type { RoomFeature } from "@/data/rooms";

type RoomFeaturesProps = {
  features: RoomFeature[];
};

export default function RoomFeatures({
  features,
}: RoomFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-around gap-4 p-10 text-[20px] font-light text-[#948475]">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex items-center justify-center gap-2"
        >
          <i
            className={`${feature.icon} text-[40px] leading-none`}
            aria-hidden="true"
          />

          <p>{feature.label}</p>
        </div>
      ))}
    </div>
  );
}

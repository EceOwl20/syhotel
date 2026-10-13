
import GastronomyCard, {
  type GastronomyItem,
} from "./GastronomyCard";

type GastronomySectionProps = {
  items: GastronomyItem[];
  title?: string;
  description?: string;
};

export default function GastronomySection({
  items,
  title = "GASTRONOMİ",
  description,
}: GastronomySectionProps) {
  return (
    <section className="w-full bg-[#b9876b] px-5 py-16 md:px-9 md:py-20">
      <div className="mx-auto max-w-[1800px]">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center text-white">
          <h2 className="text-[32px] font-extralight leading-[1.2] md:text-[40px]">
            {title}
          </h2>

          {description && (
            <p className="mt-6 max-w-[1500px] text-[15px] font-light leading-[1.65] md:text-[16px]">
              {description}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <GastronomyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

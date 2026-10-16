import Image from "next/image";

type RegionItem = {
  id: string;
  image: string;
  title: string;
  description: string;
};

type ExploreRegionSectionProps = {
  title: string;
  description: string;
  items: RegionItem[];
};

export default function ExploreRegionSection({
  title,
  description,
  items,
}: ExploreRegionSectionProps) {
  return (
    <section className="w-full bg-white px-5 pt-16 pb-10 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1500px]">

        {/* HEADING */}
        <div className="mb-9 text-[#858585]">
          <h1 className="mb-5 text-center text-[30px] font-extralight tracking-[0.02em] md:text-[42px]">
            {title}
          </h1>

          <p className="text-[14px] leading-[1.8] font-light md:text-[15px]">
            {description}
          </p>
        </div>

        {/* PLACES GRID */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-9 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex min-w-0 flex-col"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>

              <h2 className="mt-4 text-[21px] font-extralight tracking-[0.01em] text-[#858585] md:text-[23px]">
                {item.title}
              </h2>

              <p className="mt-4 text-[14px] leading-[1.75] font-light text-[#858585] md:text-[15px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export type AgencyResource = {
  id: string;
  title: string;
  image: string;
  href?: string;
};

type AgencyResourcesSectionProps = {
  title: string;
  paragraphs: string[];
  signature: string;
  team: string;
  resources: AgencyResource[];
};

export default function AgencyResourcesSection({
  title,
  paragraphs,
  signature,
  team,
  resources,
}: AgencyResourcesSectionProps) {
  return (
    <section className="w-full bg-white px-2 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1800px]">

        {/* TITLE & DESCRIPTION */}
        <div className="mb-12 flex flex-col items-center text-center text-[#8B7C6A]">
          <h1 className="text-[32px] font-extralight tracking-[0.04em] md:text-[42px]">
            {title}
          </h1>

          <div className="mt-6 flex max-w-[1650px] flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[13px] leading-[1.9] font-light md:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-light md:text-[15px]">
            {signature}
          </p>

          <p className="mt-5 text-[13px] leading-[1.8] font-light whitespace-pre-line md:text-[15px]">
            {team}
          </p>
        </div>

        {/* RESOURCE CARDS */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-5 lg:grid-cols-4">
          {resources.map((resource) => {
            const content = (
              <>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f2f0ef]">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-5 text-center text-[18px] font-normal text-[#8B7C6A] md:text-[24px]">
                  {resource.title}
                </h2>
              </>
            );

            return resource.href ? (
              <a
                key={resource.id}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {content}
              </a>
            ) : (
              <div key={resource.id} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

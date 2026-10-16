type InformationSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type RegionInformationSectionProps = {
  sections: InformationSection[];
};

export default function RegionInformationSection({
  sections,
}: RegionInformationSectionProps) {
  return (
    <section className="w-full bg-white px-5 pb-20 md:px-8">
      <div className="mx-auto max-w-[1500px] space-y-12 text-[#858585]">
        {sections.map((section, index) => (
          <div key={`${section.title}-${index}`}>
            <h2 className="mb-5 text-[20px] font-extralight tracking-[0.02em] md:text-[24px]">
              {section.title}
            </h2>

            {section.items && (
              <ul className="list-disc space-y-1 pl-6 text-[14px] leading-[1.8] font-light md:text-[15px]">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}

            {section.paragraphs && (
              <div className="space-y-5">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-[14px] leading-[1.8] font-light md:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
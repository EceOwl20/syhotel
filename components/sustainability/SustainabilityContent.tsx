import Image from "next/image";

type PolicySection = {
  title: string;
  items: string[];
};

type SustainabilityContentProps = {
  title: string;
  introduction: string;
  sections: PolicySection[];
  conclusion: string;
};

const certificates = [
  {
    src: "/images/sustainability/surdurulebilirlik-sertifikasi-TR.webp",
    alt: "SY Hotels Sürdürülebilir Turizm Sertifikası",
  },
  {
    src: "/images/sustainability/surdurulebilirlik-sertifikasi-EN.webp",
    alt: "SY Hotels Sustainable Tourism Certification",
  },
];

export default function SustainabilityContent({
  title,
  introduction,
  sections,
  conclusion,
}: SustainabilityContentProps) {
  return (
    <section className="w-full bg-white px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">

          {/* LEFT: POLICY CONTENT */}
          <div className="min-w-0 text-[#858585]">
            <h1 className="mx-auto mb-7 max-w-[1450px] text-center text-[28px] leading-[1.35] font-extralight tracking-[0.02em] md:text-[36px] lg:text-[40px]">
              {title}
            </h1>

            <p className="mb-9 text-[14px] leading-[1.9] font-light md:text-[15px]">
              {introduction}
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={`${section.title}-${index}`}>
                  <h2 className="mb-5 text-[14px] leading-[1.6] font-semibold">
                    {section.title}
                  </h2>

                  <ul className="list-disc space-y-2 pl-7 text-[14px] leading-[1.85] font-light md:text-[15px]">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-9 text-[14px] leading-[1.9] font-light md:text-[15px]">
              {conclusion}
            </p>
          </div>

          {/* RIGHT: CERTIFICATES */}
          <aside
            aria-label="Sustainability certificates"
            className="flex flex-col items-center gap-4 lg:pt-16"
          >
            {certificates.map((certificate) => (
              <div
                key={certificate.src}
                className="relative w-full max-w-[260px]"
              >
                <Image
                  src={certificate.src}
                  alt={certificate.alt}
                  width={280}
                  height={400}
                  sizes="(max-width: 1023px) 280px, 280px"
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
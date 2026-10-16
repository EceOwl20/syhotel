
type InfoTextSectionProps = {
  subtitle?: string;
  title: string;
  description: string;
  className?: string;
};

export default function InfoTextSection({
  subtitle,
  title,
  description,
  className = "",
}: InfoTextSectionProps) {
  return (
    <section
      className={`w-full bg-white px-6 py-14 text-[#948475] md:px-10 md:py-20 ${className}`}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        {subtitle && (
          <span className="mb-4 lg:mb-6 text-[12px] font-medium tracking-[0.2em] uppercase text-[#D9BDAF]">
            {subtitle}
          </span>
        )}

        <h1 className="text-[24px] leading-[1.2] font-light tracking-[0.02em] md:text-[36px] lg:text-[44px]">
          {title}
        </h1>

        <p className="mt-4 lg:mt-6 max-w-[1500px] text-[14px] leading-[1.9] font-light md:text-[16px]">
          {description}
        </p>
      </div>
    </section>
  );
}


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
      className={`w-full bg-white px-3 py-9 text-[#7A7A7A] md:px-10 md:py-20 ${className}`}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        {subtitle && (
          <span className="mb-5 lg:mb-6 text-[12px] font-medium tracking-[0.2em] uppercase text-[#797979]">
            {subtitle}
          </span>
        )}

        <h1 className="text-[24px] leading-[1.35] font-light tracking-[0.02em] md:text-[36px] lg:text-[44px] text-[#797979]">
          {title}
        </h1>

        <p className="mt-4 max-w-[1440px] text-[14px] leading-[1.66] font-light md:text-[16px] lg:mt-4">
          {description}
        </p>
      </div>
    </section>
  );
}

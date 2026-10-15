
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
          <span className="mb-3 text-[13px] font-light tracking-[0.2em] uppercase md:text-[15px]">
            {subtitle}
          </span>
        )}

        <h1 className="text-[34px] leading-[1.2] font-extralight tracking-[0.02em] md:text-[42px] lg:text-[48px]">
          {title}
        </h1>

        <p className="mt-6 max-w-[1500px] text-[13px] leading-[1.9] font-light md:text-[15px]">
          {description}
        </p>
      </div>
    </section>
  );
}

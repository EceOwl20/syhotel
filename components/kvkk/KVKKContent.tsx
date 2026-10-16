type KVKKContentProps = {
  eyebrow: string;
  title: string;
  intro: string;
  explanation: string;
  listIntro: string;
  purposes: string[];
  closing: string;
  policyInfo: string;
};

export default function KVKKContent({
  eyebrow,
  title,
  intro,
  explanation,
  listIntro,
  purposes,
  closing,
  policyInfo,
}: KVKKContentProps) {
  return (
    <section className="w-full bg-white px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] text-[#858585]">

        {/* HEADING */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-16">
          <span className="mb-5 text-[12px] font-normal tracking-[0.12em]">
            {eyebrow}
          </span>

          <h1 className="text-[30px] leading-[1.3] font-extralight tracking-[0.02em] md:text-[40px] lg:text-[44px]">
            {title}
          </h1>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-[13px] leading-[1.9] font-light md:text-[15px]">
          <p>{intro}</p>

          <p>{explanation}</p>

          <p>{listIntro}</p>

          <ul className="list-disc space-y-2 pl-6">
            {purposes.map((purpose, index) => (
              <li key={index}>{purpose}</li>
            ))}
          </ul>

          <p>{closing}</p>

          <p>{policyInfo}</p>
        </div>
      </div>
    </section>
  );
}
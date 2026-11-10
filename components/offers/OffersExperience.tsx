import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function OffersExperience({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <section className="relative flex min-h-[570px] items-center justify-center overflow-hidden bg-[#50483f] px-5 py-24 md:min-h-[700px]">

      <Image
        src="/images/homepage/acik-havuz.webp"
        alt="SY Hotels Belek pool experience"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[680px] border border-white/40 bg-[#282622]/35 px-7 py-14 text-center text-white backdrop-blur-sm md:px-16 md:py-20">

        <span className="text-[11px] uppercase tracking-[0.3em] text-white/80">
          {eyebrow}
        </span>

        <h2 className="mt-7 text-3xl font-extralight uppercase leading-tight tracking-[0.06em] md:text-5xl">
          {title}
        </h2>

        <div className="mx-auto my-8 h-px w-16 bg-white/70" />

        <p className="text-sm font-light leading-8 text-white/85 md:text-base">
          {description}
        </p>

      </div>
    </section>
  );
}
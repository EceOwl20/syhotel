import Image from "next/image";

type Props = {
  title: string;
  description: string;
  discoverLabel: string;
};

export default function OffersHero({
  title,
  description,
  discoverLabel,
}: Props) {
  return (
    <section className="relative flex min-h-[650px] h-[85svh] items-center justify-center overflow-hidden bg-[#50483f] text-white">

      <Image
        src="/images/homepage/acik-havuz.webp"
        alt="SY Hotels Luxury Belek swimming pool"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/55" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/85">
          SY Hotels Luxury Belek
        </p>

        <h1 className="text-5xl font-extralight uppercase leading-tight tracking-[0.12em] sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <div className="mx-auto my-8 h-px w-20 bg-white/70" />

        <p className="mx-auto max-w-xl text-sm font-light leading-8 text-white/90 md:text-base">
          {description}
        </p>
      </div>

      <a
        href="#offers-content"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {discoverLabel}
        </span>

        <span className="relative h-12 w-px overflow-hidden bg-white/30">
          <span className="absolute left-0 top-0 h-6 w-px animate-pulse bg-white" />
        </span>
      </a>

    </section>
  );
}
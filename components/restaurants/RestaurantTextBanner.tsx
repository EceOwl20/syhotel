
import Image from "next/image";

type RestaurantTextBannerProps = {
  image: string;
  title: string;
};

export default function RestaurantTextBanner({
  image,
  title,
}: RestaurantTextBannerProps) {
  return (
    <section className="relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[460px]">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      {/* Banner text */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] items-center px-6 md:px-12 lg:px-20">
        <h2 className="max-w-[900px] text-[30px] leading-[1.2] font-extralight tracking-[0.02em] text-white sm:text-[40px] lg:text-[52px]">
          {title}
        </h2>
      </div>
    </section>
  );
}

import Image, { type StaticImageData } from "next/image";
import { Link } from "@/i18n/navigation";

export type GastronomyHref =
  | {
      pathname: "/bars/[slug]";
      params: { slug: string };
    }
  | {
      pathname: "/restaurants/[slug]";
      params: { slug: string };
    };

export type GastronomyItem = {
  id: string;
  title: string;
  image: StaticImageData | string;
  href: GastronomyHref | null;
};

type GastronomyCardProps = {
  item: GastronomyItem;
};

export default function GastronomyCard({
  item,
}: GastronomyCardProps) {
  const hasLink = item.href !== null;

  const cardClassName =
    "relative block aspect-[2/3] w-full overflow-hidden";

  const content = (
    <>
      {/* Background image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        className={`
          object-cover
          transition-transform duration-350 ease-in-out
          ${
            hasLink
              ? "group-hover:scale-[1.07] group-focus-visible:scale-[1.07]"
              : ""
          }
        `}
      />

      {/* Category title */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex justify-center px-5">
        <span
          className={`
            flex w-full max-w-[290px]
            items-center justify-center
            bg-[#ada190] px-5 py-2
            text-center text-[16px] font-normal
            text-[#eee1d3]
            transition-colors duration-300
            md:text-[23px] md:font-light
            ${
              hasLink
                ? "group-hover:text-white group-focus-visible:text-white"
                : ""
            }
          `}
        >
          {item.title}
        </span>
      </div>
    </>
  );

  if (!item.href) {
    return (
      <div className={cardClassName}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      aria-label={item.title}
      className={`group ${cardClassName}`}
    >
      {content}
    </Link>
  );
}

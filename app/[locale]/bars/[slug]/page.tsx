
import { notFound } from "next/navigation";

import { bars } from "@/data/bars";
import { getBarDetail } from "@/lib/getBarDetail";

import BarDetailSection from "@/components/bars/BarDetailSection";
import MainBanner from "@/components/HomeComponents/MainBanner";
import ParticleLogo from "@/components/generalComponents/ParticleLogo";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return bars.map((bar) => ({
    slug: bar.slug,
  }));
}

export default async function BarDetailPage({
  params,
}: PageProps) {
  const { locale, slug } = await params;

  const bar = await getBarDetail(slug, locale);

  if (!bar) {
    notFound();
  }

  const slides = bar.gallery.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <main className="min-h-screen bg-[#f7f7f5]">

      {/* Dynamic bar banner */}
     
{/* Banner with particle logo */}

{/* Banner with particle logo */}
<div className="relative w-full overflow-hidden">

  {/* Main Banner */}
  {slides.length > 0 && (
    <MainBanner slides={slides} />
  )}

  {/* Bottom gradient overlay */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute inset-x-0 bottom-0 z-20
      h-[40%]
      bg-linear-to-t
      from-[#887565]/75
      via-[#887565]/30
      via-45%
      to-transparent
    "
  />

  {/* Bottom centered particle logo */}
  <div
    className="
      absolute bottom-5 left-1/2 z-30
      -translate-x-1/2
      md:bottom-[-5%] 
    "
  >
    <ParticleLogo
  src={bar.logo}
  width={460}
  height={300}
  padding={20}
  particleGap={1}
  particleSize={0.85}
  mouseRadius={50}
  color="#ffffff"
  detectionMode="alpha"
  entranceAnimation
  entranceDuration={1800}
/>
  </div>

</div>




      {/* Dynamic bar content */}
      <BarDetailSection
        title={bar.title}
        subtitle={bar.subtitle}
        description={bar.description}
        images={bar.gallery}
      />

    </main>
  );
}

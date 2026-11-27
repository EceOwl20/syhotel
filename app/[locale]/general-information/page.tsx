
import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import GeneralInformationContent from "@/components/generalInformation/GeneralInformationContent";
import StaticPageJsonLd from "@/components/seo/StaticPageJsonLd";
import { createTranslatedMetadata } from "@/lib/metadata";

export const generateMetadata = createTranslatedMetadata(
  "generalInformation",
  "/general-information",
);

export default function GeneralInformationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <StaticPageJsonLd
        metadataPage="generalInformation"
        pathname="/general-information"
      />

      <HalfImageBanner
        image="/images/general/maldiv-havuz-2.webp"
        overlayOpacity={0.45}
        showGradient
        gradientColor="#948475"
        gradientOpacity={1}
      />

      <GeneralInformationContent />
    </main>
  );
}

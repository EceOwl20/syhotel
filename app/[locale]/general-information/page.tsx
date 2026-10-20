
import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import GeneralInformationContent from "@/components/generalInformation/GeneralInformationContent";
import { createTranslatedMetadata } from "@/lib/metadata";

export const generateMetadata = createTranslatedMetadata(
  "GeneralInformation",
  "title",
);

export default function GeneralInformationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
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

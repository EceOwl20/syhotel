
import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import GeneralInformationContent from "@/components/generalInformation/GeneralInformationContent";

export default function GeneralInformationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <HalfImageBanner
        image="/images/homepage/acik-havuz.webp"
        imageAlt="SY Hotels Belek"
        overlayOpacity={0.25}
      />

      <GeneralInformationContent />
    </main>
  );
}

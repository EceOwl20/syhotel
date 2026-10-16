import { getTranslations } from "next-intl/server";

import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import ContactSection from "@/components/contact/ContactSection";

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <main className="min-h-screen bg-[#f7f7f5]">

      <HalfImageBanner
        image="/images/general/genel-gorunum-1.webp"
        imageAlt="SY Hotels Belek"
        logo="/logo/logo_favicon-beyaz.webp"
        overlayOpacity={0.5}
      />

      <ContactSection
        title={t("title")}
        description={t("description")}
        address={t("address")}
        reservationLabel={t("reservation")}
        hotelPhoneLabel={t("hotelPhone")}
        mapTitle={t("mapTitle")}
      />

    </main>
  );
}
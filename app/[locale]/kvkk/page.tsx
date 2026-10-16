import { getTranslations } from "next-intl/server";

import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import KVKKContent from "@/components/kvkk/KVKKContent";

export default async function KVKKPage() {
  const t = await getTranslations("KVKK");

  const purposes = [
    t("purposes.service"),
    t("purposes.contracts"),
    t("purposes.legal"),
    t("purposes.operations"),
  ];

  return (
    <main className="min-h-screen bg-white">
      <HalfImageBanner
        image="/images/general/aquarius-havuz-bar-6.webp"
        imageAlt="SY Hotels Belek"
        logo="/logo/logo_favicon-beyaz.webp"
        overlayOpacity={0.3}
      />

      <KVKKContent
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        explanation={t("explanation")}
        listIntro={t("listIntro")}
        purposes={purposes}
        closing={t("closing")}
        policyInfo={t("policyInfo")}
      />
    </main>
  );
}
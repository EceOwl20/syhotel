import { getTranslations } from "next-intl/server";

import HalfImageBanner from "@/components/generalComponents/HalfImageBanner";
import AgencyResourcesSection from "@/components/agencies/AgencyResourcesSection";
import { agencyResources } from "@/data/agencyResources";

export default async function AgenciesPage() {
  const t = await getTranslations("Agencies");

  const resources = agencyResources.map((resource) => ({
    ...resource,
    title: t(`resources.${resource.id}`),
  }));

  return (
    <main className="min-h-screen bg-white">

      <HalfImageBanner
        image="/images/general/aquarius-havuz-bar-6.webp"
        imageAlt="SY Hotels Belek"
        logo="/logo/logo_favicon-beyaz.webp"
        overlayOpacity={0.25}
      />

      <AgencyResourcesSection
        title={t("title")}
        paragraphs={[
          t("description1"),
          t("description2"),
        ]}
        signature={t("signature")}
        team={t("team")}
        resources={resources}
      />

    </main>
  );
}
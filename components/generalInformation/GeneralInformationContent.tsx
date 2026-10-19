
import { getTranslations } from "next-intl/server";

import GeneralInformationDetails from "./GeneralInformationDetails";
import GeneralInformationServices from "./GeneralInformationServices";

import {
  serviceGroups,
  type GeneralInformationBlock,
  type GeneralServiceId,
  type GeneralServiceGroupId,
} from "@/data/generalInformation";

export default async function GeneralInformationContent() {
  const t = await getTranslations("GeneralInformation");

  const blocks = t.raw(
    "details.blocks",
  ) as GeneralInformationBlock[];

  const groupTitles = {} as Record<
    GeneralServiceGroupId,
    string
  >;

  const services = {} as Record<
    GeneralServiceId,
    {
      title: string;
      description?: string;
    }
  >;

  for (const group of serviceGroups) {
    groupTitles[group.id] = t(
      `serviceGroups.${group.id}`,
    );

    for (const serviceId of group.columns.flat()) {
      services[serviceId] = {
        title: t(`services.${serviceId}.title`),
        description: t.has(
          `services.${serviceId}.description`,
        )
          ? t(`services.${serviceId}.description`)
          : undefined,
      };
    }
  }

  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1040px]">
        {/* Page heading */}
        <div className="mb-12 text-center text-[#7A7A7A]">
          <h1 className="text-[30px] leading-[1.35] font-extralight tracking-[0.02em] md:text-[44px]">
            {t("title")}
          </h1>

          <p className="mx-auto mt-5 max-w-[1040px] text-[14px] leading-[1.66] font-normal md:text-[16px]">
            {t("description")}
          </p>
        </div>

        {/* Main information columns */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <GeneralInformationDetails
            title={t("details.title")}
            blocks={blocks}
          />

          <GeneralInformationServices
            groupTitles={groupTitles}
            services={services}
          />
        </div>
      </div>
    </section>
  );
}

import {
  serviceGroups,
  serviceIcons,
} from "@/data/generalInformation";

import type {
  GeneralServiceId,
  GeneralServiceGroupId,
} from "@/data/generalInformation";

import Reveal from "@/components/HomeComponents/Reveal";

type Props = {
  groupTitles: Record<GeneralServiceGroupId, string>;
  services: Record<
    GeneralServiceId,
    {
      title: string;
      description?: string;
    }
  >;
};

export default function GeneralInformationServices({
  groupTitles,
  services,
}: Props) {
  return (
    <div className="min-w-0 space-y-9">
      {serviceGroups.map((group) => (
        <section key={group.id}>
          {/* GROUP TITLE */}
          <Reveal delay={0}>
            <h2 className="mb-5 text-center text-[17px] font-extralight text-[#a39486]">
              {groupTitles[group.id]}
            </h2>
          </Reveal>

          {/* SERVICES */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {group.columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((serviceId, serviceIndex) => {
                  const service = services[serviceId];

                  return (
                    <Reveal
                      key={serviceId}
                      delay={serviceIndex * 120}
                    >
                      <div className="flex items-start gap-4 text-[#8B7C6A]">
                        <i
                          aria-hidden="true"
                          className={`${serviceIcons[serviceId]} mt-0.5 shrink-0 text-[25px]`}
                        />

                        <div className="min-w-0">
                          <h3 className="text-[16px] leading-[1.4] font-light">
                            {service.title}
                          </h3>

                          {service.description && (
                            <p className="mt-1 text-[12px] leading-[1.6] font-light text-[#a79b8e]">
                              {service.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
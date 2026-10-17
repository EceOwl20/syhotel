import type { IconType } from "react-icons";

export type RoomService = {
  id: string | number;
  title: string;
  description?: string;
  icon: string | IconType;
};

type RoomServicesProps = {
  freeServices: RoomService[];
  paidServices: RoomService[];
  freeTitle?: string;
  paidTitle?: string;
};

function ServiceItem({ service }: { service: RoomService }) {
  const Icon = typeof service.icon === "string" ? null : service.icon;

  return (
    <div className="flex items-start gap-5">

      {/* Flaticon icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#8B7C6A]">
        {Icon ? (
          <Icon className="h-[29px] w-[29px]" aria-hidden="true" />
        ) : (
          <i
            className={`${service.icon} text-[29px] leading-none`}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Service content */}
      <div className="min-w-0">
        <h4 className="text-[16px] font-light leading-[1.5] text-[#8B7C6A]">
          {service.title}
        </h4>

        {service.description && (
          <p className="mt-1 text-[12px] font-light leading-[1.6] text-[#8B7C6A]">
            {service.description}
          </p>
        )}
      </div>

    </div>
  );
}

export default function RoomServices({
  freeServices,
  paidServices,
  freeTitle = "ÜCRETSİZ HİZMETLER",
  paidTitle = "ÜCRETLİ HİZMETLER",
}: RoomServicesProps) {
  const midpoint = Math.ceil(freeServices.length / 2);

  const freeColumns = [
    freeServices.slice(0, midpoint),
    freeServices.slice(midpoint),
  ];

  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-12 md:px-8 md:py-16 ">
      <div className="mx-auto grid max-w-[1650px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 w-[96%] lg:w-[90%]">

        {/* Free Services */}
        <div>
          <h2 className="mb-8 text-center text-[22px] lg:text-[26px] font-extralight tracking-[0.04em] text-[#8B7C6A] md:text-[30px]">
            {freeTitle}
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {freeColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-5">
                {column.map((service) => (
                  <ServiceItem
                    key={service.id}
                    service={service}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Paid Services */}
        <div>
          <h2 className="mb-8 text-center text-[22px] lg:text-[26px] font-extralight tracking-[0.04em] text-[#8B7C6A] md:text-[30px]">
            {paidTitle}
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {paidServices.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

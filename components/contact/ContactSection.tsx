import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

type ContactSectionProps = {
  title: string;
  description: string;
  address: string;
  reservationLabel: string;
  hotelPhoneLabel: string;
  mapTitle: string;
};

const contact = {
  reservationPhone: "+90 242 340 47 06",
  reservationPhoneHref: "tel:+902423404706",

  hotelPhone: "+90 242 205 47 80",
  hotelPhoneHref: "tel:+902422054780",

  email: "info@syhotels.com",
  salesEmail: "sales@syhotels.com",
};

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.1004656344755!2d31.0066011693824!3d36.873063965267455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c37bbdfcbe1811%3A0xe5afb47a258b454f!2sSY%20Hotels%20Belek!5e0!3m2!1str!2str!4v1731589000988!5m2!1str!2str";

export default function ContactSection({
  title,
  description,
  address,
  reservationLabel,
  hotelPhoneLabel,
  mapTitle,
}: ContactSectionProps) {
  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px]">

        {/* TITLE */}
        <div className="mb-4 md:mb-8 lg:mb-12 flex flex-col items-center text-center ">
          <h1 className="text-[26px] md:text-[32px] font-extralight tracking-[0.04em] text-[#948475] lg:text-[36px]">
            {title}
          </h1>

          <p className="mt-5 text-[14px] leading-[1.8] font-light text-[#948475] md:text-[16px]">
            {description}
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col items-center gap-5 text-center text-[13px] font-light text-[#948475] md:text-[15px]">

          {/* ADDRESS */}
          <div className="flex max-w-[800px] items-start justify-center gap-3">
            <FaLocationDot
              className="mt-1 shrink-0"
              size={14}
            />

            <span>{address}</span>
          </div>

          {/* RESERVATION PHONE */}
          <a
            href={contact.reservationPhoneHref}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
          >
            <FaPhone size={13} />

            <span>
              {reservationLabel}: {contact.reservationPhone}
            </span>
          </a>

          {/* HOTEL PHONE */}
          <a
            href={contact.hotelPhoneHref}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
          >
            <FaPhone size={13} />

            <span>
              {hotelPhoneLabel}: {contact.hotelPhone}
            </span>
          </a>

          {/* GENERAL EMAIL */}
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
          >
            <FaEnvelope size={13} />
            <span>{contact.email}</span>
          </a>

          {/* SALES EMAIL */}
          <a
            href={`mailto:${contact.salesEmail}`}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
          >
            <FaEnvelope size={13} />
            <span>{contact.salesEmail}</span>
          </a>
        </div>

        {/* GOOGLE MAPS */}
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[450px]">
          <iframe
            src={mapUrl}
            title={mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
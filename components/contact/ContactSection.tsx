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
  mapTitle: string;
};

const contact = {
  reservationPhone: "+90 242 205 47 87",
  reservationPhoneHref: "tel:+902422054787",

  email: "info@syhotels.com",
  salesEmail: "callcenter@syhotels.com",
};

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.1004656344755!2d31.0066011693824!3d36.873063965267455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c37bbdfcbe1811%3A0xe5afb47a258b454f!2sSY%20Hotels%20Belek!5e0!3m2!1str!2str!4v1731589000988!5m2!1str!2str";

export default function ContactSection({
  title,
  description,
  address,
  reservationLabel,
  mapTitle,
}: ContactSectionProps) {
  return (
    <section className="w-full bg-[#f7f7f5] px-5 py-9 md:px-8 md:py-12 lg:py-18">
      <div className="mx-auto max-w-[1800px]">

        {/* TITLE */}
        <div className="mb-4 md:mb-8 lg:mb-12 flex flex-col items-center text-center ">
          <h1 className="text-[26px] md:text-[32px] font-extralight tracking-[0.04em] text-[#8B7C6A] lg:text-[36px]">
            {title}
          </h1>

          <p className="mt-5 text-[14px] leading-[1.8] font-light text-[#8B7C6A] md:text-[16px]">
            {description}
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col items-center gap-5 text-center text-[13px] font-light text-[#8B7C6A] md:text-[15px]">

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


          {/* GENERAL EMAIL */}

           <a
            href={`mailto:${contact.salesEmail}`}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
          >
            <FaEnvelope size={13} />
            <span>{contact.salesEmail}</span>
          </a>
          
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
          >
            <FaEnvelope size={13} />
            <span>{contact.email}</span>
          </a>

          {/* SALES EMAIL */}
         
        </div>

        {/* GOOGLE MAPS */}
        <div className="relative h-[440px] w-full overflow-hidden md:h-[460px] lg:h-[500px]">
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
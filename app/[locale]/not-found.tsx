import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <main className="flex min-h-[75vh] w-full items-center justify-center bg-[#f8f6f3] px-5 py-20">
      <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
        <span
          className="
            text-[65px] font-extralight leading-none tracking-[0.05em]
            text-[#948475]/20
            sm:text-[85px]
            md:text-[95px]
          "
        >
          404
        </span>

        <div className="mt-5 h-px w-14 bg-[#948475]/60" />

        <h1
          className="
            mt-8 text-[24px] font-extralight tracking-[0.08em]
            text-[#948475]
            sm:text-[28px]
            md:text-[32px]
          "
        >
          {t("title")}
        </h1>

        <p
          className="
             mt-2 max-w-[520px]
            text-[12px] font-light leading-5 lg:leading-7
            text-[#6f675f]
            sm:text-[13px]
          "
        >
          {t("description")}
        </p>

        <Link
          href="/"
          className="
            mt-10
            border border-[#948475]
            px-9 py-3.5
            text-[12px] font-light uppercase
            tracking-[0.18em]
            text-[#948475]
            transition-all duration-500
            hover:bg-[#948475]
            hover:text-white
          "
        >
          {t("button")}
        </Link>
      </div>
    </main>
  );
}
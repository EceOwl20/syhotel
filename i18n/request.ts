import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { locale as getRootLocale } from "next/root-params";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale: overrideLocale }) => {
  let locale = overrideLocale;

  if (!locale) {
    const rootLocale = await getRootLocale();

    if (!hasLocale(routing.locales, rootLocale)) {
      notFound();
    }

    locale = rootLocale;
  }

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
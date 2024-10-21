import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { Locale } from "../../i18n.config";

export default getRequestConfig(async ({ locale }) => {
  console.log(locale);
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../dictionaries/${locale}.json`)).default,
  };
});

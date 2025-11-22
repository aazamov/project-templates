import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Messages = Record<string, string>;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (
    !locale ||
    !routing.locales.includes(locale as "uz" | "ru" | "en" | "uz-to")
  ) {
    locale = routing.defaultLocale;
  }

  let messages: Messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`@/messages/${routing.defaultLocale}.json`))
      .default;
  }

  return {
    locale,
    messages,
  };
});

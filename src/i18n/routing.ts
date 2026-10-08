import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "pt", "id"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: ["en", "es", "pt", "id"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export const defaultLocale = "th";
export const supportedLocales = ["th", "en"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];


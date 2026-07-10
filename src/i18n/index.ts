import { defaultLocale, supportedLocales, type SupportedLocale } from "./config";

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

export function resolveLocale(locale?: string | null): SupportedLocale {
  return locale && isSupportedLocale(locale) ? locale : defaultLocale;
}


export type Locale = (typeof locales)[number];

export const locales = ["en", "lo-LA", "my-MM", "th", "ru", "zh"] as const;
export const defaultLocale: Locale = "en";

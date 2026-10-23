export const LOCALES = ['en', 'vi', 'es', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const OVERLAY_LOCALES = ['es', 'fr'] as const;
export type OverlayLocale = (typeof OVERLAY_LOCALES)[number];

export const localeNames: Record<Locale, { short: string; long: string; intl: string }> = {
  en: { short: 'EN', long: 'English', intl: 'en-GB' },
  vi: { short: 'VI', long: 'Tiếng Việt', intl: 'vi-VN' },
  es: { short: 'ES', long: 'Español', intl: 'es-ES' },
  fr: { short: 'FR', long: 'Français', intl: 'fr-FR' },
};

export type Bi = { en: string; vi: string; es?: string; fr?: string };
export type LineGroup = 'construction' | 'agriculture' | 'industrial' | 'engine';
export type Tone = 'orange' | 'graphite' | 'field' | 'rust' | 'ink';

export type NavLine = {
  slug: string;
  group: LineGroup;
  tone: Tone;
  cover: string;
  name: Bi;
  count: number;
};

export const groups: { id: LineGroup; name: Bi }[] = [
  { id: 'construction', name: { en: 'Construction', vi: 'Xây dựng', es: 'Construcción', fr: 'Construction' } },
  { id: 'agriculture', name: { en: 'Agriculture', vi: 'Nông nghiệp', es: 'Agricultura', fr: 'Agriculture' } },
  { id: 'industrial', name: { en: 'Industrial', vi: 'Công nghiệp', es: 'Industrial', fr: 'Industrie' } },
  { id: 'engine', name: { en: 'Engines', vi: 'Động cơ', es: 'Motores', fr: 'Moteurs' } },
];

export const pick = (b: Bi, locale: string) => b[locale as Locale] ?? b.en;

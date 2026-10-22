export type Bi = { en: string; vi: string };
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
  { id: 'construction', name: { en: 'Construction', vi: 'Xây dựng' } },
  { id: 'agriculture', name: { en: 'Agriculture', vi: 'Nông nghiệp' } },
  { id: 'industrial', name: { en: 'Industrial', vi: 'Công nghiệp' } },
  { id: 'engine', name: { en: 'Engines', vi: 'Động cơ' } },
];

export const pick = (b: Bi, locale: string) => (locale === 'vi' ? b.vi : b.en);

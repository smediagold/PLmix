import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LOCALES } from '@/data/nav';

export const SITE = 'https://www.phulongglobal.com';

export const alternates = (path: string, locale: string, locales: readonly string[] = LOCALES) => ({
  canonical: `${SITE}/${locale}${path}`,
  languages: {
    ...Object.fromEntries(locales.map((l) => [l, `${SITE}/${l}${path}`])),
    'x-default': `${SITE}/en${path}`,
  },
});

export async function pageMeta(locale: string, key: 'home' | 'about' | 'contact' | 'products' | 'blog', path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  return {
    title: { absolute: title },
    description,
    alternates: alternates(path, locale),
    openGraph: { title, description, url: `${SITE}/${locale}${path}` },
  };
}

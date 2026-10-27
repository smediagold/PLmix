import type { MetadataRoute } from 'next';
import { lines, landings } from '@/data/lines';
import { products } from '@/data/products';
import { blogPosts, postInLocale } from '@/data/blog';
import { LOCALES } from '@/data/nav';
import { alternates } from '@/lib/meta';

const base = 'https://www.phulongglobal.com';
const entry = (
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  lastModified?: string,
  locales: readonly string[] = LOCALES,
) =>
  locales.map((l) => ({
    url: `${base}/${l}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority: l === 'en' ? priority : Math.max(0.1, priority - 0.1),
    alternates: { languages: alternates(path, l, locales).languages },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry('', 1, 'weekly'),
    ...entry('/products/concrete-mixers', 0.95, 'weekly'),
    ...landings.flatMap((l) => entry(`/products/${l.slug}`, 0.9, 'weekly')),
    ...lines.filter((l) => l.slug !== 'concrete-mixers').flatMap((l) => entry(`/products/${l.slug}`, 0.8, 'weekly')),
    ...entry('/products', 0.7, 'weekly'),
    ...products.flatMap((p) => entry(`/products/${p.id.toLowerCase()}`, p.subcategory === 'concrete-mixer' ? 0.75 : 0.6, 'monthly')),
    ...entry('/about', 0.6, 'monthly'),
    ...entry('/contact', 0.6, 'monthly'),
    ...entry('/blog', 0.6, 'weekly'),
    ...blogPosts.flatMap((p) => entry(`/blog/${p.slug}`, p.category === 'concrete-mixer' ? 0.6 : 0.5, 'monthly', p.date, LOCALES.filter((l) => postInLocale(p, l)))),
  ];
}

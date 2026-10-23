import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { categoryLabels, postsForLocale, type BlogCategory } from '@/data/blog';
import { pick } from '@/data/nav';
import PageHero from '@/components/site/PageHero';
import BlogCard from '@/components/blog/BlogCard';
import ContactCoupon from '@/components/contact/ContactCoupon';
import { sectionGap } from '@/components/site/sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMeta(locale, 'blog', '/blog');
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const { category } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const tl = await getTranslations('line');
  const blogPosts = postsForLocale(locale);

  const cats = (Object.keys(categoryLabels) as BlogCategory[]).filter((c) => blogPosts.some((p) => p.category === c));
  const active = cats.includes(category as BlogCategory) ? (category as BlogCategory) : null;
  const posts = blogPosts.filter((p) => !active || p.category === active);
  const [featured, ...rest] = posts;

  const pill = (on: boolean) =>
    `press inline-flex min-h-11 items-center px-5 text-[17px] font-semibold ${on ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-stone'}`;

  return (
    <>
      <PageHero
        image="/images/factory/factory-3.jpg"
        alt={t('heroAlt')}
        title={t('title')}
        text={t('subtitle')}
        crumbs={[{ href: '/', label: tl('home') }, { label: t('title') }]}
        crumbLabel={tl('breadcrumb')}
        size="compact"
      />

      <div className="frame pt-10">
        <nav aria-label={t('filter')} className="flex flex-wrap gap-2">
          <Link href="/blog" scroll={false} aria-current={!active ? 'page' : undefined} className={pill(!active)}>
            {t('all')}
          </Link>
          {cats.map((c) => (
            <Link
              key={c}
              prefetch={false}
              href={{ pathname: '/blog', query: { category: c } }}
              scroll={false}
              aria-current={active === c ? 'page' : undefined}
              className={pill(active === c)}
            >
              {pick(categoryLabels[c], locale)}
            </Link>
          ))}
        </nav>
      </div>

      {featured && (
        <section aria-label={t('latest')} className="frame pt-10">
          <BlogCard post={featured} locale={locale} large />
        </section>
      )}

      {rest.length > 0 && (
        <section aria-labelledby="more-posts" className={`frame ${sectionGap}`}>
          <h2 id="more-posts" className="text-[clamp(28px,2.6vw,40px)] font-bold tracking-[-0.02em] text-ink">{t('more')}</h2>
          <ul className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <li key={p.slug} data-reveal style={{ ['--d' as string]: `${(i % 3) * 80}ms` }}>
                <BlogCard post={p} locale={locale} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-label={tl('quote')} className={`frame ${sectionGap} pb-[clamp(64px,8vw,120px)]`}>
        <ContactCoupon />
      </section>
    </>
  );
}

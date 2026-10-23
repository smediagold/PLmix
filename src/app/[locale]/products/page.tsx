import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { groups, lines, lineProducts, pick, type LineGroup } from '@/data/lines';
import PageHero from '@/components/site/PageHero';
import ModelGrid from '@/components/lines/ModelGrid';
import ContactCoupon from '@/components/contact/ContactCoupon';
import { sectionGap } from '@/components/site/sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMeta(locale, 'products', '/products');
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const { category } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('products');
  const tl = await getTranslations('line');

  const active = groups.some((g) => g.id === category) ? (category as LineGroup) : null;
  const shown = lines.filter((l) => !active || l.group === active);
  const total = shown.reduce((n, l) => n + lineProducts(l).length, 0);

  const pill = (on: boolean) =>
    `press inline-flex min-h-11 items-center px-5 text-[17px] font-semibold ${on ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-stone'}`;

  return (
    <>
      <PageHero
        image="/images/factory/warehouse.jpg"
        alt={t('heroAlt')}
        title={t('title')}
        text={t('subtitle')}
        crumbs={[{ href: '/', label: tl('home') }, { label: t('title') }]}
        crumbLabel={tl('breadcrumb')}
        size="compact"
      />

      <div className="frame pt-10">
        <nav aria-label={t('filter')} className="flex flex-wrap items-center gap-2">
          <Link href="/products" scroll={false} aria-current={!active ? 'page' : undefined} className={pill(!active)}>
            {t('allProducts')}
          </Link>
          {groups.map((g) => (
            <Link
              key={g.id}
              prefetch={false}
              href={{ pathname: '/products', query: { category: g.id } }}
              scroll={false}
              aria-current={active === g.id ? 'page' : undefined}
              className={pill(active === g.id)}
            >
              {pick(g.name, locale)}
            </Link>
          ))}
          <span className="num ml-auto text-[17px] text-soft">{tl('modelsTitle', { count: total })}</span>
        </nav>
      </div>

      {shown.map((l) => {
        const items = lineProducts(l);
        const name = pick(l.name, locale);
        return (
          <section key={l.slug} aria-labelledby={`l-${l.slug}`} className={`frame ${sectionGap}`}>
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
              <div>
                <h2 id={`l-${l.slug}`} className="text-[clamp(28px,2.6vw,40px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
                  <Link href={`/products/${l.slug}`} prefetch={false} className="underline-offset-4 decoration-2 hover:underline">{name}</Link>
                </h2>
                <p className="mt-2 max-w-[64ch] text-[17px] leading-[1.5] text-ink">{pick(l.tagline, locale)}</p>
              </div>
              <Link href={`/products/${l.slug}`} prefetch={false} className="press inline-flex min-h-11 items-center bg-stone px-5 text-[17px] font-semibold text-ink hover:bg-[#E0D9CE]">
                {t('viewLine', { name })}
              </Link>
            </div>
            <div className="mt-8">
              <ModelGrid items={items} locale={locale} />
            </div>
          </section>
        );
      })}

      <section aria-label={tl('quote')} className={`frame ${sectionGap} pb-[clamp(64px,8vw,120px)]`}>
        <ContactCoupon />
      </section>
    </>
  );
}

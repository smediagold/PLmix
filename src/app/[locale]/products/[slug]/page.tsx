import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { products, getProductById } from '@/data/products';
import { Link } from '@/i18n/navigation';
import ProductCard from '@/components/products/ProductCard';
import ProductGallery from '@/components/products/ProductGallery';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductById(slug.toUpperCase()) ?? getProductById(slug);
  if (!product) return {};
  const vi = locale === 'vi';
  const name = vi ? product.name_vi : product.name_en;
  const desc = vi ? product.description_vi : product.description_en;
  const moqLine = vi ? `MOQ ${product.moq} chiếc.` : `MOQ ${product.moq} units.`;
  const description = `${desc} ${moqLine}`.slice(0, 160);
  const url = `https://phulongglobal.com/${locale}/products/${slug}`;
  return {
    title: name,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `https://phulongglobal.com/en/products/${slug}`,
        vi: `https://phulongglobal.com/vi/products/${slug}`,
      },
    },
    openGraph: {
      title: `${name} | Phu Long Mechanical`,
      description,
      url,
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProductById(slug.toUpperCase()) ?? getProductById(slug);
  if (!product) notFound();

  const name = locale === 'vi' ? product.name_vi : product.name_en;
  const description = locale === 'vi' ? product.description_vi : product.description_en;
  const related = product.related_skus
    .map((id) => getProductById(id))
    .filter(Boolean)
    .slice(0, 3) as typeof products;

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Breadcrumb */}
      <Breadcrumb locale={locale} name={name} />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Main product section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product!} name={name} />
          <ProductInfo product={product} name={name} description={description} locale={locale} />
        </div>

        {/* Specs table */}
        <SpecsSection product={product} locale={locale} />

        {/* Customization */}
        {product.customization_options && (
          <CustomizationSection options={product.customization_options} locale={locale} />
        )}

        {/* Related products */}
        {related.length > 0 && (
          <RelatedSection products={related} locale={locale} />
        )}
      </div>
    </div>
  );
}

/* ─── Breadcrumb ─────────────────────────────────────────────── */
function Breadcrumb({ locale, name }: { locale: string; name: string }) {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-brand-gray">
          <Link href="/" className="hover:text-dark transition-colors">
            {locale === 'vi' ? 'Trang Chủ' : 'Home'}
          </Link>
          <svg className="h-4 w-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/products" className="hover:text-dark transition-colors">
            {locale === 'vi' ? 'Sản Phẩm' : 'Products'}
          </Link>
          <svg className="h-4 w-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-dark font-medium line-clamp-1">{name}</span>
        </nav>
      </div>
    </div>
  );
}

/* ─── Info ──────────────────────────────────────────────────── */
function ProductInfo({
  product,
  name,
  description,
  locale,
}: {
  product: NonNullable<ReturnType<typeof getProductById>>;
  name: string;
  description: string;
  locale: string;
}) {
  const t = useTranslations('products');

  return (
    <div className="flex flex-col">
      <p className="font-mono text-sm text-brand-gray/60">{product.id}</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-dark sm:text-3xl">{name}</h1>

      <p className="mt-4 text-base leading-relaxed text-brand-gray">{description}</p>

      {/* Key specs preview */}
      {Object.keys(product.specifications).length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          {Object.entries(product.specifications).slice(0, 4).map(([key, val]) => (
            <div key={key} className="rounded-lg bg-white border border-border p-3">
              <p className="text-xs text-brand-gray/70">{key}</p>
              <p className="mt-0.5 text-sm font-semibold text-dark">{val}</p>
            </div>
          ))}
        </div>
      )}

      {/* MOQ */}
      <div className="mt-6 flex items-center gap-3 rounded-lg bg-amber-50 border border-amber-100 px-4 py-3">
        <svg className="h-5 w-5 shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <p className="text-sm text-dark">
          <span className="font-semibold">{t('moq')}:</span>{' '}
          {product.moq} {product.moq === 1 ? 'unit' : 'units'}
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark sm:flex-none"
        >
          {t('requestQuote')}
        </Link>
        <a
          href="https://wa.me/84946964669"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-dark transition-colors hover:border-brand-orange hover:text-brand-orange"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ─── Full Specs ────────────────────────────────────────────── */
function SpecsSection({
  product,
  locale,
}: {
  product: NonNullable<ReturnType<typeof getProductById>>;
  locale: string;
}) {
  const t = useTranslations('products');
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-dark">{t('specifications')}</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white">
        <table className="w-full text-sm">
          <tbody>
            {Object.entries(product.specifications).map(([key, val], i) => (
              <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                <td className="w-1/3 px-4 py-3 font-medium text-dark border-r border-border">{key}</td>
                <td className="px-4 py-3 text-brand-gray">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Customization ─────────────────────────────────────────── */
function CustomizationSection({
  options,
  locale,
}: {
  options: Record<string, string[]>;
  locale: string;
}) {
  const t = useTranslations('products');
  return (
    <div className="mt-12 rounded-2xl bg-amber-50 border border-amber-100 p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/10">
          <svg className="h-5 w-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-dark">{t('customizationOptions')}</h2>
      </div>
      <p className="mt-2 text-sm text-brand-gray">
        {locale === 'vi'
          ? 'Sản phẩm này có thể được tùy chỉnh theo yêu cầu của bạn.'
          : 'This product can be customized to meet your requirements.'}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(options).map(([optKey, optVals]) => (
          <div key={optKey} className="rounded-lg bg-white border border-amber-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">{optKey}</p>
            <ul className="mt-2 space-y-1">
              {optVals.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm text-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-flex h-10 items-center justify-center rounded-md bg-brand-orange px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
        >
          {locale === 'vi' ? 'Yêu Cầu Tùy Chỉnh' : 'Request Custom Order'}
        </Link>
      </div>
    </div>
  );
}

/* ─── Related Products ──────────────────────────────────────── */
function RelatedSection({
  products: related,
  locale,
}: {
  products: typeof products;
  locale: string;
}) {
  const t = useTranslations('products');
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-dark">{t('relatedProducts')}</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} locale={locale} />
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { products, type Category } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import CategoryFilter from '@/components/products/CategoryFilter';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Sản Phẩm — Máy Xây Dựng & Máy Nông Nghiệp Xuất Khẩu'
    : 'Products — Construction & Agricultural Machinery for Export';
  const description = vi
    ? 'Toàn bộ sản phẩm Phú Long: máy trộn bê tông 250–500L, xe rùa, máy uốn đai thép, máy cấy lúa, máy tuốt lúa, động cơ Vikyno. Đặt hàng OEM, xuất khẩu toàn cầu.'
    : 'Full range of Phu Long products: concrete mixers 250–500L, wheelbarrows, stirrup bending machines, rice transplanters, paddy threshers, Vikyno diesel engines. OEM & export.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://phulongglobal.com/${locale}/products`,
      languages: { en: 'https://phulongglobal.com/en/products', vi: 'https://phulongglobal.com/vi/products' },
    },
    openGraph: { title, description, url: `https://phulongglobal.com/${locale}/products` },
  };
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

  const filtered =
    category && category !== 'all'
      ? products.filter((p) => p.category === (category as Category))
      : products;

  return (
    <div className="min-h-screen bg-page-bg">
      <PageHeader locale={locale} total={filtered.length} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Suspense>
          <CategoryFilter locale={locale} />
        </Suspense>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-24 text-center text-brand-gray">
            {locale === 'vi' ? 'Không tìm thấy sản phẩm.' : 'No products found.'}
          </div>
        )}
      </div>
    </div>
  );
}

function PageHeader({ locale, total }: { locale: string; total: number }) {
  const t = useTranslations('products');
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-2 text-base text-brand-gray">{t('subtitle')}</p>
        <p className="mt-1 text-sm text-brand-gray/60">
          {total} {locale === 'vi' ? 'sản phẩm' : 'products'}
        </p>
      </div>
    </div>
  );
}

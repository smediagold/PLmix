import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Product } from '@/data/products';

const categoryColors: Record<string, string> = {
  construction: 'bg-amber-100 text-amber-800',
  agriculture: 'bg-green-100 text-green-800',
  engine: 'bg-blue-100 text-blue-800',
  'spare-part': 'bg-orange-100 text-orange-800',
};

const categoryLabels: Record<string, { en: string; vi: string }> = {
  construction: { en: 'Construction', vi: 'Xây Dựng' },
  agriculture: { en: 'Agriculture', vi: 'Nông Nghiệp' },
  engine: { en: 'Engine', vi: 'Động Cơ' },
  'spare-part': { en: 'Spare Part', vi: 'Phụ Kiện' },
};

export default function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const name = locale === 'vi' ? product.name_vi : product.name_en;
  const slug = product.id.toLowerCase();
  const mainSpec =
    product.specifications['Mixing Volume'] ||
    product.specifications['Output Capacity'] ||
    product.specifications['Productivity'] ||
    product.specifications['Power'] ||
    null;
  const mainSpecKey =
    product.specifications['Mixing Volume']
      ? 'Capacity'
      : product.specifications['Output Capacity']
      ? 'Output'
      : product.specifications['Productivity']
      ? 'Productivity'
      : product.specifications['Power']
      ? 'Power'
      : null;
  const catLabel = categoryLabels[product.category]?.[locale === 'vi' ? 'vi' : 'en'] ?? product.category;
  const catColor = categoryColors[product.category] ?? 'bg-gray-100 text-gray-700';

  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col rounded-xl border border-border bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-50 overflow-hidden shrink-0">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={name}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg className="h-16 w-16 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <span className={`absolute top-3 left-3 rounded-full px-2 py-0.5 text-xs font-medium ${catColor}`}>
          {catLabel}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-mono text-brand-gray/60 tracking-wide">{product.id}</p>
        <h3 className="mt-1 text-sm font-semibold text-dark leading-snug line-clamp-2 flex-1">
          {name}
        </h3>
        {mainSpec && mainSpecKey && (
          <p className="mt-2 text-xs text-brand-gray">
            {mainSpecKey}: <span className="font-medium text-dark">{mainSpec}</span>
          </p>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs text-brand-gray">
            MOQ: {product.moq} {product.moq === 1 ? 'unit' : 'units'}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:gap-2 transition-all">
            {locale === 'vi' ? 'Chi tiết' : 'Details'}
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

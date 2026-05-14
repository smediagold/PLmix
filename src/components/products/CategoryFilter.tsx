'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

const filters = [
  { id: 'all', en: 'All Products', vi: 'Tất Cả' },
  { id: 'construction', en: 'Construction', vi: 'Xây Dựng' },
  { id: 'agriculture', en: 'Agriculture', vi: 'Nông Nghiệp' },
  { id: 'engine', en: 'Engines', vi: 'Động Cơ' },
  { id: 'spare-part', en: 'Spare Parts', vi: 'Phụ Kiện' },
];

export default function CategoryFilter({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('category') ?? 'all';

  const setCategory = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === 'all') {
      params.delete('category');
    } else {
      params.set('category', id);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive = f.id === active;
        return (
          <button
            key={f.id}
            onClick={() => setCategory(f.id)}
            className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-brand-orange text-white'
                : 'bg-white border border-border text-brand-gray hover:border-brand-orange hover:text-brand-orange'
            }`}
          >
            {locale === 'vi' ? f.vi : f.en}
          </button>
        );
      })}
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { useInquiry } from './InquiryContext';

export default function InquiryToggle({ sku, name, onDark = false }: { sku: string; name: string; onDark?: boolean }) {
  const t = useTranslations('inquiry');
  const { has, toggle } = useInquiry();
  const added = has(sku);

  const base = onDark
    ? added
      ? 'bg-white text-ink'
      : 'bg-white/15 text-white hover:bg-white/25'
    : added
      ? 'bg-ink text-white'
      : 'bg-stone text-ink hover:bg-[#E0D9CE]';

  return (
    <button
      type="button"
      onClick={() => toggle(sku)}
      aria-pressed={added}
      aria-label={`${added ? t('remove') : t('add')}: ${name}`}
      className={`press inline-flex min-h-11 items-center gap-2 px-4 text-[15px] font-semibold ${base}`}
    >
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
        {added ? <path d="M3 8.5l3 3 7-7" /> : <path d="M8 3v10M3 8h10" />}
      </svg>
      {added ? t('added') : t('add')}
    </button>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useInquiry } from './InquiryContext';

export default function InquiryBar({ skuNames }: { skuNames: Record<string, string> }) {
  const t = useTranslations('inquiry');
  const { skus, clear } = useInquiry();
  if (skus.length === 0) return null;

  const names = skus.map((s) => {
    const n = skuNames[s];
    return n ? `${s} (${n})` : s;
  });
  const message = `${t('waIntro')}\n${names.map((n) => `- ${n}`).join('\n')}`;
  const wa = `https://wa.me/84946964669?text=${encodeURIComponent(message)}`;

  return (
    <div
      role="region"
      aria-label={t('region')}
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-40 bg-ink text-white sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[calc(100%-8rem)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        <p className="num text-[15px] font-semibold">
          {t('count', { count: skus.length })}
          <span className="ml-2 hidden font-normal text-white/80 md:inline">{skus.join(', ')}</span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex min-h-11 items-center bg-brand-orange px-4 text-[15px] font-semibold text-ink hover:bg-[#FFB840]"
          >
            {t('whatsapp')}
          </a>
          <Link
            href={{ pathname: '/contact', query: { products: skus.join(',') } }}
            className="press inline-flex min-h-11 items-center bg-white/15 px-4 text-[15px] font-semibold hover:bg-white/25"
          >
            {t('form')}
          </Link>
          <button
            type="button"
            onClick={clear}
            className="press inline-flex min-h-11 items-center px-3 text-[15px] text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            {t('clear')}
          </button>
        </div>
      </div>
    </div>
  );
}

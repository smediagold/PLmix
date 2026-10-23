import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { lines, pick } from '@/data/lines';

const blocks = [
  { ch: 'P', h: 100, c: '#F5A623', ink: '#1C1C1E' },
  { ch: 'H', h: 78, c: '#5A5A5A', ink: '#F8F5F1' },
  { ch: 'U', h: 90, c: '#1C1C1E', ink: '#F8F5F1' },
  { ch: 'L', h: 64, c: '#B45309', ink: '#F8F5F1' },
  { ch: 'O', h: 96, c: '#F5A623', ink: '#1C1C1E' },
  { ch: 'N', h: 72, c: '#1A6B4A', ink: '#F8F5F1' },
  { ch: 'G', h: 86, c: '#5A5A5A', ink: '#F8F5F1' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const linkCls = 'text-[15px] text-ink underline-offset-4 hover:underline';

  return (
    <footer className="bg-stone pt-20 text-ink">
      <div className="frame">
        <p className="sr-only">Phu Long Mechanical</p>
        <div aria-hidden="true" className="flex h-[22svh] items-end gap-1 sm:h-[34svh]">
          {blocks.map((b, i) => (
            <div
              key={i}
              data-reveal
              style={{ height: `${b.h}%`, backgroundColor: b.c, color: b.ink, ['--d' as string]: `${i * 60}ms` }}
              className={`flex flex-1 items-end justify-center overflow-hidden font-bold leading-[0.8] tracking-[-0.04em] ${i === 3 ? 'ml-2 sm:ml-4' : ''}`}
            >
              <span className="pb-[0.05em] text-[clamp(44px,11vw,190px)]">{b.ch}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[15px] font-semibold text-soft">{t('productsTitle')}</h2>
            <ul className="mt-4 space-y-2">
              {lines.map((l) => (
                <li key={l.slug}>
                  <Link href={`/products/${l.slug}`} prefetch={false} className={linkCls}>
                    {pick(l.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-[15px] font-semibold text-soft">{t('companyTitle')}</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" prefetch={false} className={linkCls}>{t('about')}</Link></li>
              <li><Link href="/blog" prefetch={false} className={linkCls}>{t('blog')}</Link></li>
              <li><Link href="/contact" prefetch={false} className={linkCls}>{t('contact')}</Link></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-5">
            <h2 className="text-[15px] font-semibold text-soft">{t('contactTitle')}</h2>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li><a href="https://wa.me/84946964669" target="_blank" rel="noopener noreferrer" className={linkCls}>WhatsApp (+84) 946 964 669</a></li>
              <li><a href="mailto:Andy@phulongglobal.com" className={linkCls} translate="no">Andy@phulongglobal.com</a></li>
              <li>
                <a href="https://maps.google.com/?q=115+Ke+Ve+Dong+Ngac+Ha+Noi+Vietnam" target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {t('officeAddress')}
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Giao+Thuy+Ninh+Binh+Vietnam" target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {t('factoryAddress')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 pb-28 sm:pb-10">
          <p className="text-[15px] text-soft">
            © {year} Phu Long Global Investment Co., Ltd. {t('rights')}
          </p>
          <a href="#top" className="press inline-flex min-h-11 items-center bg-ink px-4 text-[15px] font-semibold text-white hover:bg-black">
            {t('top')}
          </a>
        </div>
      </div>
    </footer>
  );
}

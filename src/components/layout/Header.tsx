'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { groups, lines, lineProducts, pick } from '@/data/lines';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setProductsOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setProductsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [productsOpen]);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'vi' : 'en' });
  };

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  const linkCls = 'text-[17px] font-semibold text-ink underline-offset-8 decoration-2 hover:underline';

  return (
    <header className="sticky top-0 z-50 w-full bg-ground">
      <div ref={panelRef}>
        <div className="frame flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="flex min-h-11 shrink-0 items-center" aria-label="Phu Long Mechanical, home">
            <Image src="/logo.png" alt="Phu Long Mechanical" width={216} height={72} className="h-[52px] w-auto" priority />
          </Link>

          <nav aria-label={t('main')} className="hidden items-center gap-9 lg:flex">
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-controls="products-panel"
              onClick={() => setProductsOpen((v) => !v)}
              className={`${linkCls} inline-flex min-h-11 items-center gap-1.5`}
            >
              {t('products')}
              <svg aria-hidden="true" viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={`${linkCls} inline-flex min-h-11 items-center`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={switchLocale}
              className="hidden min-h-11 min-w-11 items-center justify-center text-[17px] font-semibold text-ink hover:underline sm:inline-flex"
              aria-label={locale === 'en' ? 'Tiếng Việt' : 'English'}
              translate="no"
            >
              {locale === 'en' ? 'VI' : 'EN'}
            </button>
            <Link
              href="/contact"
              className="press hidden min-h-11 items-center bg-brand-orange px-5 text-[17px] font-semibold text-ink hover:bg-[#FFB840] sm:inline-flex"
            >
              {t('getQuote')}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {productsOpen && (
          <div id="products-panel" className="absolute inset-x-0 top-[72px] hidden bg-white shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] lg:block">{/* taste-skill-ignore: dropdown overlay */}
            <div className="frame grid grid-cols-4 gap-10 py-10">
              {groups.map((g) => (
                <div key={g.id}>
                  <p className="text-[15px] font-semibold text-soft">{pick(g.name, locale)}</p>
                  <ul className="mt-4 space-y-2">
                    {lines
                      .filter((l) => l.group === g.id)
                      .map((l) => (
                        <li key={l.slug}>
                          <Link href={`/products/${l.slug}`} className="group flex items-center gap-3 py-1" data-tone={l.tone}>
                            <span className="tone-tile relative block h-14 w-14 shrink-0">
                              <Image src={l.cover} alt="" fill sizes="56px" className="multiply object-contain p-1" />
                            </span>
                            <span>
                              <span className="block text-[17px] font-semibold text-ink group-hover:underline underline-offset-4">
                                {pick(l.name, locale)}
                              </span>
                              <span className="num block text-[15px] text-soft">
                                {t('models', { count: lineProducts(l).length })}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="frame pb-8">
              <Link href="/products" className="text-[17px] font-semibold text-ink underline underline-offset-4">
                {t('allProducts')}
              </Link>
            </div>
          </div>
        )}
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="max-h-[calc(100svh-72px)] overflow-y-auto overscroll-contain bg-white lg:hidden">
          <nav aria-label={t('main')} className="frame py-4">
            {groups.map((g) => (
              <div key={g.id} className="py-3">
                <p className="text-[15px] font-semibold text-soft">{pick(g.name, locale)}</p>
                <ul className="mt-1">
                  {lines
                    .filter((l) => l.group === g.id)
                    .map((l) => (
                      <li key={l.slug}>
                        <Link href={`/products/${l.slug}`} className="flex min-h-11 items-center text-[17px] font-semibold text-ink">
                          {pick(l.name, locale)}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <div className="mt-2 bg-ground px-4 py-2">
              <Link href="/products" className="flex min-h-11 items-center text-[17px] font-semibold text-ink">
                {t('allProducts')}
              </Link>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="flex min-h-11 items-center text-[17px] font-semibold text-ink">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="button" onClick={switchLocale} className="min-h-11 px-1 text-[17px] font-semibold text-ink">
                {locale === 'en' ? 'Tiếng Việt' : 'English'}
              </button>
              <Link
                href="/contact"
                className="press ml-auto inline-flex min-h-11 items-center bg-brand-orange px-5 text-[17px] font-semibold text-ink"
              >
                {t('getQuote')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

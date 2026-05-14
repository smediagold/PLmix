'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === 'en' ? 'vi' : 'en';
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: '/products', label: t('products') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Phu Long Mechanical"
            width={216}
            height={72}
            className="h-[65px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-gray hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="hidden sm:flex items-center text-sm font-medium text-brand-gray hover:text-dark transition-colors"
            aria-label="Switch language"
          >
            {locale === 'en' ? 'VI' : 'EN'}
          </button>
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-brand-orange px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            {t('getQuote')}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-dark transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-dark transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-dark transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex h-11 items-center text-sm font-medium text-brand-gray"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-3 border-t border-border pt-3">
            <button
              onClick={switchLocale}
              className="text-sm font-medium text-brand-gray"
            >
              {locale === 'en' ? 'Tiếng Việt' : 'English'}
            </button>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="ml-auto inline-flex h-9 items-center justify-center rounded-md bg-brand-orange px-4 text-sm font-semibold text-white"
            >
              {t('getQuote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

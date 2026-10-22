import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import MotionLayer from '@/components/site/MotionLayer';
import NavProgress from '@/components/site/NavProgress';
import { Suspense } from 'react';
import { navLines, skuNames } from '@/data/lines';
import { InquiryProvider } from '@/components/inquiry/InquiryContext';
import InquiryBar from '@/components/inquiry/InquiryBar';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const all = await getMessages();
  const clientMessages = Object.fromEntries(
    ['nav', 'inquiry', 'coupon', 'media', 'contact'].map((k) => [k, all[k as keyof typeof all]]),
  );

  return (
    <NextIntlClientProvider messages={clientMessages}>
      <InquiryProvider>
        <div id="top" className="flex min-h-svh flex-col" lang={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
          >
            {locale === 'vi' ? 'Bỏ qua đến nội dung' : 'Skip to content'}
          </a>
          <Header locale={locale} lines={navLines()} />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
          <InquiryBar skuNames={skuNames()} />
          <Suspense>
            <NavProgress />
          </Suspense>
          <MotionLayer />
        </div>
      </InquiryProvider>
    </NextIntlClientProvider>
  );
}

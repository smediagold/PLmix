import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Liên Hệ & Yêu Cầu Báo Giá Máy Móc Xuất Khẩu — Phú Long'
    : 'Contact Phu Long — Request a Quote for Export Machinery';
  const description = vi
    ? 'Liên hệ Phú Long để được tư vấn và báo giá máy trộn bê tông, máy nông nghiệp, động cơ. Phản hồi trong 24 giờ. WhatsApp: (+84) 946 964 669.'
    : 'Contact Phu Long for product inquiries, export quotes and OEM orders. Concrete mixers, agricultural machinery, engines. We respond within 24 hours.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://phulongglobal.com/${locale}/contact`,
      languages: { en: 'https://phulongglobal.com/en/contact', vi: 'https://phulongglobal.com/vi/contact' },
    },
    openGraph: { title, description, url: `https://phulongglobal.com/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-page-bg">
      <PageHeader />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form — takes 3/5 on desktop */}
          <div className="lg:col-span-3">
            <FormSection />
          </div>
          {/* Sidebar — takes 2/5 on desktop */}
          <div className="lg:col-span-2">
            <ContactInfo locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader() {
  const t = useTranslations('contact');
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-base text-brand-gray">{t('subtitle')}</p>
      </div>
    </div>
  );
}

function FormSection() {
  const t = useTranslations('contact');
  return (
    <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
      <h2 className="mb-6 text-xl font-bold text-dark">{t('formTitle')}</h2>
      <Suspense>
        <ContactForm />
      </Suspense>
    </div>
  );
}

function ContactInfo({ locale }: { locale: string }) {
  const t = useTranslations('contact');
  return (
    <div className="space-y-6">
      {/* Contact details card */}
      <div className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-5 text-lg font-bold text-dark">{t('infoTitle')}</h2>
        <ul className="space-y-4">
          <InfoItem
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            label={t('phone2')}
            value="(+84) 946 964 669"
            href="tel:+84946964669"
          />
          <InfoItem
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            label={t('emailLabel')}
            value="Andy@phulongglobal.com"
            href="mailto:Andy@phulongglobal.com"
          />
          <InfoItem
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            }
            label={t('website')}
            value="phulongglobal.com"
            href="https://phulongglobal.com"
            external
          />
          <InfoItem
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            label={t('officeAddress')}
            value={t('officeAddressValue')}
            href="https://maps.google.com/?q=115+Ke+Ve+Dong+Ngac+Ha+Noi+Vietnam"
            external
          />
          <InfoItem
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            label={t('factoryAddress')}
            value={t('factoryAddressValue')}
            href="https://maps.google.com/?q=Giao+Thuy+Ninh+Binh+Vietnam"
            external
          />
        </ul>

        {/* Quick-reach buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="https://wa.me/84946964669"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="https://zalo.me/84946964669"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0068FF] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 48 48">
              <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm-4.5 27.5H16V20h3.5v11.5zm-1.75-13.2a2 2 0 110-4 2 2 0 010 4zM34 31.5h-3.5v-6c0-1.1-.4-1.8-1.5-1.8-1.2 0-1.8.8-1.8 2v5.8H23.7V20h3.3v1.5c.6-1 1.7-1.7 3-1.7 2.2 0 4 1.4 4 4.5v7.2z" />
            </svg>
            Zalo
          </a>
        </div>
      </div>

      {/* Catalog downloads */}
      <div className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-2 text-lg font-bold text-dark">{t('catalogTitle')}</h2>
        <p className="mb-5 text-sm text-brand-gray">{t('catalogDesc')}</p>
        <div className="space-y-3">
          <CatalogLink
            href="/catalog-construction.pdf"
            label={t('catalogConstruction')}
            color="construction"
          />
          <CatalogLink
            href="/catalog-agriculture.pdf"
            label={t('catalogAgriculture')}
            color="agriculture"
          />
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
        {icon}
      </span>
      <div>
        <p className="text-xs text-brand-gray/70">{label}</p>
        {href ? (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="text-sm font-medium text-dark hover:text-brand-orange transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-dark">{value}</p>
        )}
      </div>
    </li>
  );
}

function CatalogLink({
  href,
  label,
  color,
}: {
  href: string;
  label: string;
  color: 'construction' | 'agriculture';
}) {
  const accent = color === 'construction' ? 'text-construction' : 'text-agriculture';
  const bg = color === 'construction' ? 'bg-amber-50' : 'bg-green-50';
  const border = color === 'construction' ? 'border-amber-100' : 'border-green-100';

  return (
    <a
      href={href}
      download
      className={`flex items-center gap-3 rounded-lg border ${border} ${bg} px-4 py-3 transition-opacity hover:opacity-80`}
    >
      <svg className={`h-5 w-5 shrink-0 ${accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <span className={`text-sm font-medium ${accent}`}>{label}</span>
      <svg className={`ml-auto h-4 w-4 shrink-0 ${accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
}

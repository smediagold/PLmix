import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Về Phú Long — 20 Năm Sản Xuất Máy Móc Xuất Khẩu Tại Việt Nam'
    : 'About Phu Long — 20 Years Manufacturing Excellence in Vietnam';
  const description = vi
    ? 'Phú Long Global Investment — nhà sản xuất máy móc xây dựng và nông nghiệp tại Việt Nam từ năm 2004. Một nhà máy, 70+ khách hàng, 20 quốc gia xuất khẩu.'
    : 'Phu Long Global Investment — Vietnam machinery manufacturer since 2004. One factory, 70+ global clients, exported to 20 countries. Custom OEM orders available.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://phulongglobal.com/${locale}/about`,
      languages: { en: 'https://phulongglobal.com/en/about', vi: 'https://phulongglobal.com/vi/about' },
    },
    openGraph: { title, description, url: `https://phulongglobal.com/${locale}/about` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-page-bg">
      <AboutHero />
      <StorySection />
      <StatsSection />
      <FactorySection />
      <CapabilitiesSection />
      <ExportsSection />
      <ValuesSection />
      <CtaSection />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function AboutHero() {
  const t = useTranslations('about');
  return (
    <div className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <Image
          src="/images/factory/factory-aerial.png"
          alt="Phu Long factory aerial view"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Phu Long Global Investment Co., Ltd
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">{t('subtitle')}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Story ─────────────────────────────────────────────────── */
function StorySection() {
  const t = useTranslations('about');
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              {t('storyTitle')}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              From Workshop to Global Manufacturer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">{t('storyText')}</p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">{t('storyText2')}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-56 overflow-hidden rounded-xl sm:h-64">
              <Image
                src="/images/factory/factory-1.jpg"
                alt="Phu Long factory exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl sm:h-64 mt-8">
              <Image
                src="/images/factory/factory-3.jpg"
                alt="Phu Long factory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl sm:h-64 -mt-8">
              <Image
                src="/images/factory/warehouse.jpg"
                alt="Phu Long warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl sm:h-64">
              <Image
                src="/images/factory/showroom.png"
                alt="Phu Long showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────── */
function StatsSection() {
  const stats = [
    { value: '20+', labelEn: 'Years of Experience', labelVi: 'Năm Kinh Nghiệm' },
    { value: '20', labelEn: 'Countries Exported', labelVi: 'Quốc Gia Xuất Khẩu' },
    { value: '70+', labelEn: 'Global Customers', labelVi: 'Khách Hàng Toàn Cầu' },
    { value: '1', labelEn: 'Dedicated Factory', labelVi: 'Nhà Máy Chuyên Dụng' },
  ];

  return (
    <section className="bg-brand-orange py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-white/80">{s.labelEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Factory ───────────────────────────────────────────────── */
function FactorySection() {
  const t = useTranslations('about');
  return (
    <section className="py-20 bg-page-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {t('factoryTitle')}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            One Factory. Full Control.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-gray">{t('factoryText')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="relative h-64 overflow-hidden rounded-2xl sm:col-span-2 sm:h-80">
            <Image
              src="/images/factory/factory-aerial.png"
              alt="Phu Long factory aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 66vw"
            />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/factory/loading-fcl.jpg"
                alt="Loading FCL container"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/factory/loading-lcl.jpg"
                alt="Loading LCL container"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Capabilities ──────────────────────────────────────────── */
function CapabilitiesSection() {
  const t = useTranslations('about');
  const caps = [t('cap1'), t('cap2'), t('cap3'), t('cap4'), t('cap5')];

  const icons = [
    <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
    <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
    <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {t('capabilitiesTitle')}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            What We Can Do
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((cap, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-border bg-page-bg p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10">
                <svg className="h-5 w-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[i]}
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-dark pt-1.5">{cap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Exports ───────────────────────────────────────────────── */
function ExportsSection() {
  const t = useTranslations('about');
  const regions = [
    { region: 'Southeast Asia', countries: ['Vietnam', 'Cambodia', 'Laos', 'Myanmar', 'Thailand', 'Philippines'] },
    { region: 'South Asia', countries: ['Bangladesh', 'Sri Lanka', 'Nepal'] },
    { region: 'Africa', countries: ['Ghana', 'Nigeria', 'Tanzania', 'Kenya'] },
    { region: 'Others', countries: ['Haiti', 'Papua New Guinea', 'Pacific Islands'] },
  ];

  return (
    <section className="py-20 bg-page-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              {t('exportsTitle')}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Trusted in Nearly 20 Countries
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">{t('exportsText')}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-1">
                {['🇰🇭', '🇧🇩', '🇬🇭', '🇵🇭', '🇳🇵'].map((flag, i) => (
                  <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-base shadow-sm">
                    {flag}
                  </span>
                ))}
              </div>
              <span className="text-sm text-brand-gray">+ 15 more countries</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {regions.map((r) => (
              <div key={r.region} className="rounded-xl bg-white border border-border p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">{r.region}</p>
                <ul className="mt-2 space-y-1">
                  {r.countries.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange/50 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Values ────────────────────────────────────────────────── */
function ValuesSection() {
  const t = useTranslations('about');
  const values = [
    {
      title: t('value1Title'),
      text: t('value1Text'),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      ),
    },
    {
      title: t('value2Title'),
      text: t('value2Text'),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
    {
      title: t('value3Title'),
      text: t('value3Text'),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {t('valuesTitle')}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Drives Us
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/15">
                <svg className="h-7 w-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {v.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="py-20 bg-page-bg">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Ready to work together?
        </h2>
        <p className="mt-4 text-base text-brand-gray">
          Download our product catalog or get in touch to discuss your requirements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Contact Us
          </Link>
          <a
            href="/catalog-construction.pdf"
            target="_blank"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-white px-6 text-sm font-medium text-dark transition-colors hover:border-brand-orange hover:text-brand-orange"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Catalog
          </a>
        </div>
      </div>
    </section>
  );
}

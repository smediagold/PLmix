import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { BadgeCheck, Container, Factory, Fuel, Handshake, Palette, Settings2, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import ContactCoupon from '@/components/contact/ContactCoupon';
import { CertificatesSection, MarketsSection, VideoSection, sectionGap } from '@/components/site/sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Về Phú Long – Nhà Sản Xuất Máy Trộn Bê Tông Việt Nam'
    : 'About Phu Long – Concrete Mixer Manufacturer in Vietnam';
  const description = vi
    ? 'Phú Long Global Investment — nhà sản xuất máy xây dựng, máy nông nghiệp và quạt công nghiệp tại Việt Nam. Một nhà máy, 70+ khách hàng, 20 quốc gia xuất khẩu.'
    : 'Phu Long Global Investment — Vietnam manufacturer of construction and farm machinery and industrial fans. One factory, 70+ clients, exported to 20 countries.';
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://www.phulongglobal.com/${locale}/about`,
      languages: { en: 'https://www.phulongglobal.com/en/about', vi: 'https://www.phulongglobal.com/vi/about' },
    },
    openGraph: { title, description, url: `https://www.phulongglobal.com/${locale}/about` },
  };
}

const h2 = 'text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const tf = await getTranslations('home.factory');
  const tl = await getTranslations('line');

  const photos = [
    { src: '/images/factory/factory-1.jpg', alt: tf('aerial') },
    { src: '/images/factory/factory-3.jpg', alt: tf('hall') },
    { src: '/images/factory/warehouse.jpg', alt: tf('warehouseNote') },
    { src: '/images/factory/showroom.jpg', alt: tf('showroom') },
  ];
  const stats = [
    { value: '20+', label: tf('years') },
    { value: '20', label: tf('countries') },
    { value: '70+', label: tf('customers') },
    { value: '1', label: tf('factory') },
  ];
  const caps = [
    { Icon: Factory, text: t('cap1') },
    { Icon: Palette, text: t('cap2') },
    { Icon: Fuel, text: t('cap3') },
    { Icon: ShieldCheck, text: t('cap4') },
    { Icon: Container, text: t('cap5') },
    { Icon: Settings2, text: t('cap6') },
  ];
  const values = [
    { Icon: BadgeCheck, title: t('value1Title'), text: t('value1Text') },
    { Icon: Palette, title: t('value2Title'), text: t('value2Text') },
    { Icon: Handshake, title: t('value3Title'), text: t('value3Text') },
  ];

  return (
    <>
      <PageHero
        image="/images/factory/factory-aerial.jpg"
        alt={tf('aerial')}
        title={t('title')}
        text={t('subtitle')}
        crumbs={[{ href: '/', label: tl('home') }, { label: t('title') }]}
        crumbLabel={tl('breadcrumb')}
        size="compact"
      />

      <section aria-labelledby="story-title" className={`frame ${sectionGap}`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 id="story-title" data-reveal className={h2}>{t('storyTitle')}</h2>
            <p data-reveal className="mt-6 max-w-[64ch] text-[17px] leading-[1.55] text-ink">{t('storyText')}</p>
            <p data-reveal className="mt-4 max-w-[64ch] text-[17px] leading-[1.55] text-ink">{t('storyText2')}</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 lg:col-span-6">
            {photos.map((p, i) => (
              <li key={p.src} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label={t('statsLabel')} className={`frame ${sectionGap}`}>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl bg-brand-orange px-6 py-10 text-ink md:grid-cols-4 md:px-12">
          {stats.map((s) => (
            <div key={s.label} data-reveal>
              <dt className="sr-only">{s.label}</dt>
              <dd className="num text-[clamp(48px,6vw,96px)] font-bold leading-[0.9] tracking-[-0.04em]">{s.value}</dd>
              <dd className="mt-2 text-[17px] font-semibold">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-[clamp(64px,8vw,128px)]">
        <VideoSection />
      </div>

      <section aria-labelledby="caps-title" className={`frame ${sectionGap}`}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="caps-title" data-reveal className={h2}>{t('capabilitiesTitle')}</h2>
            <p data-reveal className="mt-5 max-w-[56ch] text-[17px] leading-[1.55] text-ink">{t('factoryText')}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {caps.map(({ Icon, text }, i) => (
              <li key={text} data-reveal style={{ ['--d' as string]: `${(i % 2) * 80}ms` }} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-ink">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="pt-2.5 text-[17px] leading-[1.5] text-ink">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MarketsSection locale={locale} />
      <CertificatesSection />

      <section aria-labelledby="values-title" className="mt-[clamp(64px,8vw,128px)] bg-stone">
        <div className="frame py-[clamp(56px,7vw,104px)]">
          <h2 id="values-title" data-reveal className={h2}>{t('valuesTitle')}</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map(({ Icon, title, text }, i) => (
              <li key={title} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-2 max-w-[44ch] text-[17px] leading-[1.55] text-ink">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label={tl('quote')} className={`frame ${sectionGap} pb-[clamp(64px,8vw,120px)]`}>
        <ContactCoupon />
      </section>
    </>
  );
}

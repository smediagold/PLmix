import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Building2, Factory, Globe, Mail, MessageCircle, Phone } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import { sectionGap } from '@/components/site/sections';
import { Suspense } from 'react';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Liên Hệ & Nhận Báo Giá | Phú Long'
    : 'Contact & Request a Quote | Phu Long';
  const description = vi
    ? 'Liên hệ Phú Long để được tư vấn và báo giá máy trộn bê tông, máy nông nghiệp, động cơ. Phản hồi trong 24 giờ. WhatsApp: (+84) 946 964 669.'
    : 'Contact Phu Long for product inquiries, export quotes and OEM orders. Concrete mixers, agricultural machinery, engines. We respond within 24 hours.';
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://www.phulongglobal.com/${locale}/contact`,
      languages: { en: 'https://www.phulongglobal.com/en/contact', vi: 'https://www.phulongglobal.com/vi/contact' },
    },
    openGraph: { title, description, url: `https://www.phulongglobal.com/${locale}/contact` },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const tl = await getTranslations('line');

  const info = [
    { Icon: Phone, label: t('phone2'), value: '(+84) 946 964 669', href: 'tel:+84946964669' },
    { Icon: Mail, label: t('emailLabel'), value: 'Andy@phulongglobal.com', href: 'mailto:Andy@phulongglobal.com' },
    { Icon: Globe, label: t('website'), value: 'www.phulongglobal.com', href: 'https://www.phulongglobal.com' },
    { Icon: Building2, label: t('officeAddress'), value: t('officeAddressValue'), href: 'https://maps.google.com/?q=115+Ke+Ve+Dong+Ngac+Ha+Noi+Vietnam' },
    { Icon: Factory, label: t('factoryAddress'), value: t('factoryAddressValue'), href: 'https://maps.google.com/?q=Giao+Thuy+Ninh+Binh+Vietnam' },
  ];

  const gallery = [
    { src: '/images/factory/factory-1.jpg', alt: t('factoryAddressValue') },
    { src: '/images/factory/factory-3.jpg', alt: t('galleryHall') },
    { src: '/images/factory/loading-fcl.jpg', alt: t('galleryLoading') },
    { src: '/images/orders/order-6.jpg', alt: t('galleryContainer') },
  ];

  return (
    <>
      <PageHero
        image="/images/factory/showroom.jpg"
        alt={t('showroomAlt')}
        title={t('title')}
        text={t('subtitle')}
        crumbs={[{ href: '/', label: tl('home') }, { label: t('title') }]}
        crumbLabel={tl('breadcrumb')}
        size="compact"
      />

      <section aria-labelledby="form-title" className={`frame ${sectionGap} pb-[clamp(64px,8vw,120px)]`}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="rounded-3xl bg-white p-6 sm:p-10 lg:col-span-7">
            <h2 id="form-title" data-reveal className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-[-0.01em] text-ink">{t('formTitle')}</h2>
            <p className="mt-2 text-[17px] text-ink">{t('formNote')}</p>
            <div className="mt-8">
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-[-0.01em] text-ink">{t('infoTitle')}</h2>
            <ul className="mt-6 space-y-5">
              {info.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-ink">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="pt-0.5">
                      <span className="block text-[15px] text-soft">{label}</span>
                      <span className="block text-[17px] font-semibold text-ink underline-offset-4 group-hover:underline">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/84946964669" target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-12 items-center gap-2 bg-[#25D366] px-6 text-[17px] font-semibold text-ink hover:bg-[#3ee07a]">
                <MessageCircle aria-hidden="true" className="h-5 w-5" /> WhatsApp
              </a>
              <a href="https://zalo.me/84946964669" target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-12 items-center gap-2 bg-[#0068FF] px-6 text-[17px] font-semibold text-white hover:bg-[#1a78ff]">
                <MessageCircle aria-hidden="true" className="h-5 w-5" /> Zalo
              </a>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g, i) => (
            <li key={g.src} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone">
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

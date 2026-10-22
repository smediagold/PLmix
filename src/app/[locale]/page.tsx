import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Cylinder, Disc3, Fuel, Layers } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { pick } from '@/data/lines';
import { markets, orders, testimonials } from '@/data/proof';
import LoopVideo from '@/components/site/LoopVideo';
import ContactCoupon from '@/components/contact/ContactCoupon';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Nhà Sản Xuất Máy Trộn Bê Tông Việt Nam | Phú Long'
    : 'Concrete Mixer Manufacturer in Vietnam | Phu Long Mechanical';
  const description = vi
    ? 'Phú Long — nhà sản xuất máy trộn bê tông, máy uốn đai, máy cấy lúa, máy tuốt lúa và quạt công nghiệp tại Việt Nam. 20 năm kinh nghiệm, xuất khẩu 20 quốc gia.'
    : 'Phu Long — Vietnam manufacturer of concrete mixers, stirrup bending machines, rice transplanters, paddy threshers and industrial fans. 20+ years, 20 countries. OEM orders welcome.';
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `https://www.phulongglobal.com/${locale}`,
      languages: { en: 'https://www.phulongglobal.com/en', vi: 'https://www.phulongglobal.com/vi' },
    },
    openGraph: { title, description, url: `https://www.phulongglobal.com/${locale}` },
  };
}

const gap = 'pt-[clamp(96px,12vw,192px)]';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ColoursSection />
      <VideoSection />
      <ProcessSection />
      <FactorySection />
      <MarketsSection locale={locale} />
      <CertificatesSection />
      <OrdersSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <section aria-label="Contact" className={`frame ${gap} pb-[clamp(96px,10vw,160px)]`}>
        <ContactCoupon />
      </section>
    </>
  );
}

async function HeroSection() {
  const t = await getTranslations('home.hero');
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-ink lg:h-[calc(100svh-72px)]">
      <Image
        src="/images/hero-cover.jpg"
        alt="Phu Long concrete mixers on a construction site"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[72%_center] lg:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(28,28,30,0.88)_0%,rgba(28,28,30,0.6)_45%,rgba(28,28,30,0.1)_100%)]" />
      <div className="frame pb-[clamp(48px,8vh,96px)] pt-32">
        <h1 id="hero-title" className="max-w-[20ch] text-[clamp(30px,5vw,76px)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
          {t('headline')}
        </h1>
        <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.55] text-white/90 md:text-[22px] md:leading-[1.5]">{t('subtext')}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/products/concrete-mixers"
            className="press inline-flex min-h-12 items-center bg-brand-orange px-7 text-[17px] font-semibold text-ink hover:bg-[#FFB840]"
          >
            {t('ctaProducts')}
          </Link>
          <Link
            href="/contact"
            className="press inline-flex min-h-12 items-center bg-white/15 px-7 text-[17px] font-semibold text-white hover:bg-white/25"
          >
            {t('ctaQuote')}
          </Link>
        </div>
      </div>
    </section>
  );
}

async function FeatureSection() {
  const t = await getTranslations('home.feature');
  const spots = [
    { x: 47, y: 30, label: t('drum'), Icon: Cylinder },
    { x: 50, y: 53, label: t('steel'), Icon: Layers },
    { x: 81, y: 44, label: t('engine'), Icon: Fuel },
    { x: 82, y: 71, label: t('wheels'), Icon: Disc3 },
  ];
  return (
    <section aria-labelledby="feature-title" className={`frame ${gap}`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 id="feature-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
            {t('title')}
          </h2>
          <p data-reveal className="mt-5 max-w-[54ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
            {spots.map(({ label, Icon }, i) => (
              <li key={label} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }} className="flex items-center gap-3 rounded-2xl bg-stone p-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-ink">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-[15px] font-semibold leading-snug text-ink">{label}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/products/concrete-mixers"
              className="press inline-flex min-h-12 items-center bg-brand-orange px-6 text-[17px] font-semibold text-ink hover:bg-[#FFB840]"
            >
              {t('cta')}
            </Link>
            <Link
              href={{ pathname: '/contact', query: { products: 'Concrete mixer' } }}
              className="press inline-flex min-h-12 items-center bg-stone px-6 text-[17px] font-semibold text-ink hover:bg-[#E0D9CE]"
            >
              {t('quote')}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7" data-tone="orange">
          <div data-reveal className="tone-tile relative aspect-[938/870] overflow-hidden rounded-3xl">
            <Image
              src="/images/mixer/feature.jpg"
              alt="Phu Long 350 L concrete mixer with pneumatic tyres and gasoline engine"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="multiply object-contain"
            />
            {spots.map(({ x, y, label, Icon }, i) => (
              <div key={label} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
                <span aria-hidden="true" className="absolute -left-[9px] -top-[9px] block h-[18px] w-[18px] rounded-full bg-ink outline outline-4 outline-white/80" />
                <div
                  aria-hidden="true"
                  data-reveal
                  style={{ ['--d' as string]: `${200 + i * 120}ms` }}
                  className="absolute right-[16px] top-0 hidden -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white py-1.5 pl-1.5 pr-4 lg:flex"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-ink">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-[15px] font-semibold text-ink">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

async function ColoursSection() {
  const t = await getTranslations('home.colours');
  const colours = [
    { src: '/images/mixer/colour-yellow.jpg', name: t('yellow'), w: 980 },
    { src: '/images/mixer/colour-orange.jpg', name: t('orange'), w: 1116 },
    { src: '/images/mixer/colour-red.jpg', name: t('red'), w: 980 },
    { src: '/images/mixer/colour-black-red.jpg', name: t('blackRed'), w: 980 },
    { src: '/images/mixer/colour-blue.jpg', name: t('blue'), w: 1152 },
  ];
  return (
    <section aria-labelledby="colours-title" className="mt-[clamp(96px,12vw,192px)] bg-stone">
      <div className="frame py-[clamp(64px,8vw,120px)]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="colours-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink lg:col-span-5">
            {t('title')}
          </h2>
          <p data-reveal className="max-w-[68ch] text-[17px] leading-[1.55] text-ink lg:col-span-7">{t('text')}</p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-5">
          {colours.map((c, i) => (
            <li key={c.src} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }} className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
              <div className="relative aspect-square bg-stone">
                <Image src={c.src} alt={`${c.name} concrete mixer`} fill sizes="(min-width: 1024px) 20vw, 50vw" className="multiply object-contain" />
              </div>
              <p className="mt-2 text-center text-[17px] font-semibold text-ink">{c.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

async function VideoSection() {
  const t = await getTranslations('home.video');
  return (
    <section aria-labelledby="video-title" className="bg-ink text-white">
      <div className="frame py-[clamp(72px,8vw,128px)]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="video-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] lg:col-span-5">
            {t('title')}
          </h2>
          <p data-reveal className="max-w-[68ch] text-[17px] leading-[1.55] text-white/85 lg:col-span-7">{t('text')}</p>
        </div>
        <div data-reveal className="mt-10 aspect-video bg-black">
          <video
            src="/videos/company.mp4"
            poster="/images/factory/company-poster.jpg"
            controls
            playsInline
            preload="none"
            aria-label={t('label')}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

async function ProcessSection() {
  const t = await getTranslations('home.process');
  const steps = ['cutting', 'machining', 'welding', 'finishing', 'assembly', 'finished'] as const;
  return (
    <section aria-labelledby="process-title" className={`frame ${gap}`}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[112px]">
            <h2 id="process-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              {t('title')}
            </h2>
            <p data-reveal className="mt-5 max-w-[56ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
          </div>
        </div>
        <ol className="grid gap-x-3 gap-y-12 sm:grid-cols-2 lg:col-span-8">
          {steps.map((s, i) => (
            <li key={s} data-reveal style={{ ['--d' as string]: `${(i % 2) * 90}ms` }}>
              <div className="aspect-video bg-stone">
                <LoopVideo src={`/videos/process/${s}.mp4`} poster={`/images/process/${s}.jpg`} label={t(s)} className="h-full" />
              </div>
              <h3 className="mt-3 text-[22px] font-bold leading-tight text-ink">{t(s)}</h3>
              <p className="mt-1.5 max-w-[60ch] text-[17px] leading-[1.55] text-ink">{t(`${s}Text`)}</p>
            </li>
          ))}
          <li data-reveal className="sm:col-span-2">
            <div className="relative aspect-[21/9] overflow-hidden bg-stone">
              <Image src="/images/factory/loading-lcl.jpg" alt={t('loading')} fill sizes="(min-width: 1024px) 66vw, 100vw" className="drift object-cover" />
            </div>
            <h3 className="mt-3 text-[22px] font-bold leading-tight text-ink">{t('loading')}</h3>
            <p className="mt-1.5 max-w-[68ch] text-[17px] leading-[1.55] text-ink">{t('loadingText')}</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

async function FactorySection() {
  const t = await getTranslations('home.factory');
  const stats = [
    { value: '20+', label: t('years') },
    { value: '20', label: t('countries') },
    { value: '70+', label: t('customers') },
    { value: '1', label: t('factory') },
  ];
  const tiles = [
    { src: '/images/factory/factory-1.jpg', name: t('aerial'), note: t('aerialNote') },
    { src: '/images/factory/factory-3.jpg', name: t('hall'), note: t('hallNote') },
    { src: '/images/factory/loading-fcl.jpg', name: t('warehouse'), note: t('warehouseNote') },
    { src: '/images/factory/showroom.jpg', name: t('showroom'), note: t('showroomNote') },
  ];
  return (
    <section aria-labelledby="factory-title" className={`frame ${gap}`}>
      <h2 id="factory-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
        {t('title')}
      </h2>
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6" data-reveal style={{ ['--d' as string]: '80ms' }}>
          <p className="max-w-[68ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
          <p className="mt-5 max-w-[68ch] text-[17px] leading-[1.55] text-ink">{t('text2')}</p>
        </div>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-6" data-reveal style={{ ['--d' as string]: '160ms' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="num text-[clamp(56px,7vw,112px)] font-bold leading-[0.9] tracking-[-0.04em] text-ink">{s.value}</dd>
              <dd className="mt-2 text-[17px] text-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles.map((tile, i) => (
          <li key={tile.src} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }}>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <Image src={tile.src} alt={tile.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="drift object-cover" />
            </div>
            <p className="mt-2.5 text-[15px] font-semibold text-ink">{tile.name}</p>
            <p className="text-[15px] text-soft">{tile.note}</p>
          </li>
        ))}
      </ul>
      <Link href="/about" className="mt-8 inline-flex min-h-11 items-center text-[17px] font-semibold text-ink underline underline-offset-4">
        {t('link')}
      </Link>
    </section>
  );
}

async function MarketsSection({ locale }: { locale: string }) {
  const t = await getTranslations('home.markets');
  return (
    <section aria-labelledby="markets-title" className={`mt-[clamp(96px,12vw,192px)] overflow-hidden bg-brand-orange`}>
      <div className="frame flex justify-center pt-[clamp(56px,7vw,96px)] sm:h-[clamp(620px,86svh,860px)]">
        <div
          data-reveal
          className="-mb-6 w-[92%] shrink-0 -rotate-1 bg-ground px-7 pb-16 pt-7 text-center sm:mb-0 sm:aspect-[5/7] sm:w-[72%] sm:p-14 lg:w-[56%]"
        >
          <h2 id="markets-title" className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
            {t('title')}
          </h2>
          <p className="mx-auto mt-3 max-w-[56ch] text-[17px] leading-[1.55] text-soft">{t('text')}</p>
          <ul className="mt-8 space-y-5">
            {markets.map((m) => (
              <li key={m.region.en}>
                <p className="text-[15px] font-semibold text-soft">{pick(m.region, locale)}</p>
                <p className="text-[clamp(17px,1.5vw,22px)] leading-[1.55] text-ink">
                  {m.countries.map((c, i) => (
                    <span key={c}>
                      {i > 0 && <span aria-hidden="true">{' · '}</span>}
                      <span className="sm:whitespace-nowrap">{c}</span>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

async function CertificatesSection() {
  const t = await getTranslations('home.certs');
  const certs = [
    { src: '/images/cert-iso-9001.jpg', name: t('iso'), note: t('isoNote') },
    { src: '/images/cert-sgs-report.jpg', name: t('sgs'), note: t('sgsNote') },
  ];
  return (
    <section aria-labelledby="certs-title" className={`frame ${gap}`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-4">
          <h2 id="certs-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
            {t('title')}
          </h2>
          <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-5 max-w-[56ch] text-[17px] leading-[1.55] text-ink">
            {t('text')}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 lg:col-span-8">
          {certs.map((c, i) => (
            <li key={c.src} data-reveal style={{ ['--d' as string]: `${(i + 1) * 90}ms` }}>
              <div className="bg-stone p-[8%]">
                <Image src={c.src} alt={c.name} width={750} height={1010} sizes="(min-width: 1024px) 30vw, 45vw" className="h-auto w-full" />
              </div>
              <p className="mt-2.5 text-[15px] font-semibold text-ink">{c.name}</p>
              <p className="text-[15px] text-soft">{c.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const strips = [
  'bg-brand-orange text-ink',
  'bg-ink text-white',
  'bg-agriculture text-white',
  'bg-construction text-white',
];

async function OrdersSection({ locale }: { locale: string }) {
  const t = await getTranslations('home.orders');
  return (
    <section aria-labelledby="orders-title" className={`frame ${gap}`}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id="orders-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
          {t('title')}
        </h2>
        <p data-reveal className="max-w-[62ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-x-2 gap-y-7 sm:gap-x-3 lg:grid-cols-3">
        {orders.map((o, i) => (
          <li key={o.src} data-reveal style={{ ['--d' as string]: `${(i % 3) * 80}ms` }}>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <Image src={o.src} alt={pick(o.caption, locale)} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            </div>
            <div className={`flex min-h-[84px] flex-col justify-between gap-1 p-3 ${strips[i % strips.length]}`}>
              <p className="num text-[15px] font-semibold">{pick(o.load, locale)}</p>
              <p className="text-[15px] leading-snug">{pick(o.caption, locale)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

async function TestimonialsSection({ locale }: { locale: string }) {
  const t = await getTranslations('home.reviews');
  const tilt = ['-rotate-3', 'rotate-2', 'rotate-[4deg]', 'rotate-1', '-rotate-2', 'rotate-[3deg]'];
  return (
    <section aria-labelledby="reviews-title" className="mt-[clamp(96px,12vw,192px)] overflow-hidden bg-ink">
      <div className="frame pt-[clamp(72px,8vw,128px)]">
        <h2 id="reviews-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
          {t('title')}
        </h2>
        <p data-reveal className="mt-4 max-w-[64ch] text-[17px] leading-[1.55] text-white/85">{t('text')}</p>
        <ul className="mt-14 grid gap-y-6 pb-[clamp(72px,8vw,128px)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:px-[4%]">
          {testimonials.map((q, i) => (
            <li
              key={q.name}
              data-reveal
              style={{ ['--d' as string]: `${(i % 3) * 90}ms` }}
              className={`${i % 2 ? 'ml-auto' : ''} w-[86%] sm:w-full lg:w-auto`}
            >
              <figure className={`slip ${tilt[i]} bg-ground px-7 pb-10 pt-9 lg:mx-[-12px]`}>
                <figcaption className="text-center">
                  <p className="text-[17px] font-bold text-ink">{q.name}</p>
                  <p className="text-[15px] text-soft">
                    {q.company}, {pick(q.country, locale)}
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-ink">{q.product}</p>
                </figcaption>
                <blockquote className="mt-5 text-[17px] leading-[1.55] text-ink">
                  <p>“{pick(q.text, locale)}”</p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

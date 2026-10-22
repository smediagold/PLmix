import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { groups, lines, mainLines, lineProducts, pick } from '@/data/lines';
import { markets, orders, testimonials } from '@/data/proof';
import CatalogueHero, { type HeroEntry } from '@/components/home/CatalogueHero';
import LoopVideo from '@/components/site/LoopVideo';
import ContactCoupon from '@/components/contact/ContactCoupon';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Nhà Sản Xuất Máy Trộn Bê Tông, Máy Nông Nghiệp & Quạt Công Nghiệp | Phú Long'
    : 'Concrete Mixer, Agricultural Machinery & Industrial Fan Manufacturer Vietnam | Phu Long';
  const description = vi
    ? 'Phú Long — nhà sản xuất máy trộn bê tông, máy uốn đai, máy cấy lúa, máy tuốt lúa và quạt công nghiệp tại Việt Nam. 20 năm kinh nghiệm, xuất khẩu 20 quốc gia.'
    : 'Phu Long — Vietnam manufacturer of concrete mixers, stirrup bending machines, rice transplanters, paddy threshers and industrial fans. 20+ years, 20 countries. OEM orders welcome.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://phulongglobal.com/${locale}`,
      languages: { en: 'https://phulongglobal.com/en', vi: 'https://phulongglobal.com/vi' },
    },
    openGraph: { title, description, url: `https://phulongglobal.com/${locale}` },
  };
}

const gap = 'pt-[clamp(96px,12vw,192px)]';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const entries: HeroEntry[] = mainLines.map((l) => ({
    slug: l.slug,
    tone: l.tone,
    name: pick(l.name, locale),
    tagline: pick(l.tagline, locale),
    cover: l.cover,
    count: lineProducts(l).length,
    facts: l.facts.map((f) => ({ label: pick(f.label, locale), value: pick(f.value, locale) })),
  }));

  return (
    <>
      <CatalogueHero entries={entries} />
      <FactorySection />
      <MarketsSection locale={locale} />
      <CertificatesSection />
      <OrdersSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <IndexSection locale={locale} />
      <section aria-label="Contact" className={`frame ${gap} pb-[clamp(96px,10vw,160px)]`}>
        <ContactCoupon />
      </section>
    </>
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
    { src: '/images/factory/warehouse.jpg', name: t('warehouse'), note: t('warehouseNote') },
  ];
  return (
    <section aria-labelledby="factory-title" className={`frame ${gap}`}>
      <h2 id="factory-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
        {t('title')}
      </h2>
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6" data-reveal style={{ ['--d' as string]: '80ms' }}>
          <p className="max-w-[56ch] text-[17px] leading-[1.6] text-ink">{t('text')}</p>
          <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.6] text-ink">{t('text2')}</p>
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
        <li data-reveal>
          <div className="aspect-[4/5] overflow-hidden bg-[#F3DCC7]">
            <LoopVideo src="/videos/factory-loop.mp4" poster="/images/factory/factory-loop-poster.jpg" label={t('weld')} className="h-full" />
          </div>
          <p className="mt-2.5 text-[15px] font-semibold text-ink">{t('weld')}</p>
          <p className="text-[15px] text-soft">{t('weldNote')}</p>
        </li>
        {tiles.map((tile, i) => (
          <li key={tile.src} data-reveal style={{ ['--d' as string]: `${(i + 1) * 80}ms` }}>
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
          <p className="mx-auto mt-3 max-w-[40ch] text-[17px] leading-[1.55] text-soft">{t('text')}</p>
          <ul className="mt-8 space-y-5">
            {markets.map((m) => (
              <li key={m.region.en}>
                <p className="text-[15px] font-semibold text-soft">{pick(m.region, locale)}</p>
                <p className="text-[clamp(17px,1.5vw,22px)] leading-[1.6] text-ink">
                  {m.countries.map((c, i) => (
                    <span key={c}>
                      {i > 0 && <span aria-hidden="true">{' · '}</span>}
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
          <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-5 max-w-[40ch] text-[17px] leading-[1.6] text-ink">
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
        <p data-reveal className="max-w-[46ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
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
        <p data-reveal className="mt-4 max-w-[52ch] text-[17px] leading-[1.55] text-white/85">{t('text')}</p>
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
                <blockquote className="mt-5 text-[17px] leading-[1.6] text-ink">
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

async function IndexSection({ locale }: { locale: string }) {
  const t = await getTranslations('home.index');
  return (
    <section aria-labelledby="index-title" className={`frame ${gap}`}>
      <h2 id="index-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
        {t('title')}
      </h2>
      {groups.map((g) => {
        const gl = lines.filter((l) => l.group === g.id);
        const count = gl.reduce((n, l) => n + lineProducts(l).length, 0);
        return (
          <div key={g.id} className="mt-16">
            <div className="flex items-baseline justify-between gap-4">
              <h3 data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-none tracking-[-0.02em] text-ink">
                {pick(g.name, locale)}
              </h3>
              <p className="num text-[17px] text-soft">{t('models', { count })}</p>
            </div>
            <ul className="mt-10 grid gap-x-16 gap-y-9 md:grid-cols-2">
              {gl.map((l, i) => (
                <li key={l.slug} data-reveal style={{ ['--d' as string]: `${(i % 2) * 80}ms` }} data-tone={l.tone}>
                  <Link href={`/products/${l.slug}`} className="group flex gap-5">
                    <span className="tone-tile relative block h-16 w-16 shrink-0">
                      <Image src={l.cover} alt="" fill sizes="64px" className="multiply object-contain p-1" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline justify-between gap-4">
                        <span className="text-[17px] font-bold text-ink underline-offset-4 group-hover:underline">{pick(l.name, locale)}</span>
                        <span className="num shrink-0 text-[15px] text-soft">{t('models', { count: lineProducts(l).length })}</span>
                      </span>
                      <span className="mt-1 block max-w-[46ch] text-[15px] leading-[1.5] text-soft">{pick(l.tagline, locale)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

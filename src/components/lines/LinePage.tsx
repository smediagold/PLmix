import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { lines, lineProducts, pick, type ProductLine } from '@/data/lines';
import ModelGrid from './ModelGrid';
import LoopVideo from '@/components/site/LoopVideo';
import ContactCoupon from '@/components/contact/ContactCoupon';

const gap = 'pt-[clamp(96px,12vw,192px)]';
export default async function LinePage({ line, locale }: { line: ProductLine; locale: string }) {
  const t = await getTranslations('line');
  const items = lineProducts(line);
  const name = pick(line.name, locale);
  const vi = locale === 'vi';

  const specKeys = Array.from(new Set(items.flatMap((p) => Object.keys(p.specifications)))).filter(
    (k) => items.filter((p) => p.specifications[k]).length > 1 || items.length === 1,
  );

  const custom = items.find((p) => p.customization_options)?.customization_options;

  return (
    <>
      <section
        aria-labelledby="line-title"
        className="relative isolate flex min-h-[620px] flex-col overflow-hidden bg-ink text-white lg:h-[calc(100svh-72px)]"
      >
        <Image src={`/images/heroes/${line.slug}.jpg`} alt={`${name}, Phu Long Mechanical`} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(28,28,30,0.9)_0%,rgba(28,28,30,0.65)_45%,rgba(28,28,30,0.15)_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[linear-gradient(0deg,rgba(28,28,30,0.85)_0%,rgba(28,28,30,0)_100%)]" />

        <nav aria-label={t('breadcrumb')} className="frame pt-4 text-[15px] text-white/80">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-white hover:underline">{t('home')}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/products" className="inline-flex min-h-11 items-center hover:text-white hover:underline">{t('products')}</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">{name}</li>
          </ol>
        </nav>

        <div className="frame mt-auto pb-[clamp(40px,6vh,72px)] pt-24">
          <h1 id="line-title" className="max-w-[18ch] text-[clamp(36px,5vw,76px)] font-bold leading-[1.02] tracking-[-0.03em]">
            {name}
          </h1>
          <p className="mt-5 max-w-[56ch] text-[22px] leading-[1.4] text-white/90">{pick(line.tagline, locale)}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={{ pathname: '/contact', query: { products: name } }}
              className="press inline-flex min-h-12 w-full items-center justify-center bg-brand-orange px-7 text-[17px] font-semibold text-ink hover:bg-[#FFB840] sm:w-auto"
            >
              {t('quote')}
            </Link>
            <a
              href={`https://wa.me/84946964669?text=${encodeURIComponent(t('waText', { name }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap bg-white/15 px-7 text-[17px] font-semibold text-white hover:bg-white/25 sm:w-auto"
            >
              {t('specs')}
            </a>
          </div>
          <dl className="mt-10 grid max-w-[1000px] grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
            {line.facts.map((f) => (
              <div key={f.label.en}>
                <dt className="text-[15px] text-white/70">{pick(f.label, locale)}</dt>
                <dd className="num mt-1 text-[17px] font-semibold">{pick(f.value, locale)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {line.banner && (
        <section aria-label={name} className="frame pt-[clamp(48px,6vw,96px)]">
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-12">
            {line.banner.map((b, i) => (
              <li key={b.src} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }} className={b.wide ? 'md:col-span-7' : line.banner!.some((x) => x.wide) ? 'md:col-span-5' : 'md:col-span-6'}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone md:aspect-auto md:h-[min(62svh,560px)]">
                  <Image src={b.src} alt={pick(b.caption, locale)} fill sizes="(min-width: 768px) 58vw, 100vw" className="drift object-cover" />
                </div>
                <p className="mt-2.5 text-[15px] text-soft">{pick(b.caption, locale)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="models-title" className={`frame ${gap}`}>
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 id="models-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink lg:col-span-5">
            {t('modelsTitle', { count: items.length })}
          </h2>
          <p data-reveal className="max-w-[68ch] text-[17px] leading-[1.55] text-ink lg:col-span-7">{pick(line.intro, locale)}</p>
        </div>
        <div className="mt-12">
          <ModelGrid items={items} locale={locale} />
        </div>
      </section>

      {items.length > 1 && (
        <section aria-labelledby="compare-title" className={`frame ${gap}`}>
          <h2 id="compare-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
            {t('compareTitle')}
          </h2>
          <div className="mt-10 overflow-x-auto overscroll-x-contain bg-white" data-reveal>
            <table className="num w-full min-w-[720px] border-collapse text-left text-[17px]">
              <thead>
                <tr className="bg-ink text-white">
                  <th scope="col" className="sticky left-0 bg-ink px-4 py-3 font-semibold">{t('model')}</th>
                  {specKeys.map((k) => (
                    <th key={k} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">{k}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((p) => (
                  <tr key={p.id} className="border-b border-[#E5E1DA] last:border-0">{/* taste-skill-ignore: real table */}
                    <th scope="row" className="sticky left-0 whitespace-nowrap bg-white px-4 py-3 font-semibold text-ink">
                      <Link href={`/products/${p.id.toLowerCase()}`} className="underline-offset-4 hover:underline" translate="no">
                        {p.id}
                      </Link>
                    </th>
                    {specKeys.map((k) => (
                      <td key={k} className="whitespace-nowrap px-4 py-3 text-ink">{p.specifications[k] ?? '—'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {(line.photos.length > 0 || line.video) && (
        <section aria-labelledby="made-title" className={`frame ${gap}`}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <h2 id="made-title" data-reveal className="text-[clamp(26px,2.2vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink">
                {t('factoryTitle')}
              </h2>
              <Link href="/about" className="mt-3 inline-flex min-h-11 items-center text-[17px] font-semibold text-ink underline underline-offset-4">
                {vi ? 'Về nhà máy' : 'About the factory'}
              </Link>
            </div>
            <div className="min-w-0 lg:col-span-9">
              <ul className="grid grid-cols-2 gap-x-2 gap-y-6 lg:grid-cols-4 lg:gap-x-1.5">
                {line.video && (
                  <li className="col-span-2 lg:row-span-2" data-reveal>
                    <div className="aspect-[4/5] bg-stone">
                      <LoopVideo src={line.video} poster={line.poster} label={t('video', { name })} className="h-full" />
                    </div>
                    <p className="mt-2 text-[15px] font-semibold text-ink">{t('video', { name })}</p>
                  </li>
                )}
                {line.photos.slice(0, line.video ? 4 : 8).map((ph, i) => (
                  <li key={ph.src} data-reveal style={{ ['--d' as string]: `${(i + 1) * 70}ms` }}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-white">
                      <Image src={ph.src} alt={pick(ph.caption, locale)} fill sizes="(min-width: 1024px) 18vw, 50vw" className="object-cover" />
                    </div>
                    <p className="mt-2 text-[15px] text-ink">{pick(ph.caption, locale)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {custom && (
        <section aria-labelledby="custom-title" className={`mt-[clamp(96px,12vw,192px)] bg-stone`}>
          <div className="frame grid gap-10 py-[clamp(64px,8vw,120px)] lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="custom-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
                {t('customTitle')}
              </h2>
              <p data-reveal className="mt-5 max-w-[60ch] text-[17px] leading-[1.55] text-ink">{t('customText')}</p>
            </div>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
              {Object.entries(custom).map(([k, vals]) => (
                <div key={k} data-reveal>
                  <dt className="text-[22px] font-bold text-ink">{k}</dt>
                  <dd className="mt-2 text-[17px] leading-[1.55] text-ink">{vals.join(' · ')}</dd>
                </div>
              ))}
              <div data-reveal>
                <dt className="text-[22px] font-bold text-ink">{vi ? 'Thương hiệu' : 'Branding'}</dt>
                <dd className="mt-2 text-[17px] leading-[1.55] text-ink">{vi ? 'Logo và tem nhãn riêng (OEM)' : 'Your logo and decals (OEM)'}</dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      <section aria-labelledby="more-title" className={`frame ${gap}`}>
        <h2 id="more-title" data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
          {t('moreTitle')}
        </h2>
        <ul className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {lines
            .filter((l) => l.slug !== line.slug)
            .map((l, i) => (
              <li key={l.slug} data-tone={l.tone} data-reveal style={{ ['--d' as string]: `${(i % 2) * 80}ms` }}>
                <Link href={`/products/${l.slug}`} className="group flex gap-5">
                  <span className="tone-tile relative block h-16 w-16 shrink-0">
                    <Image src={l.cover} alt="" fill sizes="64px" className="multiply object-contain p-1" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="text-[17px] font-bold text-ink underline-offset-4 group-hover:underline">{pick(l.name, locale)}</span>
                      <span className="num shrink-0 text-[15px] text-soft">{t('modelsTitle', { count: lineProducts(l).length })}</span>
                    </span>
                    <span className="mt-1 block max-w-[62ch] text-[15px] leading-[1.5] text-soft">{pick(l.tagline, locale)}</span>
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section aria-label={t('quote')} className={`frame ${gap} pb-[clamp(96px,10vw,160px)]`}>
        <ContactCoupon defaultProduct={name} />
      </section>
    </>
  );
}

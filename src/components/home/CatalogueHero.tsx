'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Tone } from '@/data/lines';

export type HeroEntry = {
  slug: string;
  tone: Tone;
  name: string;
  tagline: string;
  cover: string;
  count: number;
  facts: { label: string; value: string }[];
};

export default function CatalogueHero({ entries }: { entries: HeroEntry[] }) {
  const t = useTranslations('home.hero');
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (items) => {
        items.forEach((it) => {
          if (it.isIntersecting) setActive(Number((it.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = entries[active];

  return (
    <section aria-labelledby="hero-title" className="lg:grid lg:grid-cols-2">
      <div className="lg:order-2">
        <div
          data-tone={current.tone}
          className="tone-field relative flex h-[44svh] items-center justify-center transition-colors duration-500 md:h-[60svh] lg:sticky lg:top-[72px] lg:h-[calc(100svh-72px)] lg:items-start lg:pt-8"
        >
          <div className="w-[min(64vw,36svh)] md:w-[min(72vw,50svh)] lg:w-[min(46vw,74svh)]">
            <div className="tone-tile relative aspect-square overflow-hidden transition-colors duration-500">
              {entries.map((e, i) => (
                <Image
                  key={e.slug}
                  src={e.cover}
                  alt={i === active ? e.name : ''}
                  aria-hidden={i !== active}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 46vw, 72vw"
                  className={`multiply object-contain p-[9%] transition-[opacity,transform] duration-500 ease-out ${
                    i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
              ))}
            </div>
            <div className="mt-3 hidden items-baseline justify-between gap-4 text-[15px] lg:flex">
              <p>
                <span className="font-semibold">{current.name}</span>
                <span className="num">, {t('models', { count: current.count })}</span>
              </p>
              <a
                href={`https://wa.me/84946964669?text=${encodeURIComponent(t('waText', { name: current.name }))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
              >
                {t('specs')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:order-1">
        <div
          ref={(el) => {
            refs.current[0] = el;
          }}
          data-index={0}
          className="flex flex-col justify-end px-[clamp(16px,3.4vw,48px)] pb-12 pt-8 lg:min-h-[calc(100svh-72px)] lg:pb-16 lg:pr-[6vw]"
        >
          <h1 id="hero-title" className="text-[clamp(34px,4.4vw,68px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-[44ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="press inline-flex min-h-12 w-full items-center justify-center bg-brand-orange px-7 text-[17px] font-semibold text-ink hover:bg-[#FFB840] sm:w-auto"
            >
              {t('cta')}
            </Link>
            <Link href="/products" className="min-h-11 py-2 text-[17px] font-semibold text-ink underline underline-offset-4">
              {t('all')}
            </Link>
          </div>
        </div>

        {entries.map((e, i) => (
          <article
            key={e.slug}
            ref={(el) => {
              refs.current[i + 1] = el;
            }}
            data-index={i}
            data-tone={e.tone}
            aria-labelledby={`line-${e.slug}`}
            className="flex flex-col justify-center px-[clamp(16px,3.4vw,48px)] py-16 lg:min-h-[64svh] lg:pr-[6vw]"
          >
            <div className={`tone-tile relative mb-8 aspect-[4/3] lg:hidden ${i === 0 ? 'hidden' : ''}`}>
              <Image src={e.cover} alt={e.name} fill sizes="100vw" className="multiply object-contain p-[8%]" />
            </div>
            <h2 id={`line-${e.slug}`} data-reveal className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              <Link href={`/products/${e.slug}`} className="hover:underline underline-offset-4 decoration-2">
                {e.name}
              </Link>
            </h2>
            <p data-reveal style={{ ['--d' as string]: '80ms' }} className="mt-4 max-w-[46ch] text-[17px] leading-[1.55] text-ink">
              {e.tagline}
            </p>
            <dl data-reveal style={{ ['--d' as string]: '160ms' }} className="mt-8 grid max-w-[560px] grid-cols-2 gap-x-8 gap-y-5">
              {e.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[15px] text-soft">{f.label}</dt>
                  <dd className="num mt-1 text-[17px] font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal style={{ ['--d' as string]: '240ms' }} className="mt-9 flex flex-wrap gap-3">
              <Link
                href={`/products/${e.slug}`}
                className="press tone-field inline-flex min-h-12 items-center px-6 text-[17px] font-semibold hover:opacity-90"
              >
                {t('view', { count: e.count })}
              </Link>
              <Link
                href={{ pathname: '/contact', query: { products: e.name } }}
                className="press inline-flex min-h-12 items-center bg-stone px-6 text-[17px] font-semibold text-ink hover:bg-[#E0D9CE]"
              >
                {t('quote')}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

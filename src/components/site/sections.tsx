import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { pick } from '@/data/lines';
import { markets, testimonials } from '@/data/proof';

export const sectionGap = 'pt-[clamp(64px,8vw,128px)]';
const gap = sectionGap;

export async function VideoSection() {
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

export async function MarketsSection({ locale }: { locale: string }) {
  const t = await getTranslations('home.markets');
  return (
    <section aria-labelledby="markets-title" className="mt-[clamp(64px,8vw,128px)] overflow-hidden bg-brand-orange">
      <div className="frame flex justify-center py-[clamp(48px,6vw,88px)]">
        <div data-reveal className="w-full max-w-[880px] -rotate-1 rounded-3xl bg-ground px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 id="markets-title" className="text-[clamp(30px,3vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
            {t('title')}
          </h2>
          <p className="mx-auto mt-3 max-w-[56ch] text-[17px] leading-[1.55] text-ink">{t('text')}</p>
          <div className="mt-10 space-y-7">
            {markets.map((m) => (
              <div key={m.region.en}>
                <p className="text-[15px] font-semibold text-soft">{pick(m.region, locale)}</p>
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {m.countries.map((c) => (
                    <li key={c.code} className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4">
                      <Image src={`/images/flags/${c.code}.svg`} alt="" width={30} height={30} className="h-[30px] w-[30px] rounded-full" />
                      <span className="text-[17px] font-semibold text-ink">{c.name}</span>
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

export async function CertificatesSection() {
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

export async function TestimonialsSection({ locale }: { locale: string }) {
  const t = await getTranslations('home.reviews');
  const tilt = ['-rotate-3', 'rotate-2', 'rotate-[4deg]', 'rotate-1', '-rotate-2', 'rotate-[3deg]'];
  return (
    <section aria-labelledby="reviews-title" className="mt-[clamp(64px,8vw,128px)] overflow-hidden bg-ink">
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

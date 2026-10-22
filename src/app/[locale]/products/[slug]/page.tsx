import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, getProductById, type Product } from '@/data/products';
import { lines, getLine, lineOfProduct, pick } from '@/data/lines';
import { Link } from '@/i18n/navigation';
import ProductGallery from '@/components/products/ProductGallery';
import InquiryToggle from '@/components/inquiry/InquiryToggle';
import LinePage from '@/components/lines/LinePage';
import { keyFact } from '@/components/lines/ModelGrid';
import LoopVideo from '@/components/site/LoopVideo';

export function generateStaticParams() {
  return [...lines.map((l) => ({ slug: l.slug })), ...products.map((p) => ({ slug: p.id.toLowerCase() }))];
}

const base = 'https://phulongglobal.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const url = `${base}/${locale}/products/${slug}`;
  const languages = { en: `${base}/en/products/${slug}`, vi: `${base}/vi/products/${slug}` };

  const line = getLine(slug);
  if (line) {
    const title = locale === 'vi' ? `${line.name.vi} – Nhà Sản Xuất Việt Nam | Phú Long` : `${line.name.en} Manufacturer in Vietnam | Phu Long`;
    const description = `${pick(line.tagline, locale)} ${pick(line.intro, locale)}`.slice(0, 160);
    return {
      title: { absolute: title },
      description,
      alternates: { canonical: url, languages },
      openGraph: { title, description, url, images: [{ url: line.cover }] },
    };
  }

  const product = getProductById(slug.toUpperCase()) ?? getProductById(slug);
  if (!product) return {};
  const vi = locale === 'vi';
  const name = vi ? product.name_vi : product.name_en;
  const desc = vi ? product.description_vi : product.description_en;
  const moqLine = product.moq ? (vi ? ` MOQ ${product.moq} chiếc.` : ` MOQ ${product.moq} units.`) : '';
  const description = `${desc}${moqLine}`.slice(0, 160);
  return {
    title: { absolute: `${name.split(' — ')[0]} | Phu Long` },
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: `${name} | Phu Long Mechanical`,
      description,
      url,
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function SlugPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const line = getLine(slug);
  if (line) return <LinePage line={line} locale={locale} />;

  const product = getProductById(slug.toUpperCase()) ?? getProductById(slug);
  if (!product) notFound();
  return <ProductDetail product={product} locale={locale} />;
}

const gap = 'pt-[clamp(80px,9vw,144px)]';

async function ProductDetail({ product, locale }: { product: Product; locale: string }) {
  const t = await getTranslations('products');
  const tl = await getTranslations('line');
  const vi = locale === 'vi';
  const name = vi ? product.name_vi : product.name_en;
  const description = vi ? product.description_vi : product.description_en;
  const line = lineOfProduct(product);
  const related = product.related_skus.map((id) => getProductById(id)).filter((p): p is Product => Boolean(p)).slice(0, 4);

  return (
    <>
      <div className="frame">
        <nav aria-label={tl('breadcrumb')} className="pt-4 text-[15px] text-soft">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-ink hover:underline">{tl('home')}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/products" className="inline-flex min-h-11 items-center hover:text-ink hover:underline">{tl('products')}</Link></li>
            {line && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={`/products/${line.slug}`} className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
                    {pick(line.name, locale)}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink" translate="no">{product.id}</li>
          </ol>
        </nav>

        <div className="mt-4 grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
          <div className="lg:col-start-2 lg:row-start-1">
            <h1 className="text-[clamp(26px,3vw,44px)] font-bold leading-[1.08] tracking-[-0.02em] text-ink">{name}</h1>
          </div>
          <div data-tone={line?.tone ?? 'orange'} className="lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <ProductGallery product={product} name={name} />
          </div>
          <div className="flex flex-col lg:col-start-2 lg:row-start-2">
            <p className="max-w-[68ch] text-[17px] leading-[1.55] text-ink">{description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
              {Object.entries(product.specifications).slice(0, 4).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[15px] text-soft">{k}</dt>
                  <dd className="num mt-1 text-[17px] font-semibold text-ink">{v}</dd>
                </div>
              ))}
              {product.moq && (
                <div>
                  <dt className="text-[15px] text-soft">{t('moq')}</dt>
                  <dd className="num mt-1 text-[17px] font-semibold text-ink">
                    {product.moq} {vi ? 'chiếc' : product.moq === 1 ? 'unit' : 'units'}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={{ pathname: '/contact', query: { products: product.id } }}
                className="press inline-flex min-h-12 items-center bg-brand-orange px-7 text-[17px] font-semibold text-ink hover:bg-[#FFB840]"
              >
                {t('requestQuote')}
              </Link>
              <InquiryToggle sku={product.id} name={name} />
              <a
                href={`https://wa.me/84946964669?text=${encodeURIComponent(`${vi ? 'Xin báo giá' : 'Please quote'}: ${product.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex min-h-12 items-center bg-stone px-5 text-[17px] font-semibold text-ink hover:bg-[#E0D9CE]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <section aria-labelledby="spec-title" className={`frame ${gap}`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="spec-title" data-reveal className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-[-0.01em] text-ink">{t('specifications')}</h2>
            <p data-reveal className="mt-4 max-w-[56ch] text-[17px] leading-[1.55] text-ink">
              {vi ? 'Thông số tiêu chuẩn. Mọi máy có thể điều chỉnh theo đơn hàng.' : 'Standard specification. Every machine can be adjusted to your order.'}
            </p>
            <a
              href={`https://wa.me/84946964669?text=${encodeURIComponent(tl('waText', { name }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-[17px] font-semibold text-ink underline underline-offset-4"
            >
              {tl('specs')}
            </a>
          </div>
          <div className="overflow-x-auto bg-white lg:col-span-8" data-reveal>
            <table className="num w-full border-collapse text-left text-[17px]">
              <tbody>
                {Object.entries(product.specifications).map(([k, v]) => (
                  <tr key={k} className="border-b border-[#E5E1DA] last:border-0">{/* taste-skill-ignore: real table */}
                    <th scope="row" className="w-2/5 px-5 py-3.5 font-semibold text-ink">{k}</th>
                    <td className="px-5 py-3.5 text-ink">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {line && (line.video || line.photos.length > 0) && (
        <section aria-labelledby="made-title" className={`frame ${gap}`}>
          <h2 id="made-title" data-reveal className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-[-0.01em] text-ink">{tl('factoryTitle')}</h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-2 gap-y-6 lg:grid-cols-4">
            {line.video && (
              <li className="col-span-2 lg:col-span-1" data-reveal>
                <div className="aspect-[4/5] bg-stone">
                  <LoopVideo src={line.video} poster={line.poster} label={tl('video', { name: pick(line.name, locale) })} className="h-full" />
                </div>
                <p className="mt-2 text-[15px] font-semibold text-ink">{tl('video', { name: pick(line.name, locale) })}</p>
              </li>
            )}
            {line.photos.slice(0, line.video ? 3 : 4).map((ph, i) => (
              <li key={ph.src} data-reveal style={{ ['--d' as string]: `${(i + 1) * 70}ms` }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                  <Image src={ph.src} alt={pick(ph.caption, locale)} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <p className="mt-2 text-[15px] text-ink">{pick(ph.caption, locale)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {product.customization_options && (
        <section aria-labelledby="opt-title" className={`frame ${gap}`}>
          <div className="grid gap-10 bg-stone p-[clamp(24px,4vw,56px)] lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="opt-title" data-reveal className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-[-0.01em] text-ink">{t('customizationOptions')}</h2>
              <p className="mt-4 text-[17px] leading-[1.55] text-ink">{tl('customText')}</p>
            </div>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-8">
              {Object.entries(product.customization_options).map(([k, vals]) => (
                <div key={k}>
                  <dt className="text-[17px] font-bold text-ink">{k}</dt>
                  <dd className="mt-1.5 text-[17px] leading-[1.55] text-ink">{vals.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section aria-labelledby="rel-title" className={`frame ${gap} pb-[clamp(96px,10vw,160px)]`}>
          <h2 id="rel-title" data-reveal className="text-[clamp(26px,2.4vw,36px)] font-bold tracking-[-0.01em] text-ink">{t('relatedProducts')}</h2>
          <ul className={`mt-8 grid grid-cols-2 gap-x-3 gap-y-8 ${related.length >= 3 ? 'lg:grid-cols-4' : ''}`}>
            {related.map((p, i) => {
              const pname = vi ? p.name_vi : p.name_en;
              return (
                <li key={p.id} data-reveal data-tone={(['orange', 'graphite', 'field', 'rust'] as const)[i % 4]}>
                  <Link href={`/products/${p.id.toLowerCase()}`} className="group block">
                    <span className="tone-tile relative block aspect-square">
                      {p.images[0] && (
                        <Image src={p.images[0]} alt={pname} fill sizes="(min-width: 1024px) 25vw, 50vw" className="multiply object-contain p-[10%]" />
                      )}
                    </span>
                    <span className="mt-3 block text-[17px] font-semibold leading-snug text-ink group-hover:underline underline-offset-4">{pname}</span>
                    <span className="num mt-1 block text-[15px] text-soft">
                      <span translate="no">{p.id}</span>
                      {keyFact(p) && <> · {keyFact(p)}</>}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}

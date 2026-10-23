import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { categoryLabels, categoryLine, getBlogPost, postContent, postInLocale, postsForLocale, postTitle, postExcerpt, blogPosts } from '@/data/blog';
import { LOCALES } from '@/data/nav';
import { alternates } from '@/lib/meta';
import { getLine, pick } from '@/data/lines';
import BlogCard, { BlogImage, postMeta } from '@/components/blog/BlogCard';
import ContactCoupon from '@/components/contact/ContactCoupon';
import { sectionGap } from '@/components/site/sections';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const title = postTitle(post, locale);
  const description = postExcerpt(post, locale).slice(0, 160);
  const translated = postInLocale(post, locale);
  const url = `https://www.phulongglobal.com/${locale}/blog/${slug}`;
  return {
    title: { absolute: `${title} | Phu Long` },
    description,
    alternates: translated
      ? alternates(`/blog/${slug}`, locale, LOCALES.filter((l) => postInLocale(post, l)))
      : { canonical: `https://www.phulongglobal.com/en/blog/${slug}` },
    robots: translated ? undefined : { index: false, follow: true },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      images: post.image ? [{ url: post.image }] : undefined,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getBlogPost(slug);
  if (!post) notFound();

  const t = await getTranslations('blog');
  const tl = await getTranslations('line');
  const title = postTitle(post, locale);
  const content = postContent(post, locale);
  const pool = postsForLocale(locale);
  const lineSlug = categoryLine[post.category];
  const line = lineSlug ? getLine(lineSlug) : undefined;
  const related = [
    ...pool.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...pool.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <>
      <div className="frame pt-4">
        <nav aria-label={tl('breadcrumb')} className="text-[15px] text-soft">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-ink hover:underline">{tl('home')}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="inline-flex min-h-11 items-center hover:text-ink hover:underline">{t('title')}</Link></li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={{ pathname: '/blog', query: { category: post.category } }} className="inline-flex min-h-11 items-center hover:text-ink hover:underline">
                {pick(categoryLabels[post.category], locale)}
              </Link>
            </li>
          </ol>
        </nav>

        <header data-reveal className="mt-6 max-w-[900px]">
          <h1 className="text-[clamp(24px,4.4vw,54px)] font-bold leading-[1.08] tracking-[-0.025em] text-ink">{title}</h1>
          <p className="mt-4 text-[17px] text-soft">{await postMeta(post, locale)}</p>
        </header>

        <div data-reveal className="group relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-[#FBE6C2] lg:aspect-[21/9]">
          <BlogImage post={post} alt={title} sizes="100vw" priority />
        </div>
      </div>

      <div className="frame mt-12 grid gap-12 lg:grid-cols-12">
        <article data-reveal className="lg:col-span-8 xl:col-span-7">
          <BlogContent content={content} />
        </article>

        <aside className="lg:col-span-4 xl:col-start-9">
          <div data-reveal className="space-y-4 lg:sticky lg:top-[104px]">
            {line && (
              <Link href={`/products/${line.slug}`} className="group block overflow-hidden rounded-3xl bg-white" data-tone={line.tone}>
                <span className="tone-tile relative block aspect-[4/3]">
                  <Image src={line.cover} alt={pick(line.name, locale)} fill sizes="(min-width: 1024px) 30vw, 100vw" className="multiply object-contain p-[10%]" />
                </span>
                <span className="block p-5">
                  <span className="block text-[15px] text-soft">{t('relatedLine')}</span>
                  <span className="mt-1 block text-[22px] font-bold text-ink underline-offset-4 group-hover:underline">{pick(line.name, locale)}</span>
                  <span className="mt-1 block text-[17px] text-ink">{pick(line.tagline, locale)}</span>
                </span>
              </Link>
            )}
            <div className="rounded-3xl bg-ink p-6 text-white">
              <p className="text-[22px] font-bold">{t('askTitle')}</p>
              <p className="mt-2 text-[17px] text-white/85">{t('askText')}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/84946964669?text=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex min-h-11 items-center bg-[#25D366] px-5 text-[17px] font-semibold text-ink hover:bg-[#3ee07a]"
                >
                  WhatsApp
                </a>
                <Link href="/contact" className="press inline-flex min-h-11 items-center bg-white/15 px-5 text-[17px] font-semibold text-white hover:bg-white/25">
                  {tl('quote')}
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-posts" className={`frame ${sectionGap}`}>
          <h2 id="related-posts" className="text-[clamp(28px,2.6vw,40px)] font-bold tracking-[-0.02em] text-ink">{t('related')}</h2>
          <ul className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug} data-reveal>
                <BlogCard post={p} locale={locale} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-label={tl('quote')} className={`frame ${sectionGap} pb-[clamp(64px,8vw,120px)]`}>
        <ContactCoupon defaultProduct={line ? pick(line.name, locale) : ''} />
      </section>
    </>
  );
}

function BlogContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let tableBuffer: string[] = [];

  const flushTable = () => {
    if (tableBuffer.length === 0) return;
    const rows = tableBuffer.filter((l) => !l.match(/^\|[-| ]+\|$/));
    const headers = rows[0]?.split('|').filter(Boolean).map((h) => h.trim()) ?? [];
    const dataRows = rows.slice(1);
    elements.push(
      <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-2xl bg-white">
        <table className="num w-full border-collapse text-[16px]">
          <thead>
            <tr className="bg-ink text-white">
              {headers.map((h, hi) => (
                <th key={hi} className="px-4 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => {
              const cells = row.split('|').filter(Boolean).map((c) => c.trim());
              return (
                <tr key={ri} className="border-b border-[#E5E1DA] last:border-0">{/* taste-skill-ignore: real table */}
                  {cells.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-ink">{cell}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('|')) {
      tableBuffer.push(line);
      i++;
      continue;
    } else if (tableBuffer.length > 0) {
      flushTable();
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} data-reveal className="mb-3 mt-10 text-[clamp(24px,2vw,30px)] font-bold leading-tight tracking-[-0.01em] text-ink">{line.slice(3)}</h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mb-2 mt-8 text-[22px] font-bold text-ink">{line.slice(4)}</h3>
      );
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-5 space-y-2">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-3 text-[18px] leading-[1.65] text-ink">
              <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-3" />);
    } else {
      elements.push(
        <p key={i} className="text-[18px] leading-[1.7] text-ink">
          <InlineMarkdown text={line} />
        </p>
      );
    }
    i++;
  }
  flushTable();

  return <>{elements}</>;
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { blogPosts, getBlogPost, type BlogPost } from '@/data/blog';

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
  const vi = locale === 'vi';
  const title = vi ? post.title_vi : post.title_en;
  const description = (vi ? post.excerpt_vi : post.excerpt_en).slice(0, 160);
  const url = `https://phulongglobal.com/${locale}/blog/${slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `https://phulongglobal.com/en/blog/${slug}`,
        vi: `https://phulongglobal.com/vi/blog/${slug}`,
      },
    },
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getBlogPost(slug);
  if (!post) notFound();

  const vi = locale === 'vi';
  const title = vi ? post.title_vi : post.title_en;
  const content = vi ? post.content_vi : post.content_en;

  const formattedDate = new Date(post.date).toLocaleDateString(vi ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray">
            <Link href="/" className="hover:text-dark transition-colors">
              {vi ? 'Trang Chủ' : 'Home'}
            </Link>
            <ChevronIcon />
            <Link href="/blog" className="hover:text-dark transition-colors">
              {vi ? 'Blog' : 'Blog'}
            </Link>
            <ChevronIcon />
            <span className="text-dark font-medium line-clamp-1">{title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <CategoryBadge post={post} locale={locale} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-4xl">{title}</h1>
        <div className="mt-3 flex items-center gap-4 text-sm text-brand-gray/60">
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readTime} {vi ? 'phút đọc' : 'min read'}</span>
        </div>

        {/* Hero image */}
        <div className="mt-8 relative aspect-video overflow-hidden rounded-2xl bg-surface">
          <Image
            src={post.image}
            alt={title}
            fill
            className="object-contain p-6"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Content rendered as markdown-like HTML */}
        <article className="mt-10 prose-content">
          <BlogContent content={content} />
        </article>

        {/* Back link */}
        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
          >
            <svg className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {vi ? 'Quay lại Blog' : 'Back to Blog'}
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-dark p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">
            {vi ? 'Quan tâm đến sản phẩm?' : 'Interested in our products?'}
          </h2>
          <p className="mt-2 text-sm text-white/60">
            {vi
              ? 'Liên hệ với chúng tôi để được báo giá và tư vấn.'
              : 'Get in touch for a quote and product consultation.'}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {vi ? 'Xem Sản Phẩm' : 'Browse Products'}
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-brand-orange px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              {vi ? 'Liên Hệ' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

const categoryLabels: Record<BlogPost['category'], { en: string; vi: string }> = {
  'concrete-mixer': { en: 'Concrete Mixer', vi: 'Máy Trộn Bê Tông' },
  'wheelbarrow': { en: 'Wheelbarrow', vi: 'Xe Rùa' },
  'rice-transplanter': { en: 'Rice Transplanter', vi: 'Máy Cấy Lúa' },
  'paddy-thresher': { en: 'Paddy Thresher', vi: 'Máy Tuốt Lúa' },
  'general': { en: 'General', vi: 'Tổng Quan' },
};

function CategoryBadge({ post, locale }: { post: BlogPost; locale: string }) {
  const vi = locale === 'vi';
  const label = vi ? categoryLabels[post.category].vi : categoryLabels[post.category].en;
  return (
    <span className="inline-block rounded-full border border-brand-orange/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-brand-orange">
      {label}
    </span>
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
      <div key={`table-${i}`} className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-brand-orange/10">
              {headers.map((h, hi) => (
                <th key={hi} className="border border-border px-3 py-2 text-left font-semibold text-dark">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => {
              const cells = row.split('|').filter(Boolean).map((c) => c.trim());
              return (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                  {cells.map((cell, ci) => (
                    <td key={ci} className="border border-border px-3 py-2 text-brand-gray">{cell}</td>
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
        <h2 key={i} className="mt-8 mb-3 text-xl font-bold text-dark">{line.slice(3)}</h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mt-6 mb-2 text-lg font-bold text-dark">{line.slice(4)}</h3>
      );
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-1.5 pl-4">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 text-brand-gray">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-base leading-relaxed text-brand-gray">
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
          return <strong key={i} className="font-semibold text-dark">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

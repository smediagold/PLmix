import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { blogPosts, type BlogPost } from '@/data/blog';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Blog — Hướng Dẫn & Kiến Thức Kỹ Thuật Máy Móc Xây Dựng & Nông Nghiệp'
    : 'Blog — Machinery Buying Guides & Technical Insights';
  const description = vi
    ? 'Hướng dẫn chọn máy trộn bê tông, máy cấy lúa, máy tuốt lúa — kinh nghiệm thực tế từ nhà sản xuất Phú Long 20 năm kinh nghiệm xuất khẩu.'
    : 'Practical guides on choosing concrete mixers, rice transplanters, paddy threshers and more — from a manufacturer with 20+ years of export experience.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://phulongglobal.com/${locale}/blog`,
      languages: { en: 'https://phulongglobal.com/en/blog', vi: 'https://phulongglobal.com/vi/blog' },
    },
    openGraph: { title, description, url: `https://phulongglobal.com/${locale}/blog` },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-page-bg">
      <PageHeader locale={locale} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PageHeader({ locale }: { locale: string }) {
  const t = useTranslations('blog');
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-base text-brand-gray">{t('subtitle')}</p>
      </div>
    </div>
  );
}

const categoryColors: Record<BlogPost['category'], { bg: string; text: string }> = {
  'concrete-mixer': { bg: 'bg-amber-50', text: 'text-construction' },
  'wheelbarrow': { bg: 'bg-orange-50', text: 'text-brand-orange' },
  'rice-transplanter': { bg: 'bg-green-50', text: 'text-agriculture' },
  'paddy-thresher': { bg: 'bg-green-50', text: 'text-agriculture' },
  'general': { bg: 'bg-gray-100', text: 'text-brand-gray' },
};

const categoryLabels: Record<BlogPost['category'], { en: string; vi: string }> = {
  'concrete-mixer': { en: 'Concrete Mixer', vi: 'Máy Trộn Bê Tông' },
  'wheelbarrow': { en: 'Wheelbarrow', vi: 'Xe Rùa' },
  'rice-transplanter': { en: 'Rice Transplanter', vi: 'Máy Cấy Lúa' },
  'paddy-thresher': { en: 'Paddy Thresher', vi: 'Máy Tuốt Lúa' },
  'general': { en: 'General', vi: 'Tổng Quan' },
};

function BlogCard({ post, locale }: { post: BlogPost; locale: string }) {
  const vi = locale === 'vi';
  const title = vi ? post.title_vi : post.title_en;
  const excerpt = vi ? post.excerpt_vi : post.excerpt_en;
  const color = categoryColors[post.category];
  const catLabel = vi ? categoryLabels[post.category].vi : categoryLabels[post.category].en;

  const formattedDate = new Date(post.date).toLocaleDateString(vi ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={post.image}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${color.bg} ${color.text}`}>
            {catLabel}
          </span>
          <span className="text-xs text-brand-gray/60">{post.readTime} min read</span>
        </div>
        <h2 className="mt-3 text-base font-bold leading-snug text-dark group-hover:text-brand-orange transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="mt-2 flex-1 text-sm text-brand-gray leading-relaxed line-clamp-3">{excerpt}</p>
        <p className="mt-4 text-xs text-brand-gray/50">{formattedDate}</p>
      </div>
    </Link>
  );
}

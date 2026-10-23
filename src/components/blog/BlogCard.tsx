import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { categoryLabels, type BlogPost } from '@/data/blog';

export const isCutout = (src: string) => src.endsWith('.png') || src.includes('/lines/');

export function postMeta(post: BlogPost, locale: string) {
  const vi = locale === 'vi';
  const date = new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(post.date));
  return `${categoryLabels[post.category][vi ? 'vi' : 'en']} · ${date} · ${post.readTime} ${vi ? 'phút đọc' : 'min read'}`;
}

export function BlogImage({ post, alt, sizes, priority = false }: { post: BlogPost; alt: string; sizes: string; priority?: boolean }) {
  const cut = isCutout(post.image);
  return (
    <Image
      src={post.image}
      alt={alt}
      fill
      priority={priority}
      fetchPriority={priority ? 'high' : undefined}
      sizes={sizes}
      className={`${cut ? 'multiply object-contain p-[8%]' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.03]`}
    />
  );
}

export default function BlogCard({ post, locale, large = false }: { post: BlogPost; locale: string; large?: boolean }) {
  const vi = locale === 'vi';
  const title = vi ? post.title_vi : post.title_en;
  const excerpt = vi ? post.excerpt_vi : post.excerpt_en;
  return (
    <Link href={`/blog/${post.slug}`} prefetch={false} className={`group block ${large ? 'grid gap-8 lg:grid-cols-12 lg:items-center' : ''}`}>
      <span className={`relative block overflow-hidden rounded-3xl bg-[#FBE6C2] ${large ? 'aspect-[16/10] lg:col-span-7' : 'aspect-[4/3]'}`}>
        <BlogImage post={post} alt={title} sizes={large ? '(min-width: 1024px) 58vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'} priority={large} />
      </span>
      <span className={`block ${large ? 'lg:col-span-5' : 'mt-4'}`}>
        <span className={`block font-bold leading-[1.15] tracking-[-0.01em] text-ink underline-offset-4 group-hover:underline ${large ? 'text-[clamp(22px,2.2vw,32px)]' : 'text-[20px] md:text-[22px]'}`}>
          {title}
        </span>
        <span className="mt-2 block text-[15px] text-soft">{postMeta(post, locale)}</span>
        <span className={`mt-3 block text-[17px] leading-[1.55] text-ink ${large ? '' : 'line-clamp-3'}`}>{excerpt}</span>
        {large && (
          <span className="mt-6 inline-flex min-h-11 items-center rounded-full bg-ink px-6 text-[17px] font-semibold text-white">
            {vi ? 'Đọc bài viết' : 'Read the article'}
          </span>
        )}
      </span>
    </Link>
  );
}

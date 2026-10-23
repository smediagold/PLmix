import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type Crumb = { href?: string; label: string };

export default function PageHero({
  image,
  alt,
  title,
  text,
  crumbs,
  crumbLabel,
  size = 'full',
  children,
}: {
  image: string;
  alt: string;
  title: string;
  text?: string;
  crumbs: Crumb[];
  crumbLabel: string;
  size?: 'full' | 'compact';
  children?: React.ReactNode;
}) {
  const height = size === 'full' ? 'min-h-[620px] lg:h-[calc(100svh-80px)]' : 'min-h-[440px] lg:min-h-[min(64svh,620px)]';
  return (
    <section aria-labelledby="page-title" className={`relative isolate flex flex-col overflow-hidden bg-ink text-white ${height}`}>
      <Image src={image} alt={alt} fill priority fetchPriority="high" sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(28,28,30,0.75)_0%,rgba(28,28,30,0.35)_50%,rgba(28,28,30,0.05)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[linear-gradient(0deg,rgba(28,28,30,0.92)_0%,rgba(28,28,30,0.5)_45%,rgba(28,28,30,0)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-28 bg-[linear-gradient(180deg,rgba(28,28,30,0.55)_0%,rgba(28,28,30,0)_100%)]" />

      <nav aria-label={crumbLabel} className="frame pt-4 text-[15px] text-white/80">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className="inline-flex min-h-11 items-center hover:text-white hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-white">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="frame mt-auto pb-[clamp(40px,6vh,72px)] pt-20">
        <h1 id="page-title" className="max-w-[20ch] text-[clamp(36px,5vw,76px)] font-bold leading-[1.02] tracking-[-0.03em]">
          {title}
        </h1>
        {text && <p className="mt-5 max-w-[60ch] text-[18px] leading-[1.45] text-white/90 md:text-[22px] md:leading-[1.4]">{text}</p>}
        {children}
      </div>
    </section>
  );
}

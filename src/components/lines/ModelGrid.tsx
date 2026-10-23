import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Product } from '@/data/products';
import InquiryToggle from '@/components/inquiry/InquiryToggle';

const tileTones = ['orange', 'graphite', 'field', 'rust'] as const;
const keyFacts = ['Mixing Volume', 'Air Flow', 'Output Capacity', 'Productivity', 'Capacity', 'Power', 'Steel Diameter', 'Operation'];

export const keyFact = (p: Product) => {
  const k = keyFacts.find((key) => p.specifications[key]);
  return k ? p.specifications[k] : '';
};

const lgCols = (n: number) =>
  n <= 2 ? 'lg:grid-cols-2' : n % 4 === 0 ? 'lg:grid-cols-4' : n % 3 === 0 ? 'lg:grid-cols-3' : n % 5 === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-4';

export default function ModelGrid({ items, locale }: { items: Product[]; locale: string }) {
  const vi = locale === 'vi';
  return (
    <ul className={`grid grid-cols-2 gap-x-3 gap-y-10 ${lgCols(items.length)}`}>
      {items.map((p, i) => {
        const pname = vi ? p.name_vi : p.name_en;
        return (
          <li
            key={p.id}
            data-reveal
            data-tone={tileTones[i % tileTones.length]}
            style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}
          >
            <Link href={`/products/${p.id.toLowerCase()}`} prefetch={false} className="group block">
              <span className="tone-tile relative block aspect-square overflow-hidden">
                {p.images[0] && (
                  <Image
                    src={p.images[0]}
                    alt={pname}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="multiply object-contain p-[10%] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                )}
              </span>
              <span className={`mt-3 block text-[17px] font-semibold leading-snug text-ink underline-offset-4 group-hover:underline`}>
                {pname}
              </span>
              <span className="num mt-1 block text-[17px] text-soft">
                <span translate="no">{p.id}</span>
                {keyFact(p) && <> · {keyFact(p)}</>}
              </span>
            </Link>
            <div className="mt-3">
              <InquiryToggle sku={p.id} name={pname} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getProductById, getProductsBySubcategory, getProductsByCategory, type Subcategory, type Category } from '@/data/products';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const vi = locale === 'vi';
  const title = vi
    ? 'Nhà Sản Xuất Máy Trộn Bê Tông & Máy Nông Nghiệp Xuất Khẩu | Phú Long'
    : 'Concrete Mixer & Agricultural Machinery Manufacturer Vietnam | Phu Long';
  const description = vi
    ? 'Phú Long — nhà sản xuất máy trộn bê tông, máy cấy lúa, máy tuốt lúa tại Việt Nam. 20 năm kinh nghiệm, xuất khẩu 20+ quốc gia. Nhận báo giá ngay.'
    : 'Phu Long — Vietnam manufacturer of concrete mixers, rice transplanters, paddy threshers & stirrup bending machines. 20+ years, 20 countries. OEM orders welcome.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://phulongglobal.com/${locale}`,
      languages: { en: 'https://phulongglobal.com/en', 'vi': 'https://phulongglobal.com/vi' },
    },
    openGraph: { title, description, url: `https://phulongglobal.com/${locale}` },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsByTypeSection locale={locale} />
      <MarketsSection />
      <CertificatesSection />
      <TestimonialsSection locale={locale} />
      <OrdersSection locale={locale} />
      <FactorySection />
      <CustomizationSection />
      <CtaSection />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  const t = useTranslations('home.hero');
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Background cover image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cover.png"
          alt="Phu Long concrete mixers on construction site"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Dark gradient over left half so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Phu Long Mechanical
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-xl">
            {t('subtext')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t('ctaProducts')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t('ctaQuote')}
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────── */
function StatsSection() {
  const t = useTranslations('home.stats');
  const stats = [
    { value: '20+', label: t('years') },
    { value: '20', label: t('countries') },
    { value: '70+', label: t('customers') },
    { value: '1', label: t('factory') },
  ];
  return (
    <section className="bg-brand-orange">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Products Showcase (alternating) ──────────────────────── */
function ProductsByTypeSection({ locale }: { locale: string }) {
  const tP = useTranslations('products');
  const vi = locale === 'vi';

  type Feature = { label: string; value: string };
  type GroupDef = {
    id: string;
    title: string;
    tagline: string;
    href: string;
    productId: string;
    subcategory?: Subcategory;
    categoryFallback?: Category;
    features: Feature[];
    mainImage: string;
    thumbnails: string[];
  };

  const groups: GroupDef[] = [
    {
      id: 'concrete-mixer',
      title: vi ? 'Máy Trộn Bê Tông' : 'Concrete Mixers',
      tagline: vi
        ? 'Sản xuất tại nhà máy Phú Long — tùy chỉnh theo yêu cầu xuất khẩu.'
        : 'Factory-built in Vietnam — fully customizable for export buyers.',
      href: '/products?category=construction',
      productId: 'CM-350-2W-P',
      subcategory: 'concrete-mixer',
      features: vi
        ? [
            { label: 'Dung tích', value: '200L – 500L' },
            { label: 'Động cơ', value: 'Điện / Xăng / Diesel' },
            { label: 'Cấu hình', value: '2 hoặc 4 bánh xe' },
            { label: 'Tùy chỉnh', value: 'Màu sắc, logo OEM, độ dày thùng' },
          ]
        : [
            { label: 'Drum capacity', value: '200L – 500L' },
            { label: 'Engine', value: 'Electric / Gasoline / Diesel' },
            { label: 'Wheel config', value: '2 or 4 wheels' },
            { label: 'Customizable', value: 'Color, OEM logo, drum thickness' },
          ],
      mainImage: '/images/products/concrete-mixer/cm-350-2w-1.png',
      thumbnails: [
        '/images/products/concrete-mixer/cm-350-2w-2.png',
        '/images/products/concrete-mixer/cm-350-2w-3.png',
        '/images/products/concrete-mixer/cm-350-2w-4.png',
        '/images/products/concrete-mixer/cm-350-4w-1.png',
      ],
    },
    {
      id: 'stirrup-bending',
      title: vi ? 'Máy Uốn Đai Thép' : 'Stirrup Bending Machines',
      tagline: vi
        ? 'Uốn đai thép chính xác cao — phiên bản servo PLC tiết kiệm vật liệu đáng kể.'
        : 'High-precision rebar stirrup bending — servo PLC model cuts material waste significantly.',
      href: '/products?category=construction',
      productId: 'SBM-SERVO',
      subcategory: 'stirrup-bending-machine',
      features: vi
        ? [
            { label: 'Phiên bản', value: 'Động cơ thường / Servo PLC' },
            { label: 'Tốc độ', value: '800 – 1200 lần/giờ' },
            { label: 'Kích thước thép', value: 'Φ4 – Φ14 mm' },
            { label: 'Tiết kiệm vật liệu', value: 'Lên đến 7% (servo)' },
          ]
        : [
            { label: 'Versions', value: 'Normal motor / Servo PLC' },
            { label: 'Speed', value: '800 – 1,200 cycles/hour' },
            { label: 'Bar diameter', value: 'Φ4 – Φ14 mm' },
            { label: 'Material saving', value: 'Up to 7% (servo model)' },
          ],
      mainImage: '/images/products/stirrup-bending/sbm-servo-1.png',
      thumbnails: [
        '/images/products/stirrup-bending/sbm-normal-1.png',
        '/images/products/stirrup-bending/sbm-detail-21.png',
        '/images/products/stirrup-bending/sbm-detail-22.png',
        '/images/products/stirrup-bending/sbm-detail-24.png',
      ],
    },
    {
      id: 'wheelbarrow',
      title: vi ? 'Xe Rùa' : 'Wheelbarrows',
      tagline: vi
        ? 'Khung thép bền chắc, thiết kế tối ưu cho công trình xây dựng.'
        : 'Heavy-gauge steel frame — engineered for demanding construction sites.',
      href: '/products?category=construction',
      productId: 'WB-120L-BIG',
      subcategory: 'wheelbarrow',
      features: vi
        ? [
            { label: 'Dung tích', value: '50L – 120L' },
            { label: 'Thùng', value: 'Thép hoặc nhựa PP' },
            { label: 'Khung', value: 'Thép mạ kẽm / sơn tĩnh điện' },
            { label: 'Tải trọng', value: 'Thiết kế hạng nặng' },
          ]
        : [
            { label: 'Capacity', value: '50L – 120L' },
            { label: 'Tray', value: 'Steel or PP plastic' },
            { label: 'Frame', value: 'Galvanized or powder-coated' },
            { label: 'Load rating', value: 'Heavy-duty grade' },
          ],
      mainImage: '/images/products/wheelbarrow/wb-120l.png',
      thumbnails: [
        '/images/products/wheelbarrow/wb-70l.png',
        '/images/products/wheelbarrow/wb-80l.png',
        '/images/products/wheelbarrow/wb-90l.png',
        '/images/products/wheelbarrow/wb-parts.png',
      ],
    },
    {
      id: 'rice-transplanter',
      title: vi ? 'Máy Cấy Lúa' : 'Rice Transplanters',
      tagline: vi
        ? 'Năng suất cao, tiết kiệm nhân công — phù hợp ruộng lúa quy mô lớn.'
        : 'High output, low labor cost — built for large-scale rice farming.',
      href: '/products?category=agriculture',
      productId: 'PLSP-06',
      subcategory: 'rice-transplanter',
      features: vi
        ? [
            { label: 'Số hàng', value: '4 – 6 hàng' },
            { label: 'Vận hành', value: 'Tự hành / kéo tay' },
            { label: 'Năng suất', value: '360 – 1200 m²/giờ' },
            { label: 'Khoảng cách', value: '20cm / 24cm' },
          ]
        : [
            { label: 'Row count', value: '4 to 6 rows' },
            { label: 'Operation', value: 'Self-propelled / hand-pull' },
            { label: 'Output', value: '360 – 1,200 m²/hour' },
            { label: 'Row spacing', value: '20 cm / 24 cm' },
          ],
      mainImage: '/images/products/transplanter/plsp-06-1.png',
      thumbnails: [
        '/images/products/transplanter/plsp-06-2.png',
        '/images/products/transplanter/plsp-06-4.png',
        '/images/products/transplanter/plsp-06-5.png',
        '/images/products/transplanter/plsp-04-1.png',
      ],
    },
    {
      id: 'paddy-thresher',
      title: vi ? 'Máy Tuốt Lúa' : 'Paddy Threshers',
      tagline: vi
        ? 'Hiệu suất tuốt ≥98% — giảm thất thoát lúa đến mức tối thiểu.'
        : 'Threshing efficiency ≥98% — minimal grain loss at harvest.',
      href: '/products?category=agriculture',
      productId: 'PL2000',
      subcategory: 'paddy-thresher',
      features: vi
        ? [
            { label: 'Năng suất', value: '500 – 2700 kg/giờ' },
            { label: 'Tỷ lệ tuốt', value: '≥ 98%' },
            { label: 'Tốc độ', value: '900 RPM' },
            { label: 'Trọng lượng', value: '75 – 490 kg (3 model)' },
          ]
        : [
            { label: 'Output', value: '500 – 2,700 kg/hour' },
            { label: 'Threshed rate', value: '≥ 98%' },
            { label: 'Drum speed', value: '900 RPM' },
            { label: 'Weight range', value: '75 – 490 kg (3 models)' },
          ],
      mainImage: '/images/products/thresher/pl2000.png',
      thumbnails: [
        '/images/products/thresher/pl1200.jpg',
        '/images/products/thresher/detail.jpg',
        '/images/products/thresher/pl800.png',
        '/images/products/thresher/warehouse.jpg',
      ],
    },
    {
      id: 'engine',
      title: vi ? 'Động Cơ' : 'Engines & Motors',
      tagline: vi
        ? 'Tương thích với toàn bộ dòng máy Phú Long và máy cơ khí phổ thông.'
        : 'Compatible with all Phu Long machinery and standard mechanical equipment.',
      href: '/products?category=engine',
      productId: 'ENG-GAS',
      categoryFallback: 'engine',
      features: vi
        ? [
            { label: 'Loại', value: 'Điện / Xăng / Diesel' },
            { label: 'Công suất', value: '2.2 kW – 12 Hp' },
            { label: 'Model xăng', value: 'GP160 / GP200' },
            { label: 'Model diesel', value: 'CAOFONG 8–12 Hp' },
          ]
        : [
            { label: 'Types', value: 'Electric / Gasoline / Diesel' },
            { label: 'Power range', value: '2.2 kW – 12 Hp' },
            { label: 'Gas models', value: 'GP160 / GP200' },
            { label: 'Diesel model', value: 'CAOFONG 8–12 Hp' },
          ],
      mainImage: '/images/products/engine/eng-gas-1.png',
      thumbnails: [
        '/images/products/engine/eng-gas-2.jpg',
        '/images/products/engine/eng-gas-3.jpg',
        '/images/products/engine/eng-elec-1.jpg',
        '/images/products/engine/eng-elec-2.jpg',
      ],
    },
    {
      id: 'vikyno-diesel',
      title: vi ? 'Động Cơ Diesel Vikyno' : 'Vikyno Diesel Engines',
      tagline: vi
        ? 'Thương hiệu Vikyno-Vietnam — dòng động cơ diesel tin cậy cho nông nghiệp và công nghiệp.'
        : 'Vikyno-Vietnam brand — reliable diesel engines for agriculture and industrial use.',
      href: '/products?category=engine',
      productId: 'VIKYNO-RV125-2',
      subcategory: 'vikyno-diesel',
      features: vi
        ? [
            { label: 'Dải công suất', value: '7 – 36.5 Hp' },
            { label: 'Model phổ biến', value: 'RV70 / RV80 / RV125 / RV165' },
            { label: 'Model công suất cao', value: 'RV325NA / RV365NB' },
            { label: 'Ứng dụng', value: 'Nông nghiệp, máy bơm, máy phát' },
          ]
        : [
            { label: 'Power range', value: '7 – 36.5 Hp' },
            { label: 'Popular models', value: 'RV70 / RV80 / RV125 / RV165' },
            { label: 'Heavy-duty models', value: 'RV325NA / RV365NB' },
            { label: 'Applications', value: 'Agriculture, water pumps, generators' },
          ],
      mainImage: '/images/products/vikyno-engine/rv125-2-1.png',
      thumbnails: [
        '/images/products/vikyno-engine/rv70-1.png',
        '/images/products/vikyno-engine/rv165-2-1.png',
        '/images/products/vikyno-engine/rv325na-1.png',
        '/images/products/vikyno-engine/ev2400-1.png',
      ],
    },
  ];

  return (
    <section className="bg-page-bg">
      {groups.map((group, idx) => {
        const product = getProductById(group.productId);
        if (!product) return null;
        const isReversed = idx % 2 === 1;
        const name = vi ? product.name_vi : product.name_en;

        const allInType = group.subcategory
          ? getProductsBySubcategory(group.subcategory)
          : getProductsByCategory(group.categoryFallback!);
        const otherSkus = allInType.filter((p) => p.id !== group.productId);

        return (
          <div key={group.id} className="border-b border-border/60 last:border-b-0">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">

              {/* ── Feature highlights panel ── */}
              <div
                className={`flex flex-col justify-center gap-4 bg-dark px-6 py-7 sm:px-8 lg:px-10 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div>
                  <span className="inline-block rounded-full border border-brand-orange/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                    {group.title}
                  </span>
                  <p className="mt-3 text-[17px] font-medium leading-relaxed text-white/60">
                    {group.tagline}
                  </p>
                </div>

                {/* Feature rows */}
                <ul className="space-y-3">
                  {group.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/20">
                        <svg className="h-3 w-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <span className="text-sm font-semibold text-white">{f.label}: </span>
                        <span className="text-sm text-white/70">{f.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href={group.href}
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
                >
                  {vi ? 'Xem tất cả sản phẩm' : 'View all products'}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* ── Gallery + info panel ── */}
              <div
                className={`flex flex-col justify-center p-4 sm:p-5 lg:p-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="font-mono text-xs text-brand-gray/60">{product.id}</p>
                <h2 className="mt-0.5 text-xl font-bold text-dark sm:text-2xl">{name}</h2>

                {/* Main image */}
                <Link href={`/products/${product.id.toLowerCase()}`} className="group mt-3 block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-surface">
                    <Image
                      src={group.mainImage}
                      alt={name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </Link>

                {/* 4 thumbnails */}
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {group.thumbnails.map((thumb, ti) => (
                    <div
                      key={ti}
                      className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-surface"
                    >
                      <Image
                        src={thumb}
                        alt={`${name} ${ti + 2}`}
                        fill
                        className="object-contain p-1.5"
                        sizes="(max-width: 640px) 25vw, 10vw"
                      />
                    </div>
                  ))}
                </div>

                {/* CTA + view more SKUs */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.id.toLowerCase()}`}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-brand-orange px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                  >
                    {tP('requestQuote')}
                  </Link>
                  <p className="text-xs text-brand-gray/60">
                    MOQ: {product.moq} {product.moq === 1 ? 'unit' : 'units'}
                  </p>
                </div>

                {/* Other SKUs */}
                {otherSkus.length > 0 && (
                  <div className="mt-4 border-t border-border/60 pt-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-gray/50">
                      {vi ? 'Mẫu khác' : 'More models'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {otherSkus.map((p) => (
                        <Link
                          key={p.id}
                          href={`/products/${p.id.toLowerCase()}`}
                          className="group flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs transition-all hover:border-brand-orange hover:text-brand-orange"
                        >
                          <span className="font-mono text-[10px] text-brand-gray/60 group-hover:text-brand-orange/70">
                            {p.id}
                          </span>
                          <span className="hidden text-brand-gray sm:inline">·</span>
                          <span className="hidden text-dark group-hover:text-brand-orange sm:inline">
                            {vi ? p.name_vi : p.name_en}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ─── Factory ───────────────────────────────────────────────── */
function FactorySection() {
  const t = useTranslations('home.factory');
  return (
    <section className="py-20 bg-page-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-full lg:min-h-[420px]">
            <Image
              src="/images/factory/factory-1.jpg"
              alt="Phu Long factory"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Phu Long Mechanical
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              {t('description')}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark"
            >
              {t('link')}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Customization ─────────────────────────────────────────── */
function CustomizationSection() {
  const t = useTranslations('home.customization');
  const items = [t('item1'), t('item2'), t('item3'), t('item4')];
  return (
    <section className="py-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              OEM Available
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-base text-white/60">{t('subtitle')}</p>
            <ul className="mt-6 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t('cta')}
            </Link>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-96">
            <Image
              src="/images/factory/showroom.png"
              alt="Phu Long showroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Markets ───────────────────────────────────────────────── */
function MarketsSection() {
  const markets = [
    { region: 'Southeast Asia', countries: 'Indonesia · Philippines · Myanmar · Cambodia · Laos' },
    { region: 'South Asia', countries: 'Bangladesh · India · Pakistan · Sri Lanka' },
    { region: 'Africa', countries: 'Ghana · Tanzania · Uganda · South Africa · Nigeria' },
    { region: 'Middle East', countries: 'UAE · Saudi Arabia · Iraq · Yemen' },
    { region: 'Pacific', countries: 'Papua New Guinea · Australia' },
    { region: 'Americas', countries: 'El Salvador · Guatemala · Texas (USA)' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Export Reach
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Our Main Markets
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-base text-brand-gray">
            From rice fields in Southeast Asia to construction sites across Africa and the Middle East — Phu Long machinery works in 20+ countries worldwide.
          </p>
        </div>

        {/* World map */}
        <div className="mt-10 relative overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src="/images/markets.png"
            alt="Phu Long Global Markets — world map"
            width={1200}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Region chips */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <div key={m.region} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/15">
                <svg className="h-3 w-3 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-dark">{m.region}</p>
                <p className="mt-0.5 text-xs text-brand-gray/70">{m.countries}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Certificates ───────────────────────────────────────────── */
function CertificatesSection() {
  return (
    <section className="py-16 bg-page-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Certified Quality
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Our Certifications
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base text-brand-gray">
            ISO-compliant production process backed by independent test reports — giving our partners confidence in every shipment.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
          <Image
            src="/images/certificates.png"
            alt="Phu Long certifications — VCA certificate and SGS test report"
            width={1200}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {['VCA Certified', 'SGS Test Report', 'ISO-compliant Process', 'Pre-shipment QC'].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-semibold text-dark">
              <svg className="h-4 w-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────── */
function TestimonialsSection({ locale }: { locale: string }) {
  const vi = locale === 'vi';

  type Testimonial = {
    name: string;
    company: string;
    country: string;
    flag: string;
    product: string;
    text_en: string;
    text_vi: string;
  };

  const testimonials: Testimonial[] = [
    {
      name: 'James O.',
      company: 'BuildRight Ghana',
      country: 'Ghana',
      flag: '🇬🇭',
      product: 'Concrete Mixer 350L',
      text_en: 'We have imported 3 containers of the 350L concrete mixers so far. Build quality is excellent — the drum welds are clean, thickness is consistent, and the GP160 engines start on the first pull every time. Our customers on construction sites love them.',
      text_vi: 'Chúng tôi đã nhập 3 container máy trộn 350L. Chất lượng xây dựng tuyệt vời — đường hàn tang trống sạch sẽ, độ dày đồng đều, và động cơ GP160 khởi động ngay lần kéo đầu tiên. Khách hàng của chúng tôi trên công trường rất thích.',
    },
    {
      name: 'Somsak P.',
      company: 'Agri Supplies Thailand',
      country: 'Thailand',
      flag: '🇹🇭',
      product: 'Rice Transplanter PLSP-06',
      text_en: 'The PLSP-06 has been a game changer for our farmers. Two seasons in and zero mechanical failures. Row spacing is accurate, seedling pickup is smooth, and output matches the spec sheet exactly. Very reliable machine.',
      text_vi: 'PLSP-06 đã thay đổi hoàn toàn cho nông dân của chúng tôi. Hai vụ trôi qua mà không có sự cố cơ học nào. Khoảng cách hàng chính xác, lấy mạ mượt mà, và năng suất khớp chính xác với tờ thông số.',
    },
    {
      name: 'Reza M.',
      company: 'Construction Tools Iraq',
      country: 'Iraq',
      flag: '🇮🇶',
      product: 'Wheelbarrow 70L',
      text_en: 'Ordered 500 units of the 70L galvanized wheelbarrow. Arrived on time, well-packed, and the finish is better than competitors we tried before. The galvanized frame holds up perfectly in the dusty conditions here. Reordering next month.',
      text_vi: 'Đặt 500 chiếc xe rùa 70L mạ kẽm. Đến đúng hạn, đóng gói tốt, và lớp hoàn thiện tốt hơn đối thủ cạnh tranh chúng tôi đã thử trước đây. Khung mạ kẽm hoạt động hoàn hảo trong điều kiện bụi bặm ở đây.',
    },
    {
      name: 'Ahmad N.',
      company: 'Farm Equipment Bangladesh',
      country: 'Bangladesh',
      flag: '🇧🇩',
      product: 'Paddy Thresher PL2000',
      text_en: 'The PL2000 threshes at over 2500 kg/h consistently. Grain loss is minimal — our farmers noticed immediately the difference compared to older machines. Andy provided full technical support during setup. Phu Long is a partner we trust.',
      text_vi: 'PL2000 tuốt ổn định trên 2500 kg/h. Thất thoát hạt tối thiểu — nông dân của chúng tôi nhận ra ngay sự khác biệt so với máy cũ. Andy hỗ trợ kỹ thuật đầy đủ trong quá trình lắp đặt.',
    },
    {
      name: 'Carlos V.',
      company: 'Obras El Salvador',
      country: 'El Salvador',
      flag: '🇸🇻',
      product: 'Multiple SKUs',
      text_en: 'We have been working with Phu Long for 4 years. What sets them apart is not just the product quality — it is the service. Custom colors, OEM branding, flexible mix of SKUs per container. They respond fast and deliver what they promise. A genuine long-term partner.',
      text_vi: 'Chúng tôi đã hợp tác với Phú Long 4 năm. Điều làm họ nổi bật không chỉ là chất lượng sản phẩm — mà còn là dịch vụ. Màu sắc tùy chỉnh, thương hiệu OEM, hỗn hợp SKU linh hoạt mỗi container. Họ phản hồi nhanh và thực hiện đúng lời hứa.',
    },
    {
      name: 'David K.',
      company: 'Nairobi Tools Ltd',
      country: 'Kenya',
      flag: '🇰🇪',
      product: 'Concrete Mixer 250L',
      text_en: 'The 250L solid-tyre mixers are perfect for the Kenyan market. Easy to move around sites, the electric motor works reliably on our local grid, and spare parts are simple enough to source locally. Our wholesale customers reorder every season.',
      text_vi: 'Máy trộn 250L lốp đặc hoàn hảo cho thị trường Kenya. Dễ di chuyển quanh công trường, động cơ điện hoạt động đáng tin cậy trên lưới điện địa phương, và phụ tùng đủ đơn giản để tìm kiếm tại địa phương.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {vi ? 'Đánh Giá Khách Hàng' : 'Customer Reviews'}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            {vi ? 'Đối Tác Tin Cậy Trên Toàn Cầu' : 'Trusted by Partners Worldwide'}
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base text-brand-gray">
            {vi
              ? 'Hơn 70 khách hàng doanh nghiệp trên 20 quốc gia — đây là những gì họ nói.'
              : 'Over 70 business customers across 20 countries — here is what they say.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Product tag */}
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-orange/70">
                {t.product}
              </p>

              {/* Quote */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray">
                "{vi ? t.text_vi : t.text_en}"
              </p>

              {/* Reviewer */}
              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-lg">
                  {t.flag}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-brand-gray/60">{t.company} · {t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Orders (Shipping Photos) ──────────────────────────────── */
function OrdersSection({ locale }: { locale: string }) {
  const vi = locale === 'vi';

  const photos = [
    { src: '/images/orders/order-1.jpg', caption: vi ? 'Đóng container máy trộn bê tông' : 'Concrete mixers loaded for export' },
    { src: '/images/orders/order-2.jpg', caption: vi ? 'Container hỗn hợp máy móc + động cơ GP160' : 'Mixed container — machinery & GP160 engines' },
    { src: '/images/orders/order-3.jpg', caption: vi ? 'Lô hàng máy trộn + động cơ Honda GP160' : 'Concrete mixers + Honda GP160 engine batch' },
    { src: '/images/orders/order-4.jpg', caption: vi ? 'Container xe rùa + động cơ điện' : 'Wheelbarrows & electric motors container' },
    { src: '/images/orders/order-5.jpg', caption: vi ? 'Lô hàng máy trộn + động cơ diesel' : 'Concrete mixers + diesel engines — ready to ship' },
    { src: '/images/orders/order-6.jpg', caption: vi ? 'Máy trộn bê tông màu xanh chuẩn bị xuất' : 'Blue concrete mixers — container IAAU 174407' },
  ];

  return (
    <section className="py-20 bg-page-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            {vi ? 'Đơn Hàng Thực Tế' : 'Real Orders'}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            {vi ? 'Hàng Trăm Container Đã Xuất' : 'Hundreds of Containers Shipped'}
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base text-brand-gray">
            {vi
              ? 'Mỗi đơn hàng được chuẩn bị cẩn thận — đóng gói chắc chắn, kiểm tra trước khi xuất và giao đúng hạn.'
              : 'Every order is prepared with care — secure packaging, pre-shipment inspection, and on-time delivery.'}
          </p>
        </div>

        {/* 3×2 uniform grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl bg-dark">
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-xs font-medium text-white/90">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { icon: '📦', label: vi ? 'FCL & LCL Container' : 'FCL & LCL Loading' },
            { icon: '🔍', label: vi ? 'Kiểm tra trước xuất xưởng' : 'Pre-shipment Inspection' },
            { icon: '⏱️', label: vi ? 'Giao hàng đúng hạn' : 'On-time Delivery' },
            { icon: '🌍', label: vi ? 'Xuất khẩu 20+ quốc gia' : '20+ Countries Served' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-dark">
              <span>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CtaSection() {
  const t = useTranslations('home.cta');
  return (
    <section className="bg-page-bg py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-base text-brand-gray">{t('subtitle')}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-brand-orange px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}

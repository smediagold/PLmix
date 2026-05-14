import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Phu Long Mechanical"
              width={144}
              height={48}
              className="h-[43px] w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <a href="tel:+84946964669" className="hover:text-brand-orange transition-colors">
                (+84) 946 964 669
              </a>
              <a href="mailto:Andy@phulongglobal.com" className="hover:text-brand-orange transition-colors">
                Andy@phulongglobal.com
              </a>
              <a
                href="https://maps.google.com/?q=115+Ke+Ve+Dong+Ngac+Ha+Noi+Vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors leading-snug"
              >
                {t('officeAddress')}
              </a>
              <a
                href="https://maps.google.com/?q=Giao+Thuy+Ninh+Binh+Vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors leading-snug"
              >
                {t('factoryAddress')}
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('productsTitle')}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { href: '/products/construction', label: t('construction') },
                { href: '/products/agriculture', label: t('agriculture') },
                { href: '/products?category=construction#stirrup-bending', label: t('stirrupBending') },
                { href: '/products/engines', label: t('engines') },
                { href: '/products?category=engine#vikyno-diesel', label: t('vikynoDiesel') },
                { href: '/products/spare-parts', label: t('spareParts') },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('companyTitle')}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { href: '/blog', label: t('blog') },
                { href: '/about', label: t('about') },
                { href: '/contact', label: t('contact') },
                { href: '/catalog', label: t('catalog') },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              {t('contactTitle')}
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <li>
                <a href="https://wa.me/84946964669" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">
                  WhatsApp: (+84) 946 964 669
                </a>
              </li>
              <li>
                <a href="mailto:Andy@phulongglobal.com" className="hover:text-white transition-colors">
                  Andy@phulongglobal.com
                </a>
              </li>
              <li>
                <a href="https://phulongglobal.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">
                  phulongglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {year} Phu Long Global Investment Co., Ltd. {t('rights')}
        </div>
      </div>
    </footer>
  );
}

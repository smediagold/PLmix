import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://phulongglobal.com'),
  title: {
    template: '%s | Phu Long Mechanical',
    default: 'Phu Long Mechanical — Concrete Mixers & Agricultural Machinery Vietnam',
  },
  description:
    'Vietnam-based manufacturer of concrete mixers, rice transplanters and paddy threshers. 20+ years, exported to 20 countries. OEM orders available.',
  openGraph: {
    type: 'website',
    siteName: 'Phu Long Mechanical',
    images: [{ url: '/images/hero-cover.png', width: 1200, height: 630, alt: 'Phu Long Mechanical factory — concrete mixers' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased bg-page-bg">{children}</body>
    </html>
  );
}

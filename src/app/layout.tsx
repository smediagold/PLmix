import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://phulongglobal.com'),
  title: {
    template: '%s | Phu Long',
    default: 'Concrete Mixer Manufacturer in Vietnam | Phu Long Mechanical',
  },
  description:
    'Vietnam-based manufacturer of concrete mixers, stirrup bending machines, rice transplanters, paddy threshers and industrial fans. 20+ years, exported to 20 countries. OEM orders available.',
  openGraph: {
    type: 'website',
    siteName: 'Phu Long Mechanical',
    images: [{ url: '/images/hero-cover.png', width: 1200, height: 630, alt: 'Phu Long Mechanical factory — concrete mixers' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F8F5F1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased bg-page-bg">{children}</body>
    </html>
  );
}

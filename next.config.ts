import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 750, 828, 1080, 1440, 1920, 2560],
    qualities: [70],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

export default withNextIntl(nextConfig);

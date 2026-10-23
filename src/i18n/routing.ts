import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'vi', 'es', 'fr'],
  defaultLocale: 'en',
  localeDetection: false,
});

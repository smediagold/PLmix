import type { BlogCategory } from '../blog';
import type { LineGroup } from '../nav';

export type ContentOverlay = {
  groups: Record<LineGroup, string>;
  lines: Record<
    string,
    {
      name: string;
      tagline: string;
      intro: string;
      facts: { label: string; value: string }[];
      photos: string[];
      banner?: string[];
    }
  >;
  seo: Record<
    string,
    {
      title: string;
      description: string;
      aboutTitle: string;
      about: string[];
      faqTitle: string;
      faq: { q: string; a: string }[];
      guideLabel?: string;
    }
  >;
  products: Record<string, { name: string; description: string }>;
  blogCategories: Record<BlogCategory, string>;
  blog: Record<string, { title: string; excerpt: string; content: string }>;
  markets: Record<string, string>;
  orders: { caption: string; load: string }[];
  customization: Record<string, string>;
  specLabels: Record<string, string>;
};

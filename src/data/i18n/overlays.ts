import { es } from './es';
import { fr } from './fr';
import { blogEs } from './blog-es';
import { blogFr } from './blog-fr';
import type { ContentOverlay } from './types';
import type { OverlayLocale } from '../nav';

export const overlays: Record<OverlayLocale, ContentOverlay> = {
  es: { ...es, blog: { ...es.blog, ...blogEs } },
  fr: { ...fr, blog: { ...fr.blog, ...blogFr } },
};

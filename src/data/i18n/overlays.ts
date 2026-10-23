import { es } from './es';
import { fr } from './fr';
import type { ContentOverlay } from './types';
import type { OverlayLocale } from '../nav';

export const overlays: Record<OverlayLocale, ContentOverlay> = { es, fr };

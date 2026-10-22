'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type InquiryState = {
  skus: string[];
  has: (sku: string) => boolean;
  toggle: (sku: string) => void;
  clear: () => void;
};

const InquiryCtx = createContext<InquiryState | null>(null);
const KEY = 'pl-inquiry';

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [skus, setSkus] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? '[]');
      if (Array.isArray(saved)) setSkus(saved.filter((s) => typeof s === 'string'));
    } catch {}
  }, []);

  const save = (next: string[]) => {
    setSkus(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  };

  const toggle = useCallback(
    (sku: string) => save(skus.includes(sku) ? skus.filter((s) => s !== sku) : [...skus, sku]),
    [skus],
  );
  const clear = useCallback(() => save([]), []);

  const value = useMemo(
    () => ({ skus, has: (s: string) => skus.includes(s), toggle, clear }),
    [skus, toggle, clear],
  );

  return <InquiryCtx.Provider value={value}>{children}</InquiryCtx.Provider>;
}

export function useInquiry() {
  const ctx = useContext(InquiryCtx);
  if (!ctx) throw new Error('useInquiry must be used inside InquiryProvider');
  return ctx;
}

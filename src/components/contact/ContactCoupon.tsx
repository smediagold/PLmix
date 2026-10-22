'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { submitContact } from '@/app/actions/contact';
import { useInquiry } from '@/components/inquiry/InquiryContext';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export default function ContactCoupon({ defaultProduct = '' }: { defaultProduct?: string }) {
  const t = useTranslations('coupon');
  const { skus } = useInquiry();
  const [product, setProduct] = useState(defaultProduct);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (skus.length) setProduct(skus.join(', '));
  }, [skus]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      product: String(fd.get('product') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
    };
    const next: Errors = {};
    if (data.name.length < 2) next.name = t('errName');
    if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = t('errEmail');
    if (data.message.length < 10) next.message = t('errMessage');
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    const res = await submitContact(data);
    setStatus(res.success ? 'sent' : 'error');
  };

  const field =
    'block w-full rounded-xl bg-white/55 px-4 text-[17px] text-ink placeholder:text-ink/60 focus:bg-white focus:outline focus:outline-3 focus:outline-ink';

  return (
    <div className="coupon relative overflow-hidden rounded-3xl bg-brand-orange text-ink">
      <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[46%_1fr] lg:gap-0 lg:p-0">
        <div className="flex flex-col justify-between gap-6 lg:p-12">
          <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
            {t('title')}
          </h2>
          <p className="max-w-[40ch] text-[17px] leading-[1.55]">{t('text')}</p>
        </div>

        <div className="coupon-perf lg:p-12">
          {status === 'sent' ? (
            <div role="status" className="flex h-full flex-col justify-center gap-3">
              <p className="text-[24px] font-bold">{t('sentTitle')}</p>
              <p className="text-[17px]">{t('sentText')}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-2.5">
              <div>
                <label htmlFor="c-name" className="sr-only">{t('name')}</label>
                <input id="c-name" name="name" autoComplete="name" placeholder={t('namePh')} className={`${field} h-[52px]`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} />
                {errors.name && <p id="c-name-err" className="mt-1 text-[15px] font-semibold">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className="sr-only">{t('email')}</label>
                <input id="c-email" name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} placeholder={t('emailPh')} className={`${field} h-[52px]`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-err' : undefined} />
                {errors.email && <p id="c-email-err" className="mt-1 text-[15px] font-semibold">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-product" className="sr-only">{t('product')}</label>
                <input id="c-product" name="product" autoComplete="off" value={product} onChange={(e) => setProduct(e.target.value)} placeholder={t('productPh')} className={`${field} h-[52px]`} />
              </div>
              <div>
                <label htmlFor="c-message" className="sr-only">{t('message')}</label>
                <textarea id="c-message" name="message" rows={3} placeholder={t('messagePh')} className={`${field} resize-none py-3`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-message-err' : undefined} />
                {errors.message && <p id="c-message-err" className="mt-1 text-[15px] font-semibold">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="press mt-1 h-14 w-full bg-ink text-[17px] font-semibold text-white hover:bg-black disabled:opacity-70"
              >
                {status === 'sending' ? t('sending') : t('submit')}
              </button>
              <p aria-live="polite" className="text-[15px] font-semibold">
                {status === 'error' ? t('error') : ''}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

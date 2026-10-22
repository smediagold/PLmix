'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitContact } from '@/app/actions/contact';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { product: searchParams.get('products') ?? '' },
  });

  const onSubmit = async (data: FormData) => {
    setServerError('');
    const result = await submitContact(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error ?? 'Something went wrong.');
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-[#DCE8E1] px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-[22px] font-bold text-ink">{t('successTitle')}</h3>
        <p className="mt-2 text-[17px] text-ink">{t('successText')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[15px] font-semibold text-ink">
            {t('name')} <span aria-hidden="true">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder={t('namePlaceholder')}
            className="h-12 w-full rounded-xl bg-ground px-4 text-[17px] text-ink border border-[#E0D9CE] placeholder:text-ink/50 focus:border-ink focus:outline focus:outline-2 focus:outline-ink"
          />
          {errors.name && (
            <p className="mt-1 text-[15px] text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-[15px] font-semibold text-ink">{t('company')}</label>
          <input
            {...register('company')}
            type="text"
            placeholder={t('companyPlaceholder')}
            className="h-12 w-full rounded-xl bg-ground px-4 text-[17px] text-ink border border-[#E0D9CE] placeholder:text-ink/50 focus:border-ink focus:outline focus:outline-2 focus:outline-ink"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[15px] font-semibold text-ink">
            {t('email')} <span aria-hidden="true">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder={t('emailPlaceholder')}
            className="h-12 w-full rounded-xl bg-ground px-4 text-[17px] text-ink border border-[#E0D9CE] placeholder:text-ink/50 focus:border-ink focus:outline focus:outline-2 focus:outline-ink"
          />
          {errors.email && (
            <p className="mt-1 text-[15px] text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-[15px] font-semibold text-ink">{t('phone')}</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder={t('phonePlaceholder')}
            className="h-12 w-full rounded-xl bg-ground px-4 text-[17px] text-ink border border-[#E0D9CE] placeholder:text-ink/50 focus:border-ink focus:outline focus:outline-2 focus:outline-ink"
          />
        </div>
      </div>

      {/* Product of interest */}
      <div>
        <label className="mb-1.5 block text-[15px] font-semibold text-ink">{t('product')}</label>
        <input
          {...register('product')}
          type="text"
          placeholder={t('productPlaceholder')}
          className="h-12 w-full rounded-xl bg-ground px-4 text-[17px] text-ink border border-[#E0D9CE] placeholder:text-ink/50 focus:border-ink focus:outline focus:outline-2 focus:outline-ink"
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-[15px] font-semibold text-ink">
          {t('message')} <span aria-hidden="true">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder={t('messagePlaceholder')}
          className="w-full resize-none rounded-xl bg-ground px-4 py-3 text-[17px] text-ink border border-[#E0D9CE] placeholder:text-ink/50 focus:border-ink focus:outline focus:outline-2 focus:outline-ink"
        />
        {errors.message && (
          <p className="mt-1 text-[15px] text-red-700">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-[15px] text-red-700">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="press h-14 w-full bg-ink text-[17px] font-semibold text-white hover:bg-black disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}

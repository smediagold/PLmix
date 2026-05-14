'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-dark">{t('successTitle')}</h3>
        <p className="mt-2 text-base text-brand-gray">{t('successText')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            {t('name')} <span className="text-brand-orange">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder={t('namePlaceholder')}
            className="h-11 w-full rounded-lg border border-border bg-white px-4 text-base text-dark placeholder:text-brand-gray/50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">{t('company')}</label>
          <input
            {...register('company')}
            type="text"
            placeholder={t('companyPlaceholder')}
            className="h-11 w-full rounded-lg border border-border bg-white px-4 text-base text-dark placeholder:text-brand-gray/50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            {t('email')} <span className="text-brand-orange">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder={t('emailPlaceholder')}
            className="h-11 w-full rounded-lg border border-border bg-white px-4 text-base text-dark placeholder:text-brand-gray/50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">{t('phone')}</label>
          <input
            {...register('phone')}
            type="tel"
            placeholder={t('phonePlaceholder')}
            className="h-11 w-full rounded-lg border border-border bg-white px-4 text-base text-dark placeholder:text-brand-gray/50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
        </div>
      </div>

      {/* Product of interest */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-dark">{t('product')}</label>
        <input
          {...register('product')}
          type="text"
          placeholder={t('productPlaceholder')}
          className="h-11 w-full rounded-lg border border-border bg-white px-4 text-base text-dark placeholder:text-brand-gray/50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-dark">
          {t('message')} <span className="text-brand-orange">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder={t('messagePlaceholder')}
          className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-base text-dark placeholder:text-brand-gray/50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-lg bg-brand-orange text-base font-semibold text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}

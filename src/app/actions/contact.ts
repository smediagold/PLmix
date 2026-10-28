'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof schema>;

const TO = 'Andy@phulongglobal.com';
const FROM = 'Phu Long Website <website@phulongglobal.com>';

const esc = (s = '') => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function submitContact(data: ContactFormData) {
  const result = schema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message ?? 'Validation error' };
  }
  const d = result.data;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('[contact] RESEND_API_KEY missing', d);
    return { success: false, error: 'Sending failed. Please contact us on WhatsApp: +84 946 964 669.' };
  }

  const rows = [
    ['Name', d.name],
    ['Company', d.company],
    ['Email', d.email],
    ['Phone / WhatsApp', d.phone],
    ['Products', d.product],
  ].filter(([, v]) => v);

  const html = `<table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('')}</table><p>${esc(d.message).replace(/\n/g, '<br>')}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${d.message}`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: d.email,
      subject: `Website inquiry: ${d.name}${d.company ? ` (${d.company})` : ''}${d.product ? ` – ${d.product}` : ''}`.slice(0, 200),
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend error', res.status, await res.text());
    return { success: false, error: 'Sending failed. Please contact us on WhatsApp: +84 946 964 669.' };
  }
  return { success: true };
}

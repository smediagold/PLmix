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

export async function submitContact(data: ContactFormData) {
  const result = schema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message ?? 'Validation error' };
  }

  // TODO: Configure SMTP/Resend in .env.local to send real emails:
  // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
  //
  // Example with nodemailer:
  // const transporter = nodemailer.createTransporter({ ... });
  // await transporter.sendMail({
  //   to: 'Andy@phulongglobal.com',
  //   subject: `New inquiry from ${data.name} — ${data.company}`,
  //   html: `<p>${data.message}</p>`,
  // });

  console.log('[Contact form submission]', result.data);

  return { success: true };
}

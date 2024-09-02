import { z } from 'zod'

export const REGISTER_SCHEMA = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'Must be at least 2 characters long' }),
    lastName: z
      .string()
      .min(2, { message: 'Must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email format' }),
    password: z
      .string()
      .min(8, { message: 'Password must contain at least 8 characters' })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must contain at least 8 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

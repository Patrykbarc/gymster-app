import { z } from 'zod'

export const FORM_SCHEMA = z.object({
  email: z.string().email(),
  password: z.string().min(5, { message: 'Must be at least 5 characters' }),
})

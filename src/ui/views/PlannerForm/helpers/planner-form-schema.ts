import { z } from 'zod'

export const PLANNER_FORM_SCHEMA = z.object({
  workout: z.string().min(3, { message: 'Workout must be named' }),
  workoutDate: z.preprocess(
    (arg) =>
      typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg,
    z.date({ message: 'Pick a date' })
  ),
})

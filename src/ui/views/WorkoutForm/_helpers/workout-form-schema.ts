import { z } from 'zod'
import { isString } from './isString'
const workoutInfoSchema = z.object({
  workout: z.string().min(3, { message: 'Workout must be named' }),
  workoutDate: z.preprocess(
    (arg) =>
      typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg,
    z.date({ message: 'Pick a valid date' })
  ),
})

const setsSchema = z.object({
  set: z.number().min(1, { message: 'Set must be a positive number' }),
  weight: z.preprocess(
    (val) => isString(val),
    z.number().positive({ message: 'Weight must be a positive number' })
  ),
  reps: z.preprocess(
    (val) => isString(val),
    z.number().min(1, { message: 'Reps must be a positive number' })
  ),
})

const exersiceSchema = z.object({
  name: z.string().min(1, { message: 'Exercise must be named' }),
  sets: z.array(setsSchema).min(1, { message: 'Add at least one set' }),
})

export const WORKOUT_FORM_SCHEMA = z.object({
  info: workoutInfoSchema,
  exercises: z
    .array(exersiceSchema)
    .min(1, { message: 'Add at least one exercise' }),
})

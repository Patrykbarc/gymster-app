import { z } from 'zod'
import { isString } from './isString'

const workoutInfo = z.object({
  workout: z.string().min(3, { message: 'Workout must be named' }),
  workoutDate: z.preprocess(
    (arg) =>
      typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg,
    z.date({ message: 'Pick a date' })
  ),
})

const workoutSetSchema = z.object({
  set: z.number().min(1),
  weight: z.preprocess((val) => isString(val), z.number().min(1), {
    message: 'Weight must be a posivtive number',
  }),
  reps: z.preprocess((val) => isString(val), z.number().min(1), {
    message: 'Reps must be a positive number',
  }),
})

export const PLANNER_FORM_SCHEMA = z.object({
  info: workoutInfo,
  sets: z.array(workoutSetSchema).min(1, { message: 'Add at least one set' }),
})

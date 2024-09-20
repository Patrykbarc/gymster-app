import { createContext } from 'react'
import { FieldErrors } from 'react-hook-form'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'

export const WorkoutErrorContext =
  createContext<FieldErrors<SubmitFormWorkout> | null>(null)

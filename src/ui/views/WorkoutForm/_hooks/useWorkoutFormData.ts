import { useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'
import { WORKOUT_DEFAULT_VALUES } from '../_helpers/workout-default-values'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'

type Props = {
  watch: UseFormWatch<SubmitFormWorkout> | undefined
}

const STORAGE_ITEM_NAME = 'workout-draft'

/**
 * Custom hook that handles form data for a workout.
 * This hook serves two main purposes:
 * 1. Retrieves saved form data from `localStorage` if it exists, otherwise returns default values.
 * 2. Subscribes to form changes (using `react-hook-form`'s `watch`), and updates `localStorage` when the form data changes.
 */
export function useWorkoutFormData({ watch }: Props) {
  const savedFormData = localStorage.getItem(STORAGE_ITEM_NAME)

  const defaultValues = savedFormData
    ? JSON.parse(savedFormData)
    : WORKOUT_DEFAULT_VALUES.defaultValues

  useEffect(() => {
    if (!watch) return

    const subscription = watch((value) => {
      localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(value))
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return { defaultValues }
}

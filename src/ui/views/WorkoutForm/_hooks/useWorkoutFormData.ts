import { useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'
import { WORKOUT_DEFAULT_VALUES } from '../_helpers/workout-default-values'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'

type Props = {
  watch?: UseFormWatch<SubmitFormWorkout> | undefined
}

export function useWorkoutFormData({ watch }: Props) {
  const savedFormData = localStorage.getItem('workoutForm')
  const defaultValues = savedFormData
    ? JSON.parse(savedFormData)
    : WORKOUT_DEFAULT_VALUES.defaultValues

  useEffect(() => {
    if (!watch) return

    const subscription = watch((value) => {
      localStorage.setItem('workoutForm', JSON.stringify(value))
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return { defaultValues }
}

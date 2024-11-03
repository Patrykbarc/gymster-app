import { useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { setIsLoading } from '../../../../utils/redux/slices/loading/loadingSlice'
import { debounce } from '../_helpers/debounce'
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
  const dispatch = useAppDispatch()

  const defaultValues = savedFormData
    ? JSON.parse(savedFormData)
    : WORKOUT_DEFAULT_VALUES.defaultValues

  useEffect(() => {
    dispatch(setIsLoading(false))
  }, [dispatch])

  useEffect(() => {
    if (!watch) return

    const debouncedLoading = debounce((value) => {
      dispatch(setIsLoading(value))
    }, 300)

    const debouncedSave = debounce((value) => {
      const loadingPromise = new Promise((resolve) => {
        localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(value))
        resolve(true)
      })

      toast.promise(loadingPromise, {
        loading: 'Saving draft...',
        success: 'Draft saved!',
        error: 'Failed to save draft',
      })
    }, 1000)

    const subscription = watch((value) => {
      dispatch(setIsLoading(true))
      debouncedSave(value)
      debouncedLoading(false)
    })

    return () => {
      subscription.unsubscribe()
      debouncedLoading.cancel()
      debouncedSave.cancel()
    }
  }, [watch, dispatch])

  return { defaultValues }
}

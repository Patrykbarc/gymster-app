import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { WorkoutFormBody } from '../../../../../ui/views/WorkoutForm/_components/WorkoutFormBody/WorkoutFormBody'
import { submitPlannerForm } from '../../../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
import { SubmitFormWorkout } from '../../../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { useAppDispatch } from '../../../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../../../utils/hooks/useSession'
import { fetchWorkouts } from '../../../../../utils/redux/slices/workouts/actions/fetchWorkouts'
import { ExercisesListProps } from '../ExercisesList/ExercisesList'
import { EDIT_FORM_DEFAULT_VALUES } from './_helper/edit-form-default-values'

export function EditWorkout({ exercises }: ExercisesListProps) {
  const { id } = useParams()
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<SubmitFormWorkout>({
    defaultValues: EDIT_FORM_DEFAULT_VALUES({ exercises }),
  })

  useEffect(() => {
    if (exercises) {
      reset(EDIT_FORM_DEFAULT_VALUES({ exercises }))
    }
  }, [exercises, reset])

  const { session } = useSession()
  const dispatch = useAppDispatch()

  if (!session) return
  const userId = session.user.id

  const onSubmit = async (data: SubmitFormWorkout) => {
    try {
      const response = await submitPlannerForm({
        data: { ...data, userId },
        dispatch,
        workoutId: id,
      })

      if (response?.meta.requestStatus === 'fulfilled') {
        reset(data)
        await dispatch(fetchWorkouts({ workoutId: id }))
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WorkoutFormBody<SubmitFormWorkout>
        errors={errors}
        control={control}
        register={register}
      />
    </form>
  )
}

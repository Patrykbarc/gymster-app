import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { ExercisesListProps } from '../../../routes/(logged)/Planner/Workout/ExercisesList/ExercisesList'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../utils/hooks/useSession'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/actions/fetchWorkouts'
import { WorkoutFormBody } from '../WorkoutForm/_components/WorkoutFormBody/WorkoutFormBody'
import { WORKOUT_FORM_SCHEMA } from '../WorkoutForm/_constants/workout-form-schema'
import { submitPlannerForm } from '../WorkoutForm/_helpers/submitPlannerForm'
import { SubmitFormWorkout } from '../WorkoutForm/_types/SubmitFormWorkout'
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
    resolver: zodResolver(WORKOUT_FORM_SCHEMA),
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
      const response = await toast.promise(
        submitPlannerForm({
          data: { ...data, userId },
          dispatch,
          workoutId: id,
        }),
        {
          loading: 'Updating workout...',
          success: 'Workout updated successfully',
          error: 'Error updating workout',
        }
      )

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

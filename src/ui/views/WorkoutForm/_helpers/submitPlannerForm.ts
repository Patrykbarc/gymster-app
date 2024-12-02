import { modifyWorkout } from '../../../../utils/redux/slices/workouts/actions/modifyWorkout'
import { AppDispatch } from '../../../../utils/redux/store'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'

export type FormWorkout = SubmitFormWorkout & {
  userId: string
}

type SubmitPlannerProps = {
  data: FormWorkout
  dispatch: AppDispatch
  workoutId?: string
}

export async function submitPlannerForm({
  data,
  dispatch,
  workoutId,
}: SubmitPlannerProps) {
  const dateObject = new Date(data.info.workoutDate)

  if (isNaN(dateObject.getTime())) {
    console.error('Invalid date format')
    return
  }

  return await dispatch(modifyWorkout({ workoutData: data, workoutId }))
}

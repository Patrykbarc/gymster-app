import { addWorkout } from '../../../../utils/redux/slices/workouts/workoutsSlice'
import { AppDispatch } from '../../../../utils/redux/store'
import { SubmitFormWorkout } from '../PlannerForm'

export type FormWorkout = SubmitFormWorkout & {
  userId: string
}

export async function submitPlannerForm(
  data: FormWorkout,
  dispatch: AppDispatch
) {
  // console.log(data)

  const dateObject = new Date(data.info.workoutDate)

  if (isNaN(dateObject.getTime())) {
    console.error('Invalid date format')
    return
  }

  // const formattedDate = dateObject.toISOString().split('T')[0]

  dispatch(addWorkout(data))
}

import { addWorkout } from '../../../../utils/redux/slices/workouts/workoutsSlice'
import { AppDispatch } from '../../../../utils/redux/store'
import { SubmitFormWorkout } from '../PlannerForm'

type FormWorkout = {
  workout: string
  workoutDate: string
  userId: string
  exercises: SubmitFormWorkout['exercises']
  dispatch: AppDispatch
}

export async function submitPlannerForm({
  workout,
  workoutDate,
  userId,
  exercises,
  dispatch,
}: FormWorkout) {
  const dateObject = new Date(workoutDate)

  if (isNaN(dateObject.getTime())) {
    console.error('Invalid date format')
    return
  }

  const formattedDate = dateObject.toISOString().split('T')[0]
  dispatch(
    addWorkout({
      userId,
      workoutName: workout,
      workoutDate: formattedDate,
      exercises,
    })
  )
}

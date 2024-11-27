import { FormWorkout } from '../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
import { updateSet, UpdateSetParams } from '../_queries/updateWorkout'

export type AddWorkoutArgs = FormWorkout

export async function handleUpdateSet({ setId, field }: UpdateSetParams) {
  const response = await updateSet({ setId, field })

  if (response?.data) {
    console.log('Updated successfully')
  }
}

import { FormWorkout } from '../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
import { updateWorkout, UpdateWorkoutParams } from '../_queries/updateWorkout'

export type AddWorkoutArgs = FormWorkout

export async function handleEditWorkout({ setId, field }: UpdateWorkoutParams) {
  const response = await updateWorkout({ setId, field })

  if (response?.data) {
    console.log('Updated successfully')
  }
}

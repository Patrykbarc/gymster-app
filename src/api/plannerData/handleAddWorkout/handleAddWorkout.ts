import { SubmitFormWorkout } from '../../../ui/views/PlannerForm/PlannerForm'
import { rollbackWorkout } from '../_queries/rollbackWorkout'
import { upsertSets } from '../_queries/upsertSets'
import { upsertWorkout } from '../_queries/upsertWorkout'

export type AddWorkoutArgs = {
  userId: string
  workoutName: string
  workoutDate: string
  sets: SubmitFormWorkout['exercises']
}

export async function handleAddWorkout({
  userId,
  workoutName,
  workoutDate,
  sets,
}: AddWorkoutArgs) {
  const workoutResult = await upsertWorkout(userId, workoutName, workoutDate)

  if (!workoutResult || !workoutResult.workoutId) {
    return { data: null, error: new Error('Failed to upsert workout') }
  }

  const { workoutId } = workoutResult
  const { error } = await upsertSets(sets, workoutId)

  if (error) {
    await rollbackWorkout(workoutId)
    return { data: null, error }
  }

  return { data: workoutResult.data, error: null }
}

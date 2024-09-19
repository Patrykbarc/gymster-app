import { FormWorkout } from '../../../ui/views/PlannerForm/_helpers/submitPlannerForm'
import { rollbackWorkout } from '../_queries/rollbackWorkout'
import { upsertExecise } from '../_queries/upsertExecise'
import { upsertSets } from '../_queries/upsertSets'
import { upsertWorkout } from '../_queries/upsertWorkout'

export type AddWorkoutArgs = FormWorkout

export async function handleAddWorkout({
  userId,
  info: { workout, workoutDate },
  exercises,
}: AddWorkoutArgs) {
  const workoutResult = await upsertWorkout(userId, workout, workoutDate)

  if (!workoutResult) return

  const { workoutId } = workoutResult

  const { data: exerciseData, error: exerciseError } = await upsertExecise(
    workoutId,
    exercises
  )

  if (!exerciseData) return

  const { error: upsertError } = await upsertSets(
    workoutId,
    exercises,
    exerciseData
  )
  if (exerciseError || upsertError) {
    await rollbackWorkout(workoutId)
    return { data: null, error: exerciseError || upsertError }
  }

  return { data: workoutResult.data, error: null }
}

import { FormWorkout } from '../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
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

  if (workoutResult.error || !workoutResult.data) {
    return { data: [], error: workoutResult?.error?.message }
  }

  const { workoutId } = workoutResult

  const { data: exerciseData, error: exerciseError } = await upsertExecise(
    workoutId,
    exercises
  )

  console.log(exerciseData)

  if (exerciseError || !exerciseData)
    return {
      data: [],
      error: exerciseError,
    }

  const { error: upsertError } = await upsertSets(
    workoutId,
    exercises,
    exerciseData
  )

  if (exerciseError || upsertError) {
    await rollbackWorkout(workoutId)
    return { data: [], error: exerciseError || upsertError }
  }

  return { data: workoutResult.data, error: null }
}

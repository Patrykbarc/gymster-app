import { FormWorkout } from '../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
import { handleExerciseAndSets } from '../_queries/_helper/handleExerciseAndSets'
import { upsertWorkoutBase } from '../_queries/_helper/upsertWorkoutBase'
import { rollbackWorkout } from '../_queries/rollbackWorkout'

export type AddWorkoutArgs = FormWorkout

export async function handleAddWorkout({
  userId,
  info,
  exercises,
}: AddWorkoutArgs) {
  const workoutResult = await upsertWorkoutBase(
    userId,
    info.workout,
    info.workoutDate
  )

  if (workoutResult.error) {
    return { data: [], error: workoutResult.error.message }
  }
  const { workoutId } = workoutResult

  const exerciseResult = await handleExerciseAndSets(workoutId, exercises)

  if (exerciseResult.error) {
    await rollbackWorkout(workoutId)
    return { data: [], error: exerciseResult.error }
  }

  return { data: workoutResult.data, error: null }
}

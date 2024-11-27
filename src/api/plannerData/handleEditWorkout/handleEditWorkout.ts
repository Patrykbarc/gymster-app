import { handleExerciseAndSets } from '../_queries/_helper/handleExerciseAndSets'
import { upsertWorkoutBase } from '../_queries/_helper/upsertWorkoutBase'
import { AddWorkoutArgs } from '../handleAddWorkout/handleAddWorkout'

export async function handleEditWorkout({
  userId,
  workoutId,
  info,
  exercises,
}: AddWorkoutArgs & { workoutId: string }) {
  const workoutResult = await upsertWorkoutBase(
    userId,
    info.workout,
    info.workoutDate,
    workoutId
  )

  if (workoutResult.error) {
    return { data: [], error: workoutResult.error.message }
  }

  const exerciseResult = await handleExerciseAndSets(workoutId, exercises)

  if (exerciseResult.error) {
    return { data: [], error: exerciseResult.error }
  }

  return { data: workoutResult.data, error: null }
}

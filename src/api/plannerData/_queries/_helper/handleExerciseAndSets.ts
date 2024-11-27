import { SubmitFormWorkout } from '../../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { upsertExecise } from '../upsertExecise'
import { upsertSets } from '../upsertSets'

export async function handleExerciseAndSets(
  workoutId: string,
  exercises: SubmitFormWorkout['exercises']
) {
  const { data: exerciseData, error: exerciseError } = await upsertExecise(
    workoutId,
    exercises
  )

  if (exerciseError || !exerciseData) {
    return { error: exerciseError || new Error('Failed to upsert exercises') }
  }

  const { error: setError } = await upsertSets(
    workoutId,
    exercises,
    exerciseData
  )

  if (setError) {
    return { error: setError }
  }

  return { data: exerciseData, error: null }
}

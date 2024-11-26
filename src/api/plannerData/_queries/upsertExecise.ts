import { Sets } from '../../../ui/views/WorkoutForm/_types/Sets'
import { SubmitFormWorkout } from '../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

type Exercises = SubmitFormWorkout['exercises']
type ExerciseCopy = {
  workout_id: string
  name: string
  sets?: Sets[]
}

export async function upsertExecise(workoutId: string, exercises: Exercises) {
  const mappedExercises = exercises.map((exercise) => {
    const exerciseCopy: ExerciseCopy = { ...exercise, workout_id: workoutId }
    delete exerciseCopy.sets
    return exerciseCopy
  })

  const { data, error } = await supabase
    .from('exercises')
    .upsert(mappedExercises)
    .select()

  if (error) {
    printError({ message: 'adding workout', error })
    return { error }
  }

  return { data, error }
}

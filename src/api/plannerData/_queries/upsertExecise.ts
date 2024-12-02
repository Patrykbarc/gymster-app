import { Sets } from '../../../ui/views/WorkoutForm/_types/Sets'
import { SubmitFormWorkout } from '../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

type Exercises = SubmitFormWorkout['exercises']
type ExerciseCopy = {
  id?: number
  workout_id: string
  name: string
  sets?: Sets[]
}

export async function upsertExecise(workoutId: string, exercises: Exercises) {
  const existingExercises: ExerciseCopy[] = []
  const newExercises: ExerciseCopy[] = []

  exercises.forEach((exercise) => {
    const exerciseCopy: ExerciseCopy = {
      ...exercise,
      workout_id: workoutId,
    }
    delete exerciseCopy.sets

    if (exercise.id) {
      existingExercises.push(exerciseCopy)
    } else {
      newExercises.push(exerciseCopy)
    }
  })

  // Handle deletions
  const { data: currentExercises } = await supabase
    .from('exercises')
    .select('id')
    .eq('workout_id', workoutId)

  if (currentExercises) {
    const currentExerciseIds = new Set(existingExercises.map((e) => e.id))
    const exercisesToDelete = currentExercises
      .filter((e) => !currentExerciseIds.has(e.id))
      .map((e) => e.id)

    if (exercisesToDelete.length > 0) {
      const { error: deleteError } = await supabase
        .from('exercises')
        .delete()
        .eq('workout_id', workoutId)
        .in('id', exercisesToDelete)

      if (deleteError) {
        printError({ message: 'deleting exercises', error: deleteError })
        return { error: deleteError }
      }
    }
  }

  // Handle updates for existing exercises
  if (existingExercises.length > 0) {
    const { error: updateError } = await supabase
      .from('exercises')
      .upsert(existingExercises, { onConflict: 'id' })

    if (updateError) {
      printError({ message: 'updating exercises', error: updateError })
      return { error: updateError }
    }
  }

  // Handle inserts for new exercises
  if (newExercises.length > 0) {
    const { error: insertError } = await supabase
      .from('exercises')
      .insert(newExercises)
      .select()

    if (insertError) {
      printError({ message: 'inserting exercises', error: insertError })
      return { error: insertError }
    }
  }

  // Return combined data
  const { data: allExercises, error: fetchError } = await supabase
    .from('exercises')
    .select()
    .eq('workout_id', workoutId)

  if (fetchError) {
    printError({ message: 'fetching exercises', error: fetchError })
    return { error: fetchError }
  }

  return { data: allExercises, error: null }
}

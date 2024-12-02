import { ExercisesListProps } from '../../ExercisesList/ExercisesList'

export const EDIT_FORM_DEFAULT_VALUES = ({ exercises }: ExercisesListProps) => {
  return {
    info: {
      workout: exercises?.workout_name,
      workoutDate: exercises?.workout_date,
    },
    exercises: exercises?.exercises.map((exercise) => ({
      id: exercise.id,
      name: exercise.name,
      sets: exercise.sets.map((set) => ({
        id: set.id,
        set: set.set,
        reps: set.reps,
        weight: set.weight,
      })),
    })),
  }
}

const DEFAULT_WEIGHT = 10
const DEFAULT_REPS = 8

export const WORKOUT_DEFAULT_VALUES = {
  defaultValues: {
    info: {
      workout: '',
      workoutDate: new Date().toISOString().split('T')[0],
    },
    exercises: [
      {
        name: '',
        sets: [{ set: 1, weight: DEFAULT_WEIGHT, reps: DEFAULT_REPS }],
      },
    ],
  },
}

export const workoutDefaultValues =
  WORKOUT_DEFAULT_VALUES.defaultValues.exercises[0].sets[0]

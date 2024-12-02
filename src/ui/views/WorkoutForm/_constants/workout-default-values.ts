const DEFAULT_WEIGHT = 10
const DEFAULT_REPS = 8

export const WORKOUT_DEFAULT_VALUES = {
  defaultValues: {
    info: {
      workout: 'Test',
      workoutDate: '2024-11-23',
    },
    exercises: [
      {
        name: 'Test',
        sets: [{ set: 1, weight: DEFAULT_WEIGHT, reps: DEFAULT_REPS }],
      },
    ],
  },
}

export const workoutDefaultValues =
  WORKOUT_DEFAULT_VALUES.defaultValues.exercises[0].sets[0]

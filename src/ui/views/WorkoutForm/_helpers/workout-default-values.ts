export const WORKOUT_DEFAULT_VALUES = {
  defaultValues: {
    info: {
      workout: '',
      workoutDate: '',
    },
    exercises: [
      {
        name: '',
        sets: [{ set: 1, weight: 10, reps: 8 }],
      },
    ],
  },
}

export const workoutDefaultValues =
  WORKOUT_DEFAULT_VALUES.defaultValues.exercises[0].sets[0]

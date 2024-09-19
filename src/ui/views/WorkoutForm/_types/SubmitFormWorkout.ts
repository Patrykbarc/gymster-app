import { Sets } from './Sets'

export type SubmitFormWorkout = {
  info: {
    workout: string
    workoutDate: string
  }
  exercises: {
    name: string
    sets: Sets[]
  }[]
}

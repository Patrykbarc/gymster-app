import { Sets } from './Sets'

export type SubmitFormWorkout = {
  info: {
    workout: string
    workoutDate: string
  }
  exercises: {
    id?: number
    name: string
    sets: Sets[]
  }[]
}

import { UseFieldArrayAppend } from 'react-hook-form'
import { Button } from '../../../../../components/Button/Button'
import { workoutDefaultValues } from '../../../_constants/workout-default-values'
import { SubmitFormWorkout } from '../../../_types/SubmitFormWorkout'

const newExerciseRep = workoutDefaultValues.reps
const newExerciseWeight = workoutDefaultValues.weight

type AddExerciseButtonProps = {
  appendExercise: UseFieldArrayAppend<SubmitFormWorkout, 'exercises'>
}

export function AddExerciseButton({ appendExercise }: AddExerciseButtonProps) {
  return (
    <Button
      type="button"
      $variant="outline"
      onClick={() =>
        appendExercise({
          name: '',
          sets: [{ set: 1, weight: newExerciseWeight, reps: newExerciseRep }],
        })
      }
    >
      Add exercise
    </Button>
  )
}

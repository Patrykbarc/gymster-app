import { FieldArrayWithId, UseFieldArrayAppend } from 'react-hook-form'
import { Button } from '../../../../../../components/Button/Button'
import { workoutDefaultValues } from '../../../../_helpers/workout-default-values'
import { SubmitFormWorkout } from '../../../../_types/SubmitFormWorkout'

type Exercise = `exercises.${number}.sets`

type NewSetButtonProps = {
  appendSet: UseFieldArrayAppend<SubmitFormWorkout, Exercise>
  setFields: FieldArrayWithId<SubmitFormWorkout, Exercise, 'id'>[]
}

const newSetRep = workoutDefaultValues.reps
const newSetWeight = workoutDefaultValues.weight

export function NewSetButton({ appendSet, setFields }: NewSetButtonProps) {
  return (
    <Button
      type="button"
      $variant="outline"
      onClick={() =>
        appendSet({
          set: setFields.length + 1,
          reps: newSetRep,
          weight: newSetWeight,
        })
      }
    >
      Add set
    </Button>
  )
}

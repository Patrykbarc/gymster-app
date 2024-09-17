import { FieldArrayWithId, UseFieldArrayAppend } from 'react-hook-form'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../PlannerForm'

export type AddSetButtonProps = {
  append: UseFieldArrayAppend<SubmitFormWorkout>
  fields: FieldArrayWithId<SubmitFormWorkout>[]
}

export function AddSetButton({ append, fields }: AddSetButtonProps) {
  return (
    <Button
      type="button"
      onClick={() => append({ set: fields.length + 1, weight: 0, reps: 0 })}
    >
      Add set
    </Button>
  )
}

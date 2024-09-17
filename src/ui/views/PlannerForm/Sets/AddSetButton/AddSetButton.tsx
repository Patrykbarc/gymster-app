import { FieldArrayWithId, UseFieldArrayAppend } from 'react-hook-form'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../PlannerForm'

export type AddSetButtonProps = {
  append: UseFieldArrayAppend<SubmitFormWorkout>
  fields: FieldArrayWithId<SubmitFormWorkout>[]
}

export function AddSetButton({ append, fields }: AddSetButtonProps) {
  function handleAppendSet() {
    append({ set: fields.length + 1, weight: 1, reps: 1 })
  }

  return (
    <Button type="button" onClick={handleAppendSet}>
      Add set
    </Button>
  )
}

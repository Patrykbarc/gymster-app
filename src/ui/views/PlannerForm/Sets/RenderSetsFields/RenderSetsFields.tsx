import { XIcon } from 'lucide-react'
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../PlannerForm'
import { RenderField } from './RenderField/RenderField'

export type RenderSetsFieldsProps = {
  fields: FieldArrayWithId<SubmitFormWorkout, 'exercises'>[]
  register: UseFormRegister<SubmitFormWorkout>
  errors: FieldErrors<SubmitFormWorkout>
  remove: UseFieldArrayRemove
}

export function RenderSetsFields({
  fields,
  register,
  errors,
  remove,
}: RenderSetsFieldsProps) {
  const isButtonDisabled = fields.length === 1
  console.log(errors)
  return fields.map((field, index) => (
    <div key={field.id} className="form-workouts">
      <p>{index + 1}</p>
      {RenderField(
        `sets.${index}.weight`,
        'number',
        errors.sets?.[index]?.weight?.message,
        register
      )}
      {RenderField(
        `sets.${index}.reps`,
        'number',
        errors.sets?.[index]?.reps?.message,
        register
      )}
      <Button
        type="button"
        $variant="danger"
        disabled={isButtonDisabled}
        onClick={() => remove(index)}
      >
        {<XIcon />}
      </Button>
    </div>
  ))
}

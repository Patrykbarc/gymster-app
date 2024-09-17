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
  fields: FieldArrayWithId<SubmitFormWorkout, 'sets', 'id'>[]
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
  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="form-workouts">
          <p>{index + 1}</p>
          {RenderField(
            `sets.${index}.weight`,
            'number',
            0,
            errors.sets?.[index]?.weight?.message,
            register
          )}
          {RenderField(
            `sets.${index}.reps`,
            'number',
            0,
            errors.sets?.[index]?.reps?.message,
            register
          )}
          <Button type="button" $variant="danger" onClick={() => remove(index)}>
            {<XIcon />}
          </Button>
        </div>
      ))}
    </>
  )
}

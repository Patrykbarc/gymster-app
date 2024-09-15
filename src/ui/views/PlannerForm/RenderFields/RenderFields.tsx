import { XIcon } from 'lucide-react'
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form'
import { Button } from '../../../components/Button/Button'
import { FormField } from '../../../components/Form/FormField/FormField'
import { SubmitFormWorkout } from '../PlannerForm'

type RenderFieldsProps = {
  fields: FieldArrayWithId<SubmitFormWorkout, 'sets', 'id'>[]
  register: UseFormRegister<SubmitFormWorkout>
  errors: FieldErrors<SubmitFormWorkout>
  remove: UseFieldArrayRemove
}

type IdType =
  | `sets.${number}.set`
  | `sets.${number}.weight`
  | `sets.${number}.reps`

export function RenderFields({
  fields,
  register,
  errors,
  remove,
}: RenderFieldsProps) {
  const renderField = (
    id: IdType,
    type: string,
    defaultValue: number | string,
    error: string | undefined
  ) => (
    <FormField
      id={id}
      type={type}
      defaultValue={defaultValue}
      register={register(id)}
      error={error}
      isError={!!error}
      $errorPosition="right"
      step={0.5}
    />
  )

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="form-workouts">
          <p>{index + 1}</p>
          {renderField(
            `sets.${index}.weight`,
            'number',
            0,
            errors.sets?.[index]?.weight?.message
          )}
          {renderField(
            `sets.${index}.reps`,
            'number',
            0,
            errors.sets?.[index]?.reps?.message
          )}
          <Button type="button" $variant="danger" onClick={() => remove(index)}>
            {<XIcon />}
          </Button>
        </div>
      ))}
    </>
  )
}

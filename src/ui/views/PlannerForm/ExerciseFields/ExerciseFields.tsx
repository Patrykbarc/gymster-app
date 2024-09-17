import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form'
import { Button } from '../../../components/Button/Button'
import { SubmitFormWorkout } from '../PlannerForm'
import { RenderField } from '../RenderField/RenderField'
import { RenderSetsFields } from '../Sets/RenderSetsFields/RenderSetsFields'
import { Sets } from '../Sets/Sets'

type ExerciseFieldsProps = {
  control: Control<SubmitFormWorkout>
  register: UseFormRegister<SubmitFormWorkout>
  exerciseIndex: number
  errors: FieldErrors<SubmitFormWorkout>
  removeExercise: (index: number) => void
}

export function ExerciseFields({
  control,
  register,
  exerciseIndex,
  errors,
  removeExercise,
}: ExerciseFieldsProps) {
  const {
    fields: setFields,
    append: appendSet,
    remove: removeSet,
  } = useFieldArray({
    control,
    name: `exercises.${exerciseIndex}.sets`,
  })

  return (
    <div className="exercise-group">
      {RenderField({
        id: `exercises.${exerciseIndex}.name`,
        label: 'Exercise',
        type: 'text',
        registerName: `exercises.${exerciseIndex}.name`,
        error: errors.exercises?.[exerciseIndex]?.name?.message,
        placeholder: 'Exercise name',
        register,
      })}
      <Sets append={appendSet} fields={setFields}>
        <RenderSetsFields
          fields={setFields}
          register={register}
          errors={errors}
          remove={removeSet}
        />
      </Sets>
      <Button onClick={() => removeExercise(exerciseIndex)}>
        Remove Exercise
      </Button>
    </div>
  )
}

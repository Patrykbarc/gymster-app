import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { Button } from '../../../components/Button/Button'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'
import { Field } from '../Field/Field'
import { SetsFields } from './SetsFields/SetsFields'

type ExerciseFieldsProps = {
  register: UseFormRegister<SubmitFormWorkout>
  control: Control<SubmitFormWorkout>
}

const ExerciseFieldsContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`

const FieldsContainer = styled.div`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`

export function ExerciseFields({ control, register }: ExerciseFieldsProps) {
  const {
    fields: exerciseFields,
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({
    control,
    name: 'exercises',
  })

  return (
    <div>
      {exerciseFields.map((field, exerciseIndex) => {
        return (
          <ExerciseFieldsContainer key={field.id}>
            <FieldsContainer>
              <Field
                label="Exercise name"
                register={register(`exercises.${exerciseIndex}.name`)}
              />

              <Button
                disabled={exerciseFields.length === 1}
                onClick={() => removeExercise(exerciseIndex)}
              >
                Remove
              </Button>
            </FieldsContainer>

            <SetsFields
              control={control}
              register={register}
              exerciseIndex={exerciseIndex}
            />
          </ExerciseFieldsContainer>
        )
      })}

      <Button
        type="button"
        onClick={() =>
          appendExercise({ name: '', sets: [{ set: 1, weight: 1, reps: 1 }] })
        }
      >
        Add exercise
      </Button>
    </div>
  )
}

import { Trash2 } from 'lucide-react'
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
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`

const FieldsContainer = styled.div`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const ButtonActions = styled.div`
  display: flex;
  justify-content: space-between;
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
                placeholder="Bench press"
                register={register(`exercises.${exerciseIndex}.name`)}
              />

              <Button
                disabled={exerciseFields.length === 1}
                $variant="outline"
                onClick={() => removeExercise(exerciseIndex)}
              >
                <Trash2 />
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

      <ButtonActions>
        <Button
          type="button"
          $variant="outline"
          onClick={() =>
            appendExercise({ name: '', sets: [{ set: 1, weight: 1, reps: 1 }] })
          }
        >
          Add exercise
        </Button>

        <div>
          <Button type="submit">Save</Button>
        </div>
      </ButtonActions>
    </div>
  )
}

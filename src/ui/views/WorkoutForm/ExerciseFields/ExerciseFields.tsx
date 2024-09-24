import { Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { Control, get, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorContext } from '../../../../utils/providers/contexts/ErrorContext'
import { Button } from '../../../components/Button/Button'
import { workoutDefaultValues } from '../_helpers/workout-default-values'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'
import { Field } from '../Field/Field'
import { FieldError } from '../Field/FieldError/FieldError'
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
`

const ButtonActions = styled.div`
  display: flex;
  justify-content: space-between;
`

const newExerciseRep = workoutDefaultValues.reps
const newExerciseWeight = workoutDefaultValues.weight

export function ExerciseFields({ control, register }: ExerciseFieldsProps) {
  const {
    fields: exerciseFields,
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({
    control,
    name: 'exercises',
  })

  const errors = useContext(ErrorContext)

  return (
    <div>
      {exerciseFields.map((field, exerciseIndex) => {
        const exerciseError = get(errors, `exercises[${exerciseIndex}]`)
        const exerciseName = exerciseError?.name?.message

        return (
          <ExerciseFieldsContainer key={field.id}>
            <FieldsContainer>
              <Field
                label="Exercise name"
                placeholder="Bench press"
                register={register(`exercises.${exerciseIndex}.name`)}
                $isError={exerciseError}
              />

              <Button
                disabled={exerciseFields.length === 1}
                $variant="outline"
                onClick={() => removeExercise(exerciseIndex)}
              >
                <Trash2 />
              </Button>
            </FieldsContainer>

            <FieldError $marginBlock>{exerciseName}</FieldError>

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
            appendExercise({
              name: '',
              sets: [
                { set: 1, weight: newExerciseWeight, reps: newExerciseRep },
              ],
            })
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

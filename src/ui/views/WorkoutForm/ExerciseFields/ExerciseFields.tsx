import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { Button } from '../../../components/Button/Button'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'
import { AddExerciseButton } from './AddExerciseButton/AddExerciseButton'
import { ExerciseField } from './ExerciseField/ExerciseField'
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
            <ExerciseField
              register={register}
              exercise={{
                exerciseFields,
                exerciseIndex,
                removeExercise,
              }}
            />
            <SetsFields
              control={control}
              register={register}
              exerciseIndex={exerciseIndex}
            />
          </ExerciseFieldsContainer>
        )
      })}

      <ButtonActions>
        <AddExerciseButton appendExercise={appendExercise} />
        <Button type="submit">Save</Button>
      </ButtonActions>
    </div>
  )
}

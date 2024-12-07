import { ReactNode } from 'react'
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { AddExerciseButton } from './AddExerciseButton/AddExerciseButton'
import { ExerciseField } from './ExerciseField/ExerciseField'
import { SetsFields } from './SetsFields/SetsFields'

export type ExerciseFieldsProps = {
  register: UseFormRegister<SubmitFormWorkout>
  control: Control<SubmitFormWorkout>
  children?: ReactNode
}

export const ExerciseFieldsContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding-block: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['300']};
`

export const ButtonActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.lg};
`

export function ExerciseFields({
  control,
  register,
  children,
}: ExerciseFieldsProps) {
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
        {children}
      </ButtonActions>
    </div>
  )
}

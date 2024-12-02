import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { WorkoutsState } from '../../../../../utils/redux/slices/workouts/_types/types'
import { Button } from '../../../../components/Button/Button'
import { Spinner } from '../../../../components/Spinner/Spinner'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { AddExerciseButton } from './AddExerciseButton/AddExerciseButton'
import { ExerciseField } from './ExerciseField/ExerciseField'
import { SetsFields } from './SetsFields/SetsFields'

export type ExerciseFieldsProps = {
  register: UseFormRegister<SubmitFormWorkout>
  control: Control<SubmitFormWorkout>
  status?: WorkoutsState['status']
}

export const ExerciseFieldsContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding-block: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
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
  status,
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
        {status === 'loading' ? (
          <Spinner $size="2rem" />
        ) : (
          <Button type="submit">Save</Button>
        )}
      </ButtonActions>
    </div>
  )
}

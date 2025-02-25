import { useContext } from 'react'
import { get, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorContext } from '../../../../../utils/providers/contexts/ErrorContext'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { Field } from '../Field/Field'
import { FieldError } from '../Field/FieldError/FieldError'

type WorkoutInfoProps = {
  register: UseFormRegister<SubmitFormWorkout>
}

const WorkoutInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`

export function WorkoutInfo({ register }: WorkoutInfoProps) {
  const errors = useContext(ErrorContext)

  const workoutError = get(errors, 'info.workout')?.message
  const dateError = get(errors, 'info.workoutDate')?.message

  return (
    <WorkoutInfoContainer>
      <div>
        <Field
          label="Workout name"
          placeholder="Chest workout"
          register={register('info.workout')}
          $isError={workoutError}
        />
        <FieldError>{workoutError}</FieldError>
      </div>

      <div>
        <Field
          label="Workout Date"
          type="date"
          register={register('info.workoutDate')}
          $isError={dateError}
        />
        <FieldError>{dateError}</FieldError>
      </div>
    </WorkoutInfoContainer>
  )
}

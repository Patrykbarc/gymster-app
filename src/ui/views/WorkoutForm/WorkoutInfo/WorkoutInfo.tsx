import { UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'
import { Field } from '../Field/Field'

type WorkoutInfoProps = {
  register: UseFormRegister<SubmitFormWorkout>
}

const WorkoutInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  /* margin-bottom: ${({ theme }) => theme.spacing.lg}; */
`

export function WorkoutInfo({ register }: WorkoutInfoProps) {
  return (
    <WorkoutInfoContainer>
      <Field label="Workout name" register={register('info.workout')} />
      <Field
        label="Workout Date"
        type="date"
        register={register('info.workoutDate')}
      />
    </WorkoutInfoContainer>
  )
}

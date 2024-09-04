import styled from 'styled-components'
import { Card } from '../Card/Card'
import { FormTitle } from '../Form/FormTitle/FormTitle'
import { Workout } from './Workout/Workout'

export const ScheduledWorkoutsContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`

export function ScheduledWorkouts() {
  return (
    <Card>
      <FormTitle>Scheduled Workouts</FormTitle>
      <ScheduledWorkoutsContainer>
        <Workout />
        <Workout />
        <Workout />
      </ScheduledWorkoutsContainer>
    </Card>
  )
}

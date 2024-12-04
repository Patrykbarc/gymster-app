import styled from 'styled-components'
import { WorkoutForm } from '../../views/WorkoutForm/WorkoutForm'
import { WorkoutsList } from '../../views/WorkoutsList/WorkoutsList'

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: clamp(300px, 100%, 100%);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakPoints.xxl}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export function Workouts() {
  return (
    <Container>
      <WorkoutForm />
      <WorkoutsList />
    </Container>
  )
}

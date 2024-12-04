import styled from 'styled-components'
import { WorkoutsList } from '../WorkoutsList/WorkoutsList'
import { TotalProgressOverview } from './TotalProgressOverview/TotalProgressOverview'

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export function DashboardOverview() {
  return (
    <Container>
      <TotalProgressOverview />
      <WorkoutsList />
    </Container>
  )
}

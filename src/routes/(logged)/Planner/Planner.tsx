import styled from 'styled-components'
import { Main } from '../../../ui/components/Main/Main'
import { ScheduledWorkouts } from '../../../ui/components/ScheduledWorkouts/ScheduledWorkouts'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
`

export function Planner() {
  return (
    <Main>
      <MainContainer>
        <ScheduledWorkouts />
      </MainContainer>
    </Main>
  )
}

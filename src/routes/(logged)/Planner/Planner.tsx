import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../../../ui/components/Main/Main'
import { ScheduledWorkouts } from '../../../ui/components/ScheduledWorkouts/ScheduledWorkouts'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`

export function Planner() {
  return (
    <Main>
      <MainContainer>
        <ScheduledWorkouts />
        <Outlet />
      </MainContainer>
    </Main>
  )
}

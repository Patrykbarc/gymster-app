import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Main } from '../../../ui/components/Main/Main'
import { Workouts } from '../../../ui/components/Workouts/Workouts'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`

export function NewWorkout() {
  return (
    <Main>
      <MainContainer>
        <Workouts />
        <Outlet />
      </MainContainer>
    </Main>
  )
}

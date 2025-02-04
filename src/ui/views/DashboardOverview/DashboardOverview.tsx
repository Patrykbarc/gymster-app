import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { fetchOverview } from '../../../utils/redux/slices/overview/actions/fetchOverview'
import { WorkoutsList } from '../WorkoutsList/WorkoutsList'
import { TotalProgressOverview } from './TotalProgressOverview/TotalProgressOverview'

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export function DashboardOverview() {
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((state) => state.workouts)

  console.log(status)

  useEffect(() => {
    dispatch(fetchOverview())
  }, [dispatch])

  return (
    <Container>
      <TotalProgressOverview />
      <WorkoutsList />
    </Container>
  )
}

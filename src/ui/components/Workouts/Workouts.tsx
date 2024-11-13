import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { workoutsSelector } from '../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/actions'
import { SavedWorkouts } from '../../views/SavedWorkouts/SavedWorkouts'
import { WorkoutForm } from '../../views/WorkoutForm/WorkoutForm'

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
  const dispatch = useAppDispatch()
  const { status, error, user } = useAppSelector(workoutsSelector)

  useEffect(() => {
    dispatch(fetchWorkouts())
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  if (!user) return

  return (
    <Container>
      <WorkoutForm />
      <SavedWorkouts />
    </Container>
  )
}

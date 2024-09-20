// ScheduledWorkouts.js
import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { workoutsSelector } from '../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/workoutsSlice'
import { WorkoutForm } from '../../views/WorkoutForm/WorkoutForm'
import { Card } from '../Card/Card'
import { Actions } from './Workout/Actions/Actions'
import { Workout } from './Workout/Workout'

const Container = styled.div`
  display: grid;
  max-width: 40%;
  gap: ${({ theme }) => theme.spacing.xl};
`

const WorkoutsContainer = styled(Card)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export function Workouts() {
  const dispatch = useAppDispatch()
  const { workouts, status, error, user } = useAppSelector(workoutsSelector)

  useEffect(() => {
    dispatch(fetchWorkouts())
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  if (!user) return

  return (
    <Container>
      {workouts.length > 0 && (
        <WorkoutsContainer>
          {workouts.map((workout) => (
            <Workout key={workout.id} {...workout}>
              <Actions workoutId={workout.id} />
            </Workout>
          ))}
        </WorkoutsContainer>
      )}
      <WorkoutForm />
    </Container>
  )
}

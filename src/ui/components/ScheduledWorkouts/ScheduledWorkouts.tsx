// ScheduledWorkouts.js
import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { selectScheduledWorkouts } from '../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/workoutsSlice'
import { PlannerForm } from '../../views/PlannerForm/PlannerForm'
import { Card } from '../Card/Card'
import { Actions } from './Workout/Actions/Actions'
import { Workout } from './Workout/Workout'

const ScheduledWorkoutsContainer = styled(Card)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.large};
`

export function ScheduledWorkouts() {
  const dispatch = useAppDispatch()
  const { workouts, status, error, user } = useAppSelector(
    selectScheduledWorkouts
  )
  console.log(status)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWorkouts())
    }
  }, [])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>
  if (!user) return

  return (
    <ScheduledWorkoutsContainer>
      {workouts.map((workout) => (
        <Workout key={workout.id} {...workout}>
          <Actions workoutId={workout.id} />
        </Workout>
      ))}

      <PlannerForm />
    </ScheduledWorkoutsContainer>
  )
}

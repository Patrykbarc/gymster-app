import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { workoutsSelector } from '../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/actions'
import { Card } from '../../components/Card/Card'
import { Workout } from '../../components/Workouts/Workout/Workout'
import { WorkoutActions } from '../../components/Workouts/Workout/WorkoutActions/WorkoutActions'

const WorkoutsCard = styled(Card)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  height: fit-content;
`

const WorkoutsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`

export function SavedWorkouts() {
  const { workouts, status, error, user } = useAppSelector(workoutsSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWorkouts())
  }, [dispatch])

  if (status === 'failed') return <p>Error: {error}</p>
  if (!user) return

  return (
    workouts.length > 0 && (
      <WorkoutsCard>
        <h1 className="title">Your workouts</h1>
        {workouts.map((workout) => (
          <WorkoutsContainer key={workout.id}>
            <Link to={workout.id}>
              <Workout {...workout} />
            </Link>
            <WorkoutActions workoutId={workout.id} />
          </WorkoutsContainer>
        ))}
      </WorkoutsCard>
    )
  )
}

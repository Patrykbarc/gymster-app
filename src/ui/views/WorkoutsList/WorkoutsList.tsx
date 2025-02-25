import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { workoutsSelector } from '../../../utils/redux/selectors/workoutsSelector'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/actions/fetchWorkouts'
import { Card } from '../../components/Card/Card'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { Workout } from '../../components/Workouts/Workout/Workout'
import { WorkoutActions } from '../../components/Workouts/Workout/WorkoutActions/WorkoutActions'

const WorkoutsCard = styled(Card)`
  display: grid;
  gap: 0;
  height: fit-content;
`

const WorkoutsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray['100']};
  }
`

export function WorkoutsList() {
  const { workouts, status, error, user } = useAppSelector(workoutsSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWorkouts({}))
  }, [])

  if (status === 'failed') return <p>Error: {error}</p>
  if (!user) return

  return (
    workouts.length > 0 && (
      <WorkoutsCard>
        <FormTitle>Saved workouts</FormTitle>
        <div>
          {workouts.map((workout) => (
            <WorkoutsContainer key={workout.id}>
              <Link to={workout.id}>
                <Workout {...workout} />
              </Link>
              <WorkoutActions workoutId={workout.id} />
            </WorkoutsContainer>
          ))}
        </div>
      </WorkoutsCard>
    )
  )
}

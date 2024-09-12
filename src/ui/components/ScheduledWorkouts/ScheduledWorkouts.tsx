// ScheduledWorkouts.js
import { useEffect } from 'react'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../utils/hooks/useAppSelector'
import { selectScheduledWorkouts } from '../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkouts } from '../../../utils/redux/slices/workouts/workoutsSlice'
import { PlannerForm } from '../../views/PlannerForm/PlannerForm'
import { Modal } from '../Modal/Modal'
import { Actions } from './Workout/Actions/Actions'
import { Workout } from './Workout/Workout'

export function ScheduledWorkouts() {
  const dispatch = useAppDispatch()
  const { workouts, status, error, user } = useAppSelector(
    selectScheduledWorkouts
  )

  useEffect(() => {
    dispatch(fetchWorkouts())
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  if (!user) return

  return (
    <div>
      {workouts.map((workout) => (
        <Workout key={workout.id} {...workout}>
          <Actions workoutId={workout.id} />
        </Workout>
      ))}

      <Modal buttonText="Add new workout">
        <PlannerForm userId={user.id} />
      </Modal>
    </div>
  )
}

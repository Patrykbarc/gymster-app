import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { DialogContent } from '../../../../ui/components/Modals/_shared/DialogContent/DialogContent'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { workoutsSelector } from '../../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkout } from '../../../../utils/redux/slices/workouts/workoutsSlice'

export function Workout() {
  const { isDialogVisible, portalTarget, handleOpen, handleClose } = useDialog()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { status, error, selectedWorkout } = useAppSelector(workoutsSelector)

  useEffect(() => {
    if (id) {
      handleOpen()
      dispatch(fetchWorkout(id))
    }
  }, [id])

  function handleCloseDialog() {
    handleClose()
    navigate('/workout')
  }

  if (!isDialogVisible) return
  console.log(selectedWorkout)
  return createPortal(
    <DialogContent onClose={handleCloseDialog}>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {selectedWorkout && status === 'succeeded' ? (
        <div>
          <h2>{selectedWorkout.workout_name}</h2>
          <p>Date: {selectedWorkout.workout_date}</p>
        </div>
      ) : (
        <p>Workout not found</p>
      )}
    </DialogContent>,
    portalTarget
  )
}

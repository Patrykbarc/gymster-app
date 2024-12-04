import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { DialogContent } from '../../../../ui/components/Modals/_shared/DialogContent/DialogContent'
import { DialogDescription } from '../../../../ui/components/Modals/_shared/DialogContent/DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader } from '../../../../ui/components/Modals/_shared/DialogContent/DialogHeader/DialogHeader'
import { DialogTitle } from '../../../../ui/components/Modals/_shared/DialogContent/DialogHeader/DialogTitle/DialogTitle'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { workoutsSelector } from '../../../../utils/redux/selectors/workoutsSelector'
import { fetchWorkouts } from '../../../../utils/redux/slices/workouts/actions/fetchWorkouts'
import { ExercisesList } from './ExercisesList/ExercisesList'

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
  max-height: 800px;

  padding-right: ${({ theme }) => theme.spacing.lg};
  padding-block: ${({ theme }) => theme.spacing.xl};
`

export function Workout() {
  const { isDialogVisible, portalTarget, handleOpen, handleClose } = useDialog()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { error, selectedWorkout } = useAppSelector(workoutsSelector)
  const data = selectedWorkout?.data

  useEffect(() => {
    if (id) {
      handleOpen()
      dispatch(fetchWorkouts({ workoutId: id }))
    }
  }, [id, dispatch])

  function handleCloseDialog() {
    handleClose()
    const pathSegments = location.pathname.split('/')
    pathSegments.pop()
    const newPath = pathSegments.join('/')
    navigate(newPath)
  }

  if (!isDialogVisible) return

  return createPortal(
    <DialogContent onClose={handleCloseDialog}>
      {error && <p>Error: {error}</p>}
      {data ? (
        <>
          <DialogHeader>
            <DialogTitle>{data?.workout_name}</DialogTitle>
            <DialogDescription>{data?.workout_date}</DialogDescription>
          </DialogHeader>
          <Container>
            <ExercisesList exercises={data} />
          </Container>
        </>
      ) : (
        <p>Workout not found</p>
      )}
    </DialogContent>,
    portalTarget
  )
}

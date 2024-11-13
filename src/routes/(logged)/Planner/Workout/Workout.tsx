import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { DialogContent } from '../../../../ui/components/Modals/_shared/DialogContent/DialogContent'
import { Spinner } from '../../../../ui/components/Spinner/Spinner'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { workoutsSelector } from '../../../../utils/redux/selectors/scheduledWorkouts'
import { fetchWorkout } from '../../../../utils/redux/slices/workouts/actions'
import { ExercisesList } from './ExercisesList/ExercisesList'

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`

const Header = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`

export function Workout() {
  const { isDialogVisible, portalTarget, handleOpen, handleClose } = useDialog()
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { status, error, selectedWorkout } = useAppSelector(workoutsSelector)
  const data = selectedWorkout?.data
  console.log(data)
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

  return createPortal(
    <DialogContent onClose={handleCloseDialog}>
      {status === 'loading' && <Spinner />}
      {error && <p>Error: {error}</p>}

      {data && status === 'succeeded' ? (
        <Container>
          <Header>
            <h1>{data?.workout_name}</h1>
            <p>Date: {data?.workout_date}</p>
          </Header>
          <ExercisesList exercises={data} />
        </Container>
      ) : (
        <p>Workout not found</p>
      )}
    </DialogContent>,
    portalTarget
  )
}

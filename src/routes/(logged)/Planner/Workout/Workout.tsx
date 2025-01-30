import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../../../ui/components/Button/Button'
import { Flex } from '../../../../ui/components/Flex/Flex'
import { DialogBody } from '../../../../ui/components/Modals/_shared/DialogContent/DialogBody/DialogBody'
import { DialogContent } from '../../../../ui/components/Modals/_shared/DialogContent/DialogContent'
import { DialogFooter } from '../../../../ui/components/Modals/_shared/DialogContent/DialogFooter/DialogFooter'
import { DialogDescription } from '../../../../ui/components/Modals/_shared/DialogContent/DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader } from '../../../../ui/components/Modals/_shared/DialogContent/DialogHeader/DialogHeader'
import { DialogTitle } from '../../../../ui/components/Modals/_shared/DialogContent/DialogHeader/DialogTitle/DialogTitle'
import { Switch } from '../../../../ui/components/Switch/Switch'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { useFindParam } from '../../../../utils/hooks/useFindParam'
import { workoutsSelector } from '../../../../utils/redux/selectors/workoutsSelector'
import { fetchWorkouts } from '../../../../utils/redux/slices/workouts/actions/fetchWorkouts'
import { ExercisesList } from './ExercisesList/ExercisesList'

export function Workout() {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDialogVisible, portalTarget, handleOpen, handleCloseDialog } =
    useDialog()
  const { error, selectedWorkout, status } = useAppSelector(workoutsSelector)

  const data = selectedWorkout?.data
  const isEditParamSet = useFindParam({ param: 'e', value: '1' }, [
    location.search,
  ])

  useEffect(() => {
    if (id) {
      handleOpen()
      dispatch(fetchWorkouts({ workoutId: id }))
    }
  }, [id, dispatch])

  if (!isDialogVisible) return

  return createPortal(
    <DialogContent onClose={handleCloseDialog}>
      {error && <p>Error: {error}</p>}
      {data ? (
        <>
          <DialogHeader>
            <Flex $align="start" $justify="space-between">
              <Flex $direction="column" $gap="0.5rem">
                <DialogTitle>{data?.workout_name}</DialogTitle>
                <DialogDescription>{data?.workout_date}</DialogDescription>
              </Flex>
              <Switch
                $label="Edit"
                $checked={isEditParamSet}
                onChange={() => {
                  navigate(`?e=${isEditParamSet ? 0 : 1}`, {
                    replace: true,
                  })
                }}
              />
            </Flex>
          </DialogHeader>
          <DialogBody>
            <ExercisesList exercises={data} />
          </DialogBody>

          {isEditParamSet && (
            <DialogFooter>
              <Button disabled={status === 'loading'} form="workout-form">
                Save
              </Button>
            </DialogFooter>
          )}
        </>
      ) : (
        <p>Workout not found</p>
      )}
    </DialogContent>,
    portalTarget
  )
}

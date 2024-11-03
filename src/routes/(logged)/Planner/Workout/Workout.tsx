import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { DialogContent } from '../../../../ui/components/Modals/_shared/DialogContent/DialogContent'
import { useDialog } from '../../../../utils/hooks/useDialog'

export function Workout() {
  const { isDialogVisible, portalTarget, handleOpen, handleClose } = useDialog()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      handleOpen()
    }
  }, [id])

  function handleCloseDialog() {
    handleClose()
    navigate('/workout')
  }

  return createPortal(
    isDialogVisible && (
      <DialogContent onClose={handleCloseDialog}>
        <p>Workout id: {id}</p>
      </DialogContent>
    ),
    portalTarget
  )
}

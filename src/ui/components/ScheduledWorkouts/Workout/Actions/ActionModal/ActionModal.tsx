import { Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { usePortal } from '../../../../../../utils/hooks/usePortal'
import { Button } from '../../../../Button/Button'
import { Form } from '../../../../Form/Form/Form'
import { ModalBody } from '../../../../Modal/ModalBody/ModalBody'

type ActionModalProps = {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
  workoutId: string
}

const ActionModalContainer = styled(Form)`
  display: flex;
`

export function ActionModal({
  isModalVisible,
  setIsModalVisible,
}: ActionModalProps) {
  const { handleSubmit } = useForm()
  const portalTarget = usePortal()

  async function handleWorkoutDelete() {}

  return (
    isModalVisible &&
    createPortal(
      <ModalBody onClose={() => setIsModalVisible(false)}>
        <ActionModalContainer>
          <Button $variant="danger" onClick={handleSubmit(handleWorkoutDelete)}>
            Accept
          </Button>
          <Button $variant="outline">Cancel</Button>
        </ActionModalContainer>
      </ModalBody>,
      portalTarget
    )
  )
}

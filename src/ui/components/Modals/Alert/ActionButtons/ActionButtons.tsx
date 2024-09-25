import styled from 'styled-components'
import { Button } from '../../../Button/Button'

type ActionButtonsProps = {
  onClose: () => void
  onAccept: () => void
}

const ActionButtonsContainer = styled.form`
  display: flex;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing.md};
`

export function ActionButtons({ onClose, onAccept }: ActionButtonsProps) {
  return (
    <ActionButtonsContainer>
      <Button $variant="outline" onClick={onClose}>
        Cancel
      </Button>
      <Button $variant="danger" onClick={onAccept}>
        Accept
      </Button>
    </ActionButtonsContainer>
  )
}

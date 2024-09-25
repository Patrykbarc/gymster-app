import { X } from 'lucide-react'
import styled from 'styled-components'

type CloseDialogProps = {
  onClose: () => void
}

const StyledCloseDialog = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.2rem 0.2rem 0 0;
  scale: 70%;
  font-size: 2em;
  cursor: pointer;
`

export function CloseDialog({ onClose }: CloseDialogProps) {
  function handleOnClose() {
    const confirmed = confirm('Are you sure? This action cannot be undone')
    if (confirmed) {
      onClose()
    }
  }

  return (
    <StyledCloseDialog onClick={handleOnClose}>
      <X />
    </StyledCloseDialog>
  )
}

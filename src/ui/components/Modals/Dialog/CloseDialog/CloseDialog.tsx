import { X } from 'lucide-react'
import styled from 'styled-components'

type CloseDialogProps = {
  onClose: () => void
}

const StyledCloseDialog = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem 1rem 0 0;
  scale: 90%;
  font-size: 2em;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
  }
`

export function CloseDialog({ onClose }: CloseDialogProps) {
  return (
    <StyledCloseDialog onClick={onClose}>
      <X />
    </StyledCloseDialog>
  )
}

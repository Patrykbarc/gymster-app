import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledDialogFooter = styled.div`
  flex-shrink: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray['200']};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`

export function DialogFooter({ children }: { children: ReactNode }) {
  return <StyledDialogFooter>{children}</StyledDialogFooter>
}

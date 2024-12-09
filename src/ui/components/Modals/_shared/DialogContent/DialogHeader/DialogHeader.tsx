import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledDialogHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};

  flex-shrink: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['200']};
  padding: ${({ theme }) => theme.spacing.md};
`

export function DialogHeader({ children }: { children: ReactNode }) {
  return <StyledDialogHeader>{children}</StyledDialogHeader>
}

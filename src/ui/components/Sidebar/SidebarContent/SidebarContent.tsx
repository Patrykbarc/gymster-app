import { ReactNode } from 'react'
import styled from 'styled-components'

type SidebarContentProps = {
  children: ReactNode
}

const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

export function SidebarContent({ children }: SidebarContentProps) {
  return <SidebarContentContainer>{children}</SidebarContentContainer>
}

import { ReactNode } from 'react'
import styled from 'styled-components'

type IconProps = {
  children: ReactNode
  onClick?: () => void
}

const IconWrapper = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export function Icon({ children, onClick }: IconProps) {
  return <IconWrapper onClick={onClick}>{children}</IconWrapper>
}

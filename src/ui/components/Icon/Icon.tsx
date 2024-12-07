import { ReactNode } from 'react'
import styled from 'styled-components'

type IconProps = {
  children: ReactNode
  onClick?: () => void
}

const IconWrapper = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray['300']};
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export function Icon({ children, onClick }: IconProps) {
  return <IconWrapper onClick={onClick}>{children}</IconWrapper>
}

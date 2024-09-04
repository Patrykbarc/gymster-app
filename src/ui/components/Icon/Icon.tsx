import { ReactNode } from 'react'
import styled from 'styled-components'

type IconProps = {
  children: ReactNode
  onClick?: () => void
}

const IconWrapper = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.medium};

  &:disabled {
    cursor: not-allowed;
  }
`

export function Icon({ children, onClick }: IconProps) {
  return (
    <IconWrapper onClick={() => console.log('asda')}>{children}</IconWrapper>
  )
}

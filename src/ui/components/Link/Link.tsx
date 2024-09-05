import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type AlignProps = 'start' | 'center' | 'end'

type LinkProps = {
  to: string
  children: ReactNode
  $textAlign?: AlignProps
}

export const LinkContainer = styled(NavLink)<{ $textAlign: AlignProps }>`
  text-align: ${({ $textAlign }) => $textAlign ?? 'start'};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.65;
  }
`

export function Link({ to, children, $textAlign = 'start' }: LinkProps) {
  return (
    <LinkContainer to={to} $textAlign={$textAlign}>
      {children}
    </LinkContainer>
  )
}

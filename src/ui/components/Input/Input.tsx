import { Property } from 'csstype'
import styled from 'styled-components'

type InputProps = {
  $isError?: boolean
  $width?: Property.Height
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 2.5rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  border-color: ${({ theme, $isError }) =>
    $isError ? theme.colors.danger : theme.colors.secondary};
`

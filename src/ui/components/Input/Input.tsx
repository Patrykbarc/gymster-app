import { Property } from 'csstype'
import styled from 'styled-components'

export type InputProps = {
  $isError?: boolean
  $width?: Property.Width
}

export const Input = styled.input<InputProps>`
  width: ${({ $width = '100%' }) => $width};
  height: 2.5rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};

  border: 1px solid;
  border-color: ${({ theme, $isError }) =>
    $isError ? theme.colors.danger : theme.colors.secondary};

  transition:
    border-color 0.2s ease,
    outline 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray['500']};
  }
  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.gray['500']};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.light};
  }
`

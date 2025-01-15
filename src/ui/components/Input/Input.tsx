import { Property } from 'csstype'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../utils/hooks/useTheme'

export type InputProps = {
  $width?: Property.Width
  $isError?: boolean
  $isDarkMode?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const StyledInput = styled.input<InputProps>`
  width: ${({ $width = '100%' }) => $width};
  height: 2.5rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};

  background-color: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.gray['200'] : theme.colors.gray['50']};
  color: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.gray['800'] : theme.colors.gray['500']};
  &::placeholder {
    color: ${({ theme, $isDarkMode }) =>
      $isDarkMode ? theme.colors.gray['400'] : theme.colors.gray['300']};
  }
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  border: 1px solid;
  border-color: ${({ theme, $isError }) =>
    $isError ? theme.colors.danger : theme.colors.gray['300']};

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
    background-color: ${({ theme }) => theme.colors.gray['100']};
  }
`

export function Input({ ...props }: InputProps) {
  const { isDarkMode } = useTheme()

  return <StyledInput $isDarkMode={isDarkMode} {...props} />
}

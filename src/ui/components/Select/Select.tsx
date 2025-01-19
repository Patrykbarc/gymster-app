import { SelectHTMLAttributes } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../utils/hooks/useTheme'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[]
}

const StyledSelect = styled.select<{ $isDarkMode?: boolean }>`
  width: 100%;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.gray['200'] : theme.colors.gray['50']};
  color: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.gray['800'] : theme.colors.gray['500']};
  border: 1px solid
    ${({ theme, $isDarkMode }) =>
      $isDarkMode ? theme.colors.gray['400'] : theme.colors.gray['300']};
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray['500']};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray['100']};
  }
`

const Option = styled.option<{ $isDarkMode?: boolean }>`
  color: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.gray['800'] : theme.colors.gray['500']};
`

export function Select({ options, ...props }: SelectProps) {
  const { isDarkMode } = useTheme()
  return (
    <StyledSelect $isDarkMode={isDarkMode} {...props}>
      {options.map((option, index) => (
        <Option key={index} $isDarkMode={isDarkMode} value={option}>
          {option}
        </Option>
      ))}
    </StyledSelect>
  )
}

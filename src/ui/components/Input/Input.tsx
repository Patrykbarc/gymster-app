import styled from 'styled-components'

type InputProps = {
  $isError?: boolean
}

export const Input = styled.input<InputProps>`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  border-color: ${({ theme, $isError }) =>
    $isError ? theme.colors.danger : theme.colors.secondary};
`

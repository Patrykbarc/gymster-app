import styled from 'styled-components'

type FieldErrorProps = {
  $marginBlock?: boolean
}

export const FieldError = styled.p<FieldErrorProps>`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-block: ${({ theme, $marginBlock }) =>
    $marginBlock && theme.spacing.sm};
`

import styled from 'styled-components'

export const FieldError = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  margin-block: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

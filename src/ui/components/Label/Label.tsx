import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`

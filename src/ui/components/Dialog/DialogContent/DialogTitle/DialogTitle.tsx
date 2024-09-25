import styled from 'styled-components'

export const DialogTitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`

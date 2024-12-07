import styled from 'styled-components'

export const DialogTitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`

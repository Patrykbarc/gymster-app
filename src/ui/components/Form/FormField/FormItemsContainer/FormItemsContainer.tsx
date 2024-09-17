import styled from 'styled-components'

export const FormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`

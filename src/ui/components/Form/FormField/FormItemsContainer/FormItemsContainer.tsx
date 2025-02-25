import styled from 'styled-components'

export const FormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

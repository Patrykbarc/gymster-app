import styled from 'styled-components'

export const ModalContent = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.large};
`

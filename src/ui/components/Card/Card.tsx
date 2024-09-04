import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;

  gap: ${({ theme }) => theme.spacing.large};

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.small};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  }
`

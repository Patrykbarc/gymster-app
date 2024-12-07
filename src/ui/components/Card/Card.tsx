import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;

  background-color: ${({ theme }) => theme.colors.gray['50']};

  gap: ${({ theme }) => theme.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.gray['300']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};

  .title {
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  }
`

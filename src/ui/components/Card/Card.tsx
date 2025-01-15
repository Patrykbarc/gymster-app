import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;

  background-color: ${({ theme }) => theme.colors.gray['100']};

  gap: ${({ theme }) => theme.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.gray['300']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};

  color: ${({ theme }) => theme.colors.gray['700']};

  .title {
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`

import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;

  gap: ${({ theme }) => theme.spacing.lg};

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xxl};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  }
`

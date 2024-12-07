import styled from 'styled-components'

export const WorkoutContainer = styled.div`
  width: 100%;

  border-top: 2px solid ${({ theme }) => theme.colors.gray['100']};
  padding-block: ${({ theme }) => theme.spacing.md};
  padding-inline: ${({ theme }) => theme.spacing.lg};

  transition: background-color ${({ theme }) => theme.transitions.quick};

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

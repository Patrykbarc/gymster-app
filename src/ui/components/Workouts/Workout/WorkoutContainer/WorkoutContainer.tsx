import styled from 'styled-components'

export const WorkoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
  padding-block: ${({ theme }) => theme.spacing.medium};
  padding-inline: ${({ theme }) => theme.spacing.large};

  transition: background-color ${({ theme }) => theme.transitions.quick};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

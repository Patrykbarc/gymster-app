import styled from 'styled-components'

export const WorkoutFormContainer = styled.div`
  display: grid;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};

  .form-main-info {
    display: grid;
    gap: ${({ theme }) => theme.spacing.small};
    grid-template-columns: repeat(2, 1fr);
  }

  .form-fields {
    display: grid;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  .form-workouts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
  }

  &:first-of-type {
    max-width: 600px;
  }
`

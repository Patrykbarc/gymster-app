import styled from 'styled-components'

export const WorkoutFormContainer = styled.div`
  display: grid;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xxl};

  .form-main-info {
    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};
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
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};

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

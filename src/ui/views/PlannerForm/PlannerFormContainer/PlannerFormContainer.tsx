import styled from 'styled-components'

export const PlannerFormContainer = styled.div`
  display: grid;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};

  .form-fields {
    display: grid;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  .form-workouts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.small};
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
  }
`

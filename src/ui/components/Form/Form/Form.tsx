import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 25rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`

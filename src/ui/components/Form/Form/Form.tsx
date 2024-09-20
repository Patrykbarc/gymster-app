import styled from 'styled-components'

type FormProps = {
  $maxWidth?: string
}

export const Form = styled.form<FormProps>`
  display: grid;
  gap: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}`};
`

import styled from 'styled-components'

export const FormTitle = styled.h1`
  ${({ theme }) => theme.typography.headings.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

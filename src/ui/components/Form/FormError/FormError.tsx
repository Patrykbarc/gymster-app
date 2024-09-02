import styled from 'styled-components'

type FormErrorProps = { error: string | undefined }

const Error = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export function FormError({ error }: FormErrorProps) {
  return error && <Error>{error}</Error>
}

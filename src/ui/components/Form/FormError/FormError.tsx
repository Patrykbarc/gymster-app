import styled from 'styled-components'

export type TextPosition = 'left' | 'center' | 'right'

type FormErrorProps = {
  error: string | undefined
  $errorPosition?: TextPosition
}

const Error = styled.p<{ $errorPosition?: TextPosition }>`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: ${({ $errorPosition }) => $errorPosition};
`

export function FormError({ error, $errorPosition }: FormErrorProps) {
  return error && <Error $errorPosition={$errorPosition}>{error}</Error>
}

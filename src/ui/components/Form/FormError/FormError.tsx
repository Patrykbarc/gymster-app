import styled from 'styled-components'

export type TextPosition = 'left' | 'center' | 'right'

type FormErrorProps = {
  error: string | undefined
  $errorPosition?: TextPosition
}

const Error = styled.p<{ $errorPosition?: TextPosition }>`
  color: ${({ theme }) => theme.colors.danger['500']};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  text-align: ${({ $errorPosition }) => $errorPosition};
`

export function FormError({ error, $errorPosition }: FormErrorProps) {
  return error && <Error $errorPosition={$errorPosition}>{error}</Error>
}

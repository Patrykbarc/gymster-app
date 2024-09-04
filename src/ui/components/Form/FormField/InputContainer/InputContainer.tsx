import styled from 'styled-components'

export type InputVariant = 'horizontal' | 'vertical'

export const InputContainer = styled.div<{ $direction: InputVariant }>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ $direction }) => $direction === 'horizontal' && 'center'};
  gap: ${({ theme }) => theme.spacing.medium};

  label {
    width: ${({ $direction }) => $direction && '6rem'};
    word-break: break-all;
  }
`

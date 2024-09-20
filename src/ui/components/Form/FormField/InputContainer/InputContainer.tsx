import styled from 'styled-components'

export type InputVariant = 'horizontal' | 'vertical'

export const InputContainer = styled.div<{ $direction: InputVariant }>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ $direction }) => $direction === 'horizontal' && 'center'};

  label {
    width: ${({ $direction }) => $direction && '6rem'};
    margin-bottom: ${({ $direction, theme }) =>
      $direction === 'vertical' && theme.spacing.sm};
    word-break: break-all;
  }
`

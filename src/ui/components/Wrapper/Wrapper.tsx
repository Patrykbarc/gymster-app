import { Property } from 'csstype'
import styled from 'styled-components'

type WrapperProps = {
  $height?: Property.Height
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  max-width: 1250px;
  height: ${({ $height }) => $height ?? 'auto'};

  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

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

  margin: auto;
  max-width: 1150px;
  height: ${({ $height }) => $height ?? 'auto'};
  padding: ${({ theme }) => theme.spacing.xl};
`

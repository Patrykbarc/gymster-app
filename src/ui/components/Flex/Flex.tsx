import { Property } from 'csstype'
import styled from 'styled-components'

type FlexProps = {
  $justify?: Property.JustifyContent
  $align?: Property.AlignItems
  $direction?: Property.FlexDirection
  $gap?: Property.Gap
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'normal'};
  align-items: ${({ $align }) => $align || 'normal'};
  gap: ${({ $gap }) => $gap || '0'};
`

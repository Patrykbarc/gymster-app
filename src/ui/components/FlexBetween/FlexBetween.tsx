import { Property } from 'csstype'
import styled from 'styled-components'

type Flex = Property.JustifyContent

export const Flex = styled.div<{ $justify: Flex }>`
  display: flex;
  justify-content: ${({ $justify }) => $justify && 'normal'};
`

import { Property } from 'csstype'
import styled from 'styled-components'

type LabelProps = {
  $cursor?: Property.Cursor
}

export const Label = styled.label<LabelProps>`
  display: block;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  cursor: ${({ $cursor }) => $cursor || 'pointer'};
`

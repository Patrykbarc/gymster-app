import { SquarePen, Trash2Icon } from 'lucide-react'
import styled from 'styled-components'
import { Icon } from '../../../Icon/Icon'

const ActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

export function Actions() {
  return (
    <ActionsContainer>
      <Icon>
        <SquarePen />
      </Icon>
      <Icon>
        <Trash2Icon />
      </Icon>
    </ActionsContainer>
  )
}

import { Trash2Icon } from 'lucide-react'
import styled from 'styled-components'
import { Icon } from '../../Icon/Icon'

const WorkoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
  padding-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

export function Workout() {
  return (
    <WorkoutContainer>
      <div>
        <h3>June 15, 2023</h3>
        <h2>Upper Body Strength</h2>
      </div>

      <Icon>
        <Trash2Icon />
      </Icon>
    </WorkoutContainer>
  )
}

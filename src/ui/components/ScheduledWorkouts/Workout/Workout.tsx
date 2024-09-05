import styled from 'styled-components'
import { Link } from '../../Link/Link'
import { Actions } from './Actions/Actions'

type WorkoutProps = {
  name: string
  date: string
}

const WorkoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
  padding-block: ${({ theme }) => theme.spacing.medium};
  padding-inline: ${({ theme }) => theme.spacing.large};

  transition: background-color ${({ theme }) => theme.transitions.quick};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

export function Workout({ name, date }: WorkoutProps) {
  return (
    <WorkoutContainer>
      <div>
        <Link to="workout-id">
          <h3>{name}</h3>
        </Link>
        <h2>{date}</h2>
      </div>
      <Actions />
    </WorkoutContainer>
  )
}

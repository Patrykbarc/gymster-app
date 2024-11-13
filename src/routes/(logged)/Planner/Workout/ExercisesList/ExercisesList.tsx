import { Fragment } from 'react/jsx-runtime'
import styled from 'styled-components'
import { WorkoutData } from '../../../../../api/plannerData/handleGetWorkout'

type ExercisesListProps = {
  exercises: WorkoutData['data']
}

const Title = styled.p`
  ${({ theme }) => theme.typography.headings.h3};
`

export function ExercisesList({ exercises }: ExercisesListProps) {
  return exercises?.exercises.map((e) => (
    <Fragment key={e.id}>
      <Title>{e.name}</Title>
      <ul key={e.id}>
        {e.sets.map((s, index) => (
          <li key={s.id}>
            set: {index + 1} | reps: {s.reps} | weight: {s.weight}
          </li>
        ))}
      </ul>
    </Fragment>
  ))
}

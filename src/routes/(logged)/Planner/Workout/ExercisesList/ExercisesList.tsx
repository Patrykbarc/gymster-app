import styled from 'styled-components'
import { WorkoutData } from '../../../../../api/plannerData/handleGetWorkout'
import { EditWorkout } from '../../../../../ui/views/EditWorkout/EditWorkout'
import { useFindParam } from '../../../../../utils/hooks/useFindParam'

export type ExercisesListProps = {
  exercises: WorkoutData['data']
}

const UlContainer = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const Title = styled.p`
  ${({ theme }) => theme.typography.headings.h4};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export function ExercisesList({ exercises }: ExercisesListProps) {
  const isEditParamSet = useFindParam({ param: 'e', value: '1' }, [
    location.search,
  ])

  if (isEditParamSet) {
    return exercises && <EditWorkout exercises={exercises} />
  }

  return (
    <>
      {exercises?.exercises.map((e, index) => (
        <div key={e.id}>
          <Title>
            {index + 1}. {e.name}
          </Title>

          <UlContainer>
            {e.sets.map((s, index) => (
              <li key={s.id}>
                Set: {index + 1} | Reps: {s.reps} | Weight: {s.weight}
              </li>
            ))}
          </UlContainer>
        </div>
      ))}
    </>
  )
}

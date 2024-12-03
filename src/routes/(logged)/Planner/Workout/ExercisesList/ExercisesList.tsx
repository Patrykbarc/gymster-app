import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { WorkoutData } from '../../../../../api/plannerData/handleGetWorkout'
import { EditWorkout } from '../../../../../ui/views/EditWorkout/EditWorkout'

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
  const [isEditSet, setIsEditSet] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const isEditParamSet = params.get('edit') === 'true'
    setIsEditSet(isEditParamSet)
  }, [location.search])

  if (isEditSet) {
    return exercises && <EditWorkout exercises={exercises} />
  }

  return (
    <>
      {exercises?.exercises.map((e) => (
        <div key={e.id}>
          <Title>{e.name}</Title>

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

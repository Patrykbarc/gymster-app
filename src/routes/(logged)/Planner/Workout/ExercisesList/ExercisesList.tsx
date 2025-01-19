import styled from 'styled-components'
import { WorkoutData } from '../../../../../api/plannerData/handleGetWorkout'
import { EditWorkout } from '../../../../../ui/views/EditWorkout/EditWorkout'
import { useFindParam } from '../../../../../utils/hooks/useFindParam'

export type ExercisesListProps = {
  exercises: WorkoutData['data']
}

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`

const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
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

  return exercises?.exercises.map((e, index) => (
    <div key={e.id}>
      <Title>
        {index + 1}. {e.name}
      </Title>

      <TableContainer>
        <thead>
          <tr>
            <TableHeader>Set</TableHeader>
            <TableHeader>Reps</TableHeader>
            <TableHeader>Weight</TableHeader>
          </tr>
        </thead>
        <tbody>
          {e.sets.map((s, index) => (
            <tr key={s.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{s.reps}</TableCell>
              <TableCell>{s.weight}</TableCell>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </div>
  ))
}

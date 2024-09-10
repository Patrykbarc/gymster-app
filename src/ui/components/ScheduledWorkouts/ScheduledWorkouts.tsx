import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { Database } from '../../../types/database.types'
import { usePortal } from '../../../utils/hooks/usePortal'
import { useSession } from '../../../utils/hooks/useSession'
import { PlannerForm } from '../../views/PlannerForm/PlannerForm'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { FormTitle } from '../Form/FormTitle/FormTitle'
import { Modal } from '../Modal/Modal'
import { Workout } from './Workout/Workout'

export const ScheduledWorkoutsContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`

export type Workout = Database['public']['Tables']['planned_workouts']['Row']

export function ScheduledWorkouts() {
  const workouts = useLoaderData() as Workout[]
  const [isPlannerFormVisible, setIsPlannerFormVisible] = useState(false)
  const portalTarget = usePortal()
  const { session } = useSession()

  function handlePlannerClose() {
    setIsPlannerFormVisible(false)
  }

  return (
    <>
      <Card>
        <FormTitle>Scheduled Workouts</FormTitle>
        <ScheduledWorkoutsContainer>
          {workouts.map((w: Workout) => (
            <Workout key={w.id} name={w.workout_name} date={w.workout_date} id={w.id} />
          ))}
        </ScheduledWorkoutsContainer>
        <Button onClick={() => setIsPlannerFormVisible(true)}>
          Add new workout
        </Button>
      </Card>

      {isPlannerFormVisible &&
        createPortal(
          <Modal onClose={handlePlannerClose}>
            <PlannerForm userId={session?.id} />
          </Modal>,
          portalTarget
        )}
    </>
  )
}

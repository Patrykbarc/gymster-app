import { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
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

const WORKOUTS_PLACEHOLDER = [
  {
    name: 'Upper Body Strength',
    date: 'June 15, 2023',
  },
  { name: 'Arms training', date: 'June 17, 2023' },
  { name: 'Legs workout', date: 'June 19, 2023' },
]

export function ScheduledWorkouts() {
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
          {WORKOUTS_PLACEHOLDER.map((w) => (
            <Workout key={w.name} name={w.name} date={w.date} />
          ))}
        </ScheduledWorkoutsContainer>
        <Button onClick={() => setIsPlannerFormVisible(true)}>
          Add new workout
        </Button>
      </Card>

      {isPlannerFormVisible &&
        createPortal(
          <Modal onClose={handlePlannerClose}>
            <PlannerForm userId={session.id} />
          </Modal>,
          portalTarget
        )}
    </>
  )
}

import { Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { FieldArrayWithId, get, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorContext } from '../../../../../utils/providers/contexts/ErrorContext'
import { Button } from '../../../../components/Button/Button'
import { Dialog } from '../../../../components/Modals/Dialog/Dialog'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { Field } from '../../Field/Field'
import { FieldError } from '../../Field/FieldError/FieldError'

type ExericseFieldProps = {
  register: UseFormRegister<SubmitFormWorkout>
  exercise: {
    exerciseFields: FieldArrayWithId<SubmitFormWorkout, 'exercises', 'id'>[]
    exerciseIndex: number
    removeExercise: (index: number) => void
  }
}

const FieldsContainer = styled.div`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.md};
`

export function ExerciseField({
  register,
  exercise: { exerciseFields, exerciseIndex, removeExercise },
}: ExericseFieldProps) {
  const errors = useContext(ErrorContext)
  const exerciseError = get(errors, `exercises[${exerciseIndex}]`)
  const exerciseName = exerciseError?.name?.message

  return (
    <>
      <FieldsContainer>
        <Field
          label="Exercise name"
          placeholder="Bench press"
          register={register(`exercises.${exerciseIndex}.name`)}
          $isError={exerciseError}
        />

        <Button
          disabled={exerciseFields.length === 1}
          $variant="outline"
          onClick={() => removeExercise(exerciseIndex)}
        >
          <Trash2 />
        </Button>

        <Dialog
          buttonVariant="danger"
          disabled={exerciseFields.length === 1}
          buttonText={<Trash2 />}
        >
          <p>exercise fields modal</p>
        </Dialog>
      </FieldsContainer>

      <FieldError $marginBlock>{exerciseName}</FieldError>
    </>
  )
}

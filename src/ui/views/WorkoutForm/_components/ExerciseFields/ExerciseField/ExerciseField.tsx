import { Trash2Icon } from 'lucide-react'
import { useContext } from 'react'
import { FieldArrayWithId, get, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorContext } from '../../../../../../utils/providers/contexts/ErrorContext'
import { Alert } from '../../../../../components/Modals/Alert/Alert'
import { SubmitFormWorkout } from '../../../_types/SubmitFormWorkout'
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
  const exerciseNameError = exerciseError?.name?.message

  return (
    <div>
      <FieldsContainer>
        <Field
          label="Exercise name"
          placeholder="Bench press"
          register={register(`exercises.${exerciseIndex}.name`)}
          $isError={exerciseError}
        />

        <Alert
          actions={{ onAccept: () => removeExercise(exerciseIndex) }}
          disabled={exerciseFields.length === 1}
          buttonVariant="danger"
          buttonText={<Trash2Icon />}
        />
      </FieldsContainer>

      {exerciseNameError && (
        <FieldError $marginBlock>{exerciseNameError}</FieldError>
      )}
    </div>
  )
}

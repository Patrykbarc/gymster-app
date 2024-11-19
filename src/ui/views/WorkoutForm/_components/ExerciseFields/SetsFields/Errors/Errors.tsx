import { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import { get } from 'react-hook-form'
import styled from 'styled-components'
import { ErrorContext } from '../../../../../../../utils/providers/contexts/ErrorContext'
import { FieldError } from '../../../Field/FieldError/FieldError'

type ErrorsProps = {
  exerciseIndex: number
  setIndex: number
  setIsAnyErrorSet: Dispatch<SetStateAction<boolean>>
}

const ErrorsContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr 2fr 2fr 0fr;

  .reps-error {
    margin-left: 42px;
    margin-right: ${({ theme }) => theme.spacing.md};
    grid-column: 2/3;
  }

  .weight-error {
    grid-column: 3/4;
  }
`

export function Errors({
  exerciseIndex,
  setIndex,
  setIsAnyErrorSet,
}: ErrorsProps) {
  const errors = useContext(ErrorContext)

  const exercisesError = get(
    errors,
    `exercises[${exerciseIndex}].sets[${setIndex}]`
  )

  const exerciseRepsError = exercisesError?.reps?.message
  const exerciseWeightError = exercisesError?.weight?.message

  const isAnyErrorSet = exerciseRepsError || exerciseWeightError

  useEffect(
    () => setIsAnyErrorSet(isAnyErrorSet),
    [isAnyErrorSet, setIsAnyErrorSet]
  )

  return (
    isAnyErrorSet && (
      <ErrorsContainer>
        <FieldError className="reps-error truncate">
          {exerciseRepsError}
        </FieldError>
        <FieldError className="weight-error truncate">
          {exerciseWeightError}
        </FieldError>
      </ErrorsContainer>
    )
  )
}

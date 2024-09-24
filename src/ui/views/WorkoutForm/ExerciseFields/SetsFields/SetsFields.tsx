import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { Field } from '../../Field/Field'
import { Errors } from './Errors/Errors'
import { NewSetButton } from './NewSetButton/NewSetButton'
import { SetField } from './SetField/SetField'

type SetsFieldsProps = {
  control: Control<SubmitFormWorkout>
  register: UseFormRegister<SubmitFormWorkout>
  exerciseIndex: number
}

type FieldsContainerProps = {
  $isErrorSet: boolean
}

const Fieldset = styled.fieldset<FieldsContainerProps>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};

  .add-set-button {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr 2fr 2fr 0fr;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.md};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export function SetsFields({
  control,
  register,
  exerciseIndex,
}: SetsFieldsProps) {
  const [isAnyErrorSet, setIsAnyErrorSet] = useState(false)

  const {
    fields: setFields,
    append: appendSet,
    remove: removeSet,
  } = useFieldArray({
    control,
    name: `exercises.${exerciseIndex}.sets`,
  })

  return (
    <Fieldset $isErrorSet={isAnyErrorSet}>
      {setFields.map((setField, setIndex) => {
        const firstIndex = setIndex === 0

        return (
          <div key={setField.id}>
            <FieldsContainer>
              <SetField isFirstIndex={firstIndex} set={setIndex} />

              <Field
                label={firstIndex && 'Reps'}
                type="number"
                min={1}
                register={register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.reps`
                )}
              />

              <Field
                label={firstIndex && 'Weight'}
                type="number"
                min={1}
                register={register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.weight`
                )}
              />

              <Button
                type="button"
                $variant="outline"
                disabled={setFields.length === 1}
                onClick={() => removeSet(setIndex)}
              >
                <Trash2 />
              </Button>
            </FieldsContainer>

            <Errors
              exerciseIndex={exerciseIndex}
              setIndex={setIndex}
              setIsAnyErrorSet={setIsAnyErrorSet}
            />
          </div>
        )
      })}
      <div className="add-set-button">
        <NewSetButton appendSet={appendSet} setFields={setFields} />
      </div>
    </Fieldset>
  )
}

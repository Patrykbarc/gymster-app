import { Trash2 } from 'lucide-react'
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { Field } from '../../Field/Field'
import { SetField } from './SetField/SetField'

type SetsFieldsProps = {
  control: Control<SubmitFormWorkout>
  register: UseFormRegister<SubmitFormWorkout>
  exerciseIndex: number
}

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 2fr 2fr 0fr;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export function SetsFields({
  control,
  register,
  exerciseIndex,
}: SetsFieldsProps) {
  const {
    fields: setFields,
    append: appendSet,
    remove: removeSet,
  } = useFieldArray({
    control,
    name: `exercises.${exerciseIndex}.sets`,
  })

  return (
    <fieldset>
      {setFields.map((setField, setIndex) => {
        const firstIndex = setIndex === 0
        return (
          <FieldsContainer key={setField.id}>
            <SetField isFirstIndex={firstIndex} set={setIndex} />
            <Field
              label={firstIndex && 'Reps'}
              type="number"
              register={register(
                `exercises.${exerciseIndex}.sets.${setIndex}.reps`
              )}
            />

            <Field
              label={firstIndex && 'Weight'}
              type="number"
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
        )
      })}
      <Button
        type="button"
        $variant="outline"
        onClick={() =>
          appendSet({ set: setFields.length + 1, reps: 1, weight: 1 })
        }
      >
        Add set
      </Button>
    </fieldset>
  )
}

import { X as RemoveIcon } from 'lucide-react'
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import { Field } from '../../Field/Field'

type SetsFieldsProps = {
  control: Control<SubmitFormWorkout>
  register: UseFormRegister<SubmitFormWorkout>
  exerciseIndex: number
}

const FieldsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const InputFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  gap: inherit;
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
        return (
          <FieldsContainer className="test" key={setField.id}>
            <Field label="Set" value={setIndex + 1} disabled />

            <InputFieldsContainer>
              <Field
                label="Reps"
                type="number"
                register={register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.reps`
                )}
              />

              <Field
                label="Weight"
                type="number"
                register={register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.weight`
                )}
              />

              <Button
                type="button"
                disabled={setFields.length === 1}
                onClick={() => removeSet(setIndex)}
              >
                <RemoveIcon />
              </Button>
            </InputFieldsContainer>
          </FieldsContainer>
        )
      })}
      <Button
        type="button"
        onClick={() =>
          appendSet({ set: setFields.length + 1, reps: 1, weight: 1 })
        }
      >
        Add set
      </Button>
    </fieldset>
  )
}

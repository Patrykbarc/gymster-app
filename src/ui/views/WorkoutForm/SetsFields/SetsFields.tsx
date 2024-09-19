import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import { Input } from '../../../components/Input/Input'
import { Flex, SubmitFormWorkout } from '../WorkoutForm'

type SetsFieldsProps = {
  control: Control<SubmitFormWorkout>
  register: UseFormRegister<SubmitFormWorkout>
  exerciseIndex: number
}

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
          <Flex key={setField.id}>
            <div>
              <label>Set</label>
              <p>{setIndex + 1}</p>
            </div>

            <div>
              <label>Reps</label>
              <Input
                type="number"
                {...register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.reps`
                )}
              />
            </div>
            <div>
              <label>Weight</label>
              <Input
                type="number"
                {...register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.weight`
                )}
              />
            </div>

            <button
              type="button"
              disabled={setFields.length === 1}
              onClick={() => removeSet(setIndex)}
            >
              Remove set
            </button>
          </Flex>
        )
      })}
      <button
        type="button"
        onClick={() =>
          appendSet({ set: setFields.length + 1, reps: 1, weight: 1 })
        }
      >
        Add set
      </button>
    </fieldset>
  )
}

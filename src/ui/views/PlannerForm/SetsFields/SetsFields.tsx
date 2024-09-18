import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import { Flex, SubmitFormWorkout } from '../PlannerForm'

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
    <div>
      {setFields.map((setField, setIndex) => {
        return (
          <Flex key={setField.id}>
            <div>
              <label>Set</label>
              <p>{setIndex + 1}</p>
            </div>

            <div>
              <label>Reps</label>
              <input
                type="number"
                {...register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.reps`
                )}
              />
            </div>
            <div>
              <label>Weight</label>
              <input
                type="number"
                {...register(
                  `exercises.${exerciseIndex}.sets.${setIndex}.weight`
                )}
              />
            </div>

            <button
              type="button"
              onClick={() => appendSet({ set: setIndex, reps: 1, weight: 1 })}
            >
              Add set
            </button>
            <button type="button" onClick={() => removeSet(setIndex)}>
              Remove set
            </button>
          </Flex>
        )
      })}
    </div>
  )
}

import { useFieldArray, useForm } from 'react-hook-form'
import { Fragment } from 'react/jsx-runtime'
import styled from 'styled-components'
import { PlannerFormContainer } from './PlannerFormContainer/PlannerFormContainer'
import { SetsFields } from './SetsFields/SetsFields'

export const Flex = styled.div`
  display: flex;
`

export type SubmitFormWorkout = {
  info: {
    workout: string
    workoutDate: string
  }
  exercises: {
    name: string
    sets: {
      set: number
      weight: number
      reps: number
    }[]
  }[]
}

export function PlannerForm() {
  const { control, handleSubmit, register } = useForm<SubmitFormWorkout>({
    defaultValues: {
      info: {
        workout: '',
        workoutDate: '',
      },
      exercises: [{ name: '', sets: [{ set: 1, weight: 1, reps: 1 }] }],
    },
  })

  const {
    fields: exerciseFields,
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({
    control,
    name: 'exercises',
  })

  const onSubmit = (data: SubmitFormWorkout) => {
    console.log(data)
  }

  logData(exerciseFields)

  return (
    <PlannerFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <div>
            <label>Workout Name</label>
            <input {...register('info.workout')} />
          </div>
          <div>
            <label>Workout Date</label>
            <input type="date" {...register('info.workoutDate')} />
          </div>
        </Flex>
        <br />
        {exerciseFields.map((field, exerciseIndex) => {
          return (
            <Fragment key={field.id}>
              <Flex>
                <div>
                  <label>Exercise name</label>
                  <input {...register(`exercises.${exerciseIndex}.name`)} />
                </div>
                <button onClick={() => removeExercise(exerciseIndex)}>x</button>
              </Flex>
              <br />
              <SetsFields
                control={control}
                register={register}
                exerciseIndex={exerciseIndex}
              />
            </Fragment>
          )
        })}

        <br />
        <button
          type="button"
          onClick={() =>
            appendExercise({ name: '', sets: [{ set: 1, weight: 1, reps: 1 }] })
          }
        >
          Add Exercise
        </button>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </PlannerFormContainer>
  )
}

function logData(data: any) {
  console.log(data)
}

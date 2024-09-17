import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { PLANNER_FORM_SCHEMA } from './helpers/planner-form-schema'
import { submitPlannerForm } from './helpers/submitPlannerForm'
import { PlannerFormContainer } from './PlannerFormContainer/PlannerFormContainer'
import { PlannerTitleAndDate } from './PlannerTitleAndDate/PlannerTitleAndDate'
import { RenderSetsFields } from './Sets/RenderSetsFields/RenderSetsFields'
import { Sets } from './Sets/Sets'

export type SubmitFormWorkout = {
  info: {
    workout: string
    workoutDate: string
  }
  sets: {
    set: number
    weight: number
    reps: number
  }[]
}

type PlannerFormProps = {
  userId: string
}

export function PlannerForm({ userId }: PlannerFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SubmitFormWorkout>({
    resolver: zodResolver(PLANNER_FORM_SCHEMA),
    mode: 'onBlur',
    defaultValues: {
      info: {
        workout: '',
        workoutDate: '',
      },
      sets: [{ set: 1, weight: 1, reps: 1 }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sets',
  })

  const dispatch = useAppDispatch()

  const onSubmit = (data: SubmitFormWorkout) => {
    submitPlannerForm({
      workout: data.info.workout,
      workoutDate: data.info.workoutDate,
      userId,
      sets: data.sets,
      dispatch,
    })
  }

  return (
    <PlannerFormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">
          <FormTitle>Workout Planner</FormTitle>
          <PlannerTitleAndDate errors={errors} register={register} />

          <Sets append={append} fields={fields}>
            <RenderSetsFields
              fields={fields}
              register={register}
              errors={errors}
              remove={remove}
            />
          </Sets>
        </div>
        <Button type="submit">Schedule workout</Button>
      </Form>
    </PlannerFormContainer>
  )
}

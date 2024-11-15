import { FieldValues } from 'react-hook-form'
import {
  ErrorProvider,
  ErrorProviderProps,
} from '../../../../utils/providers/ErrorProvider'
import {
  ExerciseFields,
  ExerciseFieldsProps,
} from '../ExerciseFields/ExerciseFields'
import { WorkoutInfo } from '../WorkoutInfo/WorkoutInfo'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'

type WorkoutFormBodyProps<T extends FieldValues> = ExerciseFieldsProps &
  Pick<ErrorProviderProps<T>, 'errors'>

export function WorkoutFormBody<T extends FieldValues>({
  errors,
  control,
  register,
}: WorkoutFormBodyProps<T>) {
  return (
    <ErrorProvider<SubmitFormWorkout> errors={errors}>
      <WorkoutInfo register={register} />
      <ExerciseFields control={control} register={register} />
    </ErrorProvider>
  )
}

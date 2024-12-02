import { FieldValues } from 'react-hook-form'
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector'
import {
  ErrorProvider,
  ErrorProviderProps,
} from '../../../../../utils/providers/ErrorProvider'
import { workoutsSelector } from '../../../../../utils/redux/selectors/workoutsSelector'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import {
  ExerciseFields,
  ExerciseFieldsProps,
} from '../ExerciseFields/ExerciseFields'
import { WorkoutInfo } from '../WorkoutInfo/WorkoutInfo'

type WorkoutFormBodyProps<T extends FieldValues> = ExerciseFieldsProps &
  Pick<ErrorProviderProps<T>, 'errors'>

export function WorkoutFormBody<T extends FieldValues>({
  errors,
  control,
  register,
}: WorkoutFormBodyProps<T>) {
  const { status } = useAppSelector(workoutsSelector)

  return (
    <ErrorProvider<SubmitFormWorkout> errors={errors}>
      <fieldset disabled={status === 'loading'}>
        <WorkoutInfo register={register} />
        <ExerciseFields control={control} register={register} status={status} />
      </fieldset>
    </ErrorProvider>
  )
}

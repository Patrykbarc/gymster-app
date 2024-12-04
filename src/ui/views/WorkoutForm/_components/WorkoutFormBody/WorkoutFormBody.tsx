import { FieldValues } from 'react-hook-form'
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector'
import {
  ErrorProvider,
  ErrorProviderProps,
} from '../../../../../utils/providers/ErrorProvider'
import { workoutsSelector } from '../../../../../utils/redux/selectors/workoutsSelector'
import { Button } from '../../../../components/Button/Button'
import { SubmitFormWorkout } from '../../_types/SubmitFormWorkout'
import {
  ExerciseFields,
  ExerciseFieldsProps,
} from '../ExerciseFields/ExerciseFields'
import { WorkoutInfo } from '../WorkoutInfo/WorkoutInfo'

type ErrorProps<T extends FieldValues> = Pick<ErrorProviderProps<T>, 'errors'>

type SaveButtonProps = {
  showSaveButton?: boolean
}

type WorkoutFormBodyProps<T extends FieldValues> = ExerciseFieldsProps &
  ErrorProps<T> &
  SaveButtonProps

export function WorkoutFormBody<T extends FieldValues>({
  errors,
  control,
  register,
  showSaveButton = true,
}: WorkoutFormBodyProps<T>) {
  const { status } = useAppSelector(workoutsSelector)

  return (
    <ErrorProvider<SubmitFormWorkout> errors={errors}>
      <fieldset disabled={status === 'loading'}>
        <WorkoutInfo register={register} />
        <ExerciseFields control={control} register={register}>
          {showSaveButton && <Button type="submit">Save</Button>}
        </ExerciseFields>
      </fieldset>
    </ErrorProvider>
  )
}

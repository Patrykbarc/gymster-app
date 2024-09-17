import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { renderField } from '../helpers/renderField'
import { SubmitFormWorkout } from '../PlannerForm'

type PlannerTitleAndDateProps = {
  errors: FieldErrors<SubmitFormWorkout>
  register: UseFormRegister<SubmitFormWorkout>
}

export function PlannerTitleAndDate({
  errors,
  register,
}: PlannerTitleAndDateProps) {
  return (
    <div className="form-main-info ">
      {renderField({
        id: 'info.workout',
        label: 'Workout',
        type: 'text',
        registerName: 'info.workout',
        error: errors.info?.workout?.message,
        register,
      })}
      {renderField({
        id: 'info.workoutDate',
        label: 'Date',
        type: 'date',
        registerName: 'info.workoutDate',
        error: errors.info?.workoutDate?.message,
        register,
      })}
    </div>
  )
}

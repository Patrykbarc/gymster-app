import { UseFormRegister } from 'react-hook-form'
import { FormField } from '../../../components/Form/FormField/FormField'
import { SubmitFormWorkout } from '../PlannerForm'

type RenderFieldProps = {
  id: string
  label: string
  type: string
  registerName: keyof SubmitFormWorkout['info'] | string
  error: string | undefined
  register: UseFormRegister<SubmitFormWorkout>
  props?: Record<string, any>
}

export function renderField({
  id,
  label,
  type,
  registerName,
  error,
  register,
  props,
}: RenderFieldProps) {
  return (
    <FormField
      label={label}
      id={id}
      type={type}
      register={{ ...register(registerName as any), ...props }}
      error={error}
      isError={!!error}
      $direction="horizontal"
      $errorPosition="right"
    />
  )
}

import { FormField } from '../../../../../components/Form/FormField/FormField'
import { RenderSetsFieldsProps } from '../RenderSetsFields'

type IdType =
  | `sets.${number}.set`
  | `sets.${number}.weight`
  | `sets.${number}.reps`

export function RenderField(
  id: IdType,
  type: string,
  error: string | undefined,
  register: RenderSetsFieldsProps['register']
) {
  return (
    <FormField
      id={id}
      type={type}
      register={register(id)}
      error={error}
      isError={!!error}
      $errorPosition="right"
      min={1}
    />
  )
}

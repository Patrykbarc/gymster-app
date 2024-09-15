import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Input } from '../../Input/Input'
import { FormError, TextPosition } from '../FormError/FormError'
import { FormItemsContainer } from './FormItemsContainer/FormItemsContainer'
import { InputContainer, InputVariant } from './InputContainer/InputContainer'

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  id: string
  error?: string
  isError: boolean
  $direction?: InputVariant
  $errorPosition?: TextPosition
  register: UseFormRegisterReturn
}

export function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  error,
  isError,
  $direction = 'vertical',
  $errorPosition = 'left',
  register,
  ...props
}: FormFieldProps) {
  return (
    <FormItemsContainer>
      <InputContainer $direction={$direction}>
        {label && <label htmlFor={id}>{label}</label>}
        <Input
          id={id}
          type={type}
          $isError={isError}
          placeholder={placeholder}
          {...register}
          {...props}
        />
      </InputContainer>
      {error && <FormError error={error} $errorPosition={$errorPosition} />}
    </FormItemsContainer>
  )
}

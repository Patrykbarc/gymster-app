import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Input } from '../../Input/Input'
import { FormError, TextPosition } from '../FormError/FormError'
import { FormItemsContainer } from './FormItemsContainer/FormItemsContainer'
import { InputContainer, InputVariant } from './InputContainer/InputContainer'

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  id: string
  inputProps: UseFormRegisterReturn
  error?: string
  isError: boolean
  $direction?: InputVariant
  $errorPosition?: TextPosition
}

export function FormField({
  label,
  id,
  inputProps,
  type = 'text',
  placeholder,
  error,
  isError,
  $direction = 'vertical',
  $errorPosition = 'left',
  ...props
}: FormFieldProps) {
  return (
    <FormItemsContainer>
      <InputContainer $direction={$direction}>
        <label htmlFor={id}>{label}</label>
        <Input
          id={id}
          type={type}
          {...inputProps}
          $isError={isError}
          placeholder={placeholder}
          {...props}
        />
      </InputContainer>
      {error && <FormError error={error} $errorPosition={$errorPosition} />}
    </FormItemsContainer>
  )
}

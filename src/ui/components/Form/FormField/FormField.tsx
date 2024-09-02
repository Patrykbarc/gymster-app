import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../../Input/Input'
import { FormError } from '../FormError/FormError'

type FormFieldProps = {
  label: string
  id: string
  inputProps: UseFormRegisterReturn
  type?: HTMLInputTypeAttribute
  placeholder?: string
  error?: string
  isError: boolean
}

export const FormItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`

export function FormField({
  label,
  id,
  inputProps,
  type = 'text',
  placeholder,
  error,
  isError,
}: FormFieldProps) {
  return (
    <FormItemsContainer>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type={type}
        {...inputProps}
        $isError={isError}
        placeholder={placeholder}
      />
      {error && <FormError error={error} />}
    </FormItemsContainer>
  )
}

import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../../../components/Input/Input'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  register?: UseFormRegisterReturn
}

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`

export function Field({ label, register, ...props }: FieldProps) {
  return (
    <div>
      <Label>{label}</Label>
      <Input {...props} {...register} />
    </div>
  )
}

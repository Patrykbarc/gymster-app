import { HTMLInputTypeAttribute } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../Input/Input'

type FieldsetProps = {
  id: string
  label: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  register?: UseFormRegister<FieldValues>
}

const FieldSetContainer = styled.fieldset`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  flex-direction: column;
`

export function Fieldset({
  id,
  label,
  placeholder,
  type = 'text',
  register,
}: FieldsetProps) {
  return (
    <FieldSetContainer>
      <label htmlFor={id}>{label}</label>
      <Input id={id} type={type} placeholder={placeholder} />
    </FieldSetContainer>
  )
}

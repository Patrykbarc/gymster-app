import { Property } from 'csstype'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../../../components/Input/Input'
import { Label } from '../../../components/Label/Label'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string | boolean
  register?: UseFormRegisterReturn
  $width?: Property.Width
}

const FieldContainer = styled.div<FieldProps>`
  width: 100%;
`

export function Field({ label, register, $width, ...props }: FieldProps) {
  return (
    <FieldContainer>
      {label && <Label>{label}</Label>}
      <Input {...props} {...register} />
    </FieldContainer>
  )
}

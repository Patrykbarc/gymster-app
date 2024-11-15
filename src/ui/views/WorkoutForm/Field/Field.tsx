import { InputHTMLAttributes, useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../../../components/Input/Input'
import { Label } from '../../../components/Label/Label'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string | boolean
  register?: UseFormRegisterReturn
  $isError?: boolean
}

const FieldContainer = styled.div<FieldProps>`
  width: 100%;
`

export function Field({ label, register, $isError, ...props }: FieldProps) {
  const id = useId()

  return (
    <FieldContainer>
      {label && <Label htmlFor={`${register?.name}-${id}`}>{label}</Label>}
      <Input
        $isError={$isError}
        id={`${register?.name}-${id}`}
        {...props}
        {...register}
      />
    </FieldContainer>
  )
}

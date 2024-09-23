import { ReactNode } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'
import { ErrorContext } from './contexts/ErrorContext'

type ErrorProviderProps<T extends FieldValues> = {
  errors: FieldErrors<T>
  children: ReactNode
}

export function ErrorProvider<T extends FieldValues>({
  children,
  errors,
}: ErrorProviderProps<T>) {
  return (
    <ErrorContext.Provider value={errors}>{children}</ErrorContext.Provider>
  )
}

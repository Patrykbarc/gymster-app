import { FieldErrors, FieldValues } from 'react-hook-form'
import { Children } from '../../types/Children'
import { ErrorContext } from './contexts/ErrorContext'

type ErrorProviderProps<T extends FieldValues> = Children & {
  errors: FieldErrors<T>
}

export function ErrorProvider<T extends FieldValues>({
  children,
  errors,
}: ErrorProviderProps<T>) {
  return (
    <ErrorContext.Provider value={errors}>{children}</ErrorContext.Provider>
  )
}

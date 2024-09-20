import { createContext } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

export const ErrorContext = createContext<FieldErrors<FieldValues> | null>(null)

export function createErrorContext<T extends FieldValues>() {
  return createContext<FieldErrors<T> | null>(null)
}

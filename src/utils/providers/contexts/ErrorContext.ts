import { createContext } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

export const ErrorContext = createContext<FieldErrors<FieldValues> | null>(null)

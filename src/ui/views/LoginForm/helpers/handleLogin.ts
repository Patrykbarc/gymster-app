import { UseFormSetError } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'
import { z } from 'zod'
import { supabase } from '../../../../api/supabase'
import { FORM_SCHEMA } from './form-schema'

type FormSchema = z.infer<typeof FORM_SCHEMA>

type HandleLoginArgs = {
  loginData: FormSchema
  setError: UseFormSetError<FormSchema>
  router: NavigateFunction
}

export async function handleLogin({
  loginData,
  setError,
  router,
}: HandleLoginArgs) {
  try {
    const { email, password } = FORM_SCHEMA.parse(loginData)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('root', {
        type: 'custom',
        message: error.message,
      })
      return
    }

    router('/dashboard')
  } catch (err) {
    setError('root', {
      type: 'custom',
      message: 'Unexpected error occurred during login.',
    })
  }
}

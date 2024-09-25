import { UseFormSetError } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'
import { z } from 'zod'
import { supabase } from '../../../../api/supabase'
import { REGISTER_SCHEMA } from './register-schema'

type FormSchema = z.infer<typeof REGISTER_SCHEMA>

type HandleRegisterArgs = {
  registerData: FormSchema
  setError: UseFormSetError<FormSchema>
  router: NavigateFunction
}

export async function handleRegister({
  registerData,
  setError,
  router,
}: HandleRegisterArgs) {
  try {
    const { email, password, firstName, lastName } = registerData

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })
    console.log(error, data)
    if (error) {
      setError('root', {
        type: 'custom',
        message: error.message,
      })
      return
    }

    router('/dashboard')
  } catch {
    setError('root', {
      type: 'custom',
      message: 'Unexpected error occurred during login.',
    })
  }
}

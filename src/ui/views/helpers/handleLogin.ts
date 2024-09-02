import bcrypt from 'bcryptjs'
import { UseFormSetError } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'
import { z } from 'zod'
import { supabase } from '../../../api/supabase'
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
  const { email, password } = FORM_SCHEMA.parse(loginData)

  try {
    const { data, error } = await supabase
      .from('users')
      .select('email, password_hash')
      .eq('email', email)
      .single()

    if (error || !data) {
      setError('root', {
        type: 'custom',
        message: 'Something wrong, please try again',
      })
      return
    }

    const emailMatch = email === data.email
    const passwordMatch = await bcrypt.compare(password, data.password_hash)

    if (!emailMatch || !passwordMatch) {
      setError('root', {
        type: 'custom',
        message: 'Incorrect email or password',
      })
      return
    }

    if (emailMatch) {
      router('/dashboard')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    setError('root', {
      type: 'custom',
      message: 'Unexpected error occurred. Please try again.',
    })
  }
}

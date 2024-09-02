import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../components/Button/Button'
import { Form } from '../components/Form/Form/Form'
import { FormError } from '../components/Form/FormError/FormError'
import { FormTitle } from '../components/Form/FormTitle/FormTitle'
import { Input } from '../components/Input/Input'
import { Wrapper } from '../components/Wrapper/Wrapper'
import { FORM_SCHEMA } from './helpers/form-schema'
import { handleLogin } from './helpers/handleLogin'

type FormData = z.infer<typeof FORM_SCHEMA>

export function LoginForm() {
  const router = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FORM_SCHEMA),
    defaultValues: { email: '', password: '' },
  })
  console.log(errors)

  async function submitForm({ email, password }: FormData) {
    handleLogin({ loginData: { email, password }, setError, router })
  }

  return (
    <Wrapper height="100dvh">
      <Form onSubmit={handleSubmit(submitForm)}>
        <FormTitle>Login to continue</FormTitle>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          {...register('email', {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
        />
        <FormError error={errors.email?.message} />
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          {...register('password', { required: 'Password is required' })}
        />

        <FormError error={errors.root?.message} />
        <Button type="submit" $variant="primary">
          Login
        </Button>
      </Form>
    </Wrapper>
  )
}

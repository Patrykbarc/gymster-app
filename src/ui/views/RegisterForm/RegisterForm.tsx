import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormError } from '../../components/Form/FormError/FormError'
import { FormField } from '../../components/Form/FormField/FormField'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { handleRegister } from './helpers/handleRegister'
import { REGISTER_SCHEMA } from './helpers/register-schema'

type FormData = z.infer<typeof REGISTER_SCHEMA>

export function RegisterForm() {
  const router = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(REGISTER_SCHEMA),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  function submitRegister(data: FormData) {
    handleRegister({ registerData: data, setError, router })
  }

  return (
    <Wrapper height="100dvh">
      <Form onSubmit={handleSubmit(submitRegister)}>
        <FormTitle>Join GymsterApp</FormTitle>

        <FormField
          label="First name"
          id="firstName"
          inputProps={register('firstName')}
          error={errors.firstName?.message}
          isError={!!errors.firstName}
        />

        <FormField
          label="Last name"
          id="lastName"
          inputProps={register('lastName')}
          error={errors.lastName?.message}
          isError={!!errors.firstName}
        />

        <FormField
          label="Email"
          id="email"
          type="email"
          inputProps={register('email')}
          error={errors.email?.message}
          isError={!!errors.email}
        />

        <FormField
          label="Password"
          id="password"
          type="password"
          inputProps={register('password')}
          error={errors.password?.message}
          isError={!!errors.password}
        />

        <FormField
          label="Confirm password"
          id="confirmPassword"
          type="password"
          inputProps={register('confirmPassword')}
          error={errors.confirmPassword?.message}
          isError={!!errors.confirmPassword}
        />

        <FormError error={errors.root?.message} />

        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  )
}
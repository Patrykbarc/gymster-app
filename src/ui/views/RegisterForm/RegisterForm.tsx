import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormField } from '../../components/Form/FormField/FormField'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { REGISTER_SCHEMA } from './helpers/register-schema'

type FormData = z.infer<typeof REGISTER_SCHEMA>

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(REGISTER_SCHEMA),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  function submitRegister(data: FormData) {
    console.log(data)
  }
  console.log(errors)

  return (
    <Wrapper height="100dvh">
      <Form onSubmit={handleSubmit(submitRegister)}>
        <FormTitle>Join GymsterApp</FormTitle>

        <FormField
          label="Username"
          id="username"
          inputProps={register('username')}
          error={errors.username?.message}
          isError={!!errors.username}
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

        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  )
}

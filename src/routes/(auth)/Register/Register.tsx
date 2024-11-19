import { RegisterForm } from '../../../ui/views/RegisterForm/RegisterForm'
import { useCheckSession } from '../../../utils/hooks/useCheckSession'

export function Register() {
  useCheckSession()

  return <RegisterForm />
}

import { LoginForm } from '../../../ui/views/LoginForm/LoginForm'
import { useCheckSession } from '../../../utils/hooks/useCheckSession'

export function Login() {
  useCheckSession()
  return <LoginForm />
}

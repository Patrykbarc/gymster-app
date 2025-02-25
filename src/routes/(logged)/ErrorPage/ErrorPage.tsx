import { useRouteError } from 'react-router-dom'

type RouteError = {
  statusText?: string
  message?: string
  data?: unknown
  status?: number
}

export function ErrorPage() {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

import { useParams } from 'react-router-dom'

export function Workout() {
  const { id } = useParams()

  return <p>Workout page: {id}</p>
}

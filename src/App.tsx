import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Layout } from './routes/Layout'
import { Navigation } from './ui/components/Navigation/Navigation'
import { setupAuthListener } from './utils/redux/config/setupAuthListener'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    setupAuthListener(dispatch)
  }, [dispatch])

  return (
    <Layout>
      <Navigation />
      <Outlet />
    </Layout>
  )
}

export default App

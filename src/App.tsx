import { Outlet } from 'react-router-dom'
import { Navigation } from './ui/components/Navigation/Navigation'
import { Layout } from './routes/Layout'

function App() {
  return (
    <Layout>
      <Navigation />
      <Outlet />
    </Layout>
  )
}

export default App

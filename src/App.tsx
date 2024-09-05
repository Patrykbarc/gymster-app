import { Outlet } from 'react-router-dom'
import { Layout } from './routes/Layout'
import { Navigation } from './ui/components/Navigation/Navigation'

function App() {
  return (
    <Layout>
      <Navigation />
      <Outlet />
    </Layout>
  )
}

export default App

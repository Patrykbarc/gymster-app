import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from './routes/Layout'
import { Loader } from './ui/components/Loader/Loader'
import { Navigation } from './ui/components/Navigation/Navigation'
import { useSession } from './utils/hooks/useSession'
import { useSessionListener } from './utils/hooks/useSessionListener'

const OutletContainer = styled.div`
  padding: ${({ theme }) => `calc(${theme.spacing.xxl} * 2)`};
  width: 100%;
`

function App() {
  useSessionListener()
  const { session } = useSession()

  if (!session) return <Loader />

  return (
    <>
      <Toaster position="bottom-right" />
      <Layout>
        <Navigation />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Layout>
    </>
  )
}

export default App

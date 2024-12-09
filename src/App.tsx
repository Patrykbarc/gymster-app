import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from './routes/Layout'
import { Loader } from './ui/components/Loader/Loader'
import { Sidebar } from './ui/components/Sidebar/Sidebar'
import { useSession } from './utils/hooks/useSession'
import { useSessionListener } from './utils/hooks/useSessionListener'

const OutletContainer = styled.div`
  padding: ${({ theme }) => `calc(${theme.spacing.xxl} * 2)`};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

function App() {
  useSessionListener()
  const { session } = useSession()

  if (!session) return <Loader />

  return (
    <>
      <Toaster position="bottom-right" />
      <Layout>
        <Sidebar />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Layout>
    </>
  )
}

export default App

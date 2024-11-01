import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from './routes/Layout'
import { Navigation } from './ui/components/Navigation/Navigation'
import { useSessionListener } from './utils/hooks/useSessionListener'

const OutletContainer = styled.div`
  padding: ${({ theme }) => `calc(${theme.spacing.xxl} * 2)`};
  width: 100%;
`

function App() {
  useSessionListener()

  return (
    <>
      <Toaster />
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

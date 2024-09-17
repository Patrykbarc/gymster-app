import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from './routes/Layout'
import { Navigation } from './ui/components/Navigation/Navigation'
import { setupAuthListener } from './utils/redux/config/setupAuthListener'
import {Toaster} from 'react-hot-toast'

const OutletContainer = styled.div`
  padding: ${({ theme }) => `calc(${theme.spacing.xxl} * 2)`};
  width: 100%;
`

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    setupAuthListener(dispatch)
  }, [dispatch])

  return (
    <>
    <Toaster/>
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

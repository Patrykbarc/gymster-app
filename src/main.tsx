import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { routerConfig } from './lib/routerConfig/routerConfig.tsx'
import './styles/index.css'
import './styles/reset.css'
import { theme } from './styles/theme/theme.ts'
import { store } from './utils/redux/store.ts'

const queryClient = new QueryClient()
const router = createBrowserRouter(routerConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)

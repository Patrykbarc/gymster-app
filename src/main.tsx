import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTER_CONFIG } from './lib/routerConfig/routerConfig.tsx'
import './styles/index.css'
import './styles/scrollbar.css'
import { ThemeProvider } from './utils/providers/ThemeProvider.tsx'
import { store } from './utils/redux/store.ts'

const router = createBrowserRouter(ROUTER_CONFIG)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)

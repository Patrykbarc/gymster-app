import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { Login } from './routes/(auth)/Login/Login.tsx'
import { Register } from './routes/(auth)/Register/Register.tsx'
import { Calendar } from './routes/(logged)/Calendar/Calendar.tsx'
import { Dashboard } from './routes/(logged)/Dashboard/Dashboard.tsx'
import { ErrorPage } from './routes/(logged)/ErrorPage/ErrorPage.tsx'
import { Planner } from './routes/(logged)/Planner/Planner.tsx'
import { Workout } from './routes/(logged)/Workout/Workout.tsx'
import './styles/index.css'
import './styles/reset.css'
import { theme } from './styles/theme.ts'
import { store } from './utils/redux/store.ts'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        index: true,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/workout',
        element: <Workout />,
      },
      {
        path: '/planner',
        element: <Planner />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
    ],
  },
])

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

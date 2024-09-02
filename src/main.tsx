import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { Calendar } from './routes/(logged)/Calendar/Calendar.tsx'
import { Dashboard } from './routes/(logged)/Dashboard/Dashboard.tsx'
import { ErrorPage } from './routes/(logged)/ErrorPage/ErrorPage.tsx'
import { Planner } from './routes/(logged)/Planner/Planner.tsx'
import { Workout } from './routes/(logged)/Workout/Workout.tsx'
import { Login } from './routes/Login/Login.tsx'
import { Register } from './routes/Register/Register.tsx'
import './styles/index.css'
import './styles/reset.css'
import { theme } from './styles/theme.ts'

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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
)

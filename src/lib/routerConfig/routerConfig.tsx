import App from '../../App.tsx'
import { Login } from '../../routes/(auth)/Login/Login.tsx'
import { Register } from '../../routes/(auth)/Register/Register.tsx'
import { Calendar } from '../../routes/(logged)/Calendar/Calendar.tsx'
import { Dashboard } from '../../routes/(logged)/Dashboard/Dashboard.tsx'
import { ErrorPage } from '../../routes/(logged)/ErrorPage/ErrorPage.tsx'
import { Planner } from '../../routes/(logged)/Planner/Planner.tsx'
import { Workout } from '../../routes/(logged)/Workout/Workout.tsx'

export const routerConfig = [
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
]

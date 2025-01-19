import App from '../../App.tsx'
import { Login } from '../../routes/(auth)/Login/Login.tsx'
import { Register } from '../../routes/(auth)/Register/Register.tsx'
import { Dashboard } from '../../routes/(logged)/Dashboard/Dashboard.tsx'
import { ErrorPage } from '../../routes/(logged)/ErrorPage/ErrorPage.tsx'
import { NewWorkout } from '../../routes/(logged)/NewWorkout/NewWorkout.tsx'
import { Workout } from '../../routes/(logged)/Planner/Workout/Workout.tsx'
import { Profile } from '../../routes/(logged)/Profile/Profile.tsx'
import { SavedWorkouts } from '../../routes/(logged)/SavedWorkout/SavedWorkouts.tsx'

export const ROUTER_CONFIG = [
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
        children: [
          {
            path: ':id',
            element: <Workout />,
          },
        ],
      },
      {
        path: '/workout',
        element: <NewWorkout />,
      },
      {
        path: '/saved-workouts',
        element: <SavedWorkouts />,
        children: [
          {
            path: ':id',
            element: <Workout />,
          },
        ],
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]

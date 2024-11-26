import { createAsyncThunk } from '@reduxjs/toolkit'
import { UpdateWorkoutParams } from '../../../../api/plannerData/_queries/updateWorkout'
import { handleAddWorkout } from '../../../../api/plannerData/handleAddWorkout/handleAddWorkout'
import { handleDeleteWorkout } from '../../../../api/plannerData/handleDeleteWorkout'
import { handleEditWorkout } from '../../../../api/plannerData/handleEditWorkout/handleEditWorkout'
import { handleGetPlannedWorkouts } from '../../../../api/plannerData/handleGetPlannedWorkouts'
import { handleGetWorkout } from '../../../../api/plannerData/handleGetWorkout'
import { FormWorkout } from '../../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
import { debounce } from '../../../../ui/views/WorkoutForm/_utils/debounce'
import { PlannedWorkouts } from './types'

export const fetchWorkouts = createAsyncThunk(
  'workouts/fetchWorkouts',
  async (): Promise<PlannedWorkouts[]> => {
    const { data, error } = await handleGetPlannedWorkouts()
    if (error) throw new Error(error.message)
    return data || []
  }
)

export const fetchWorkout = createAsyncThunk(
  'workouts/fetchWorkout',
  async (workoutId: string) => {
    const { data, error } = await handleGetWorkout(workoutId)
    if (error) throw new Error(error.message)
    return data || null
  }
)

export const addWorkout = createAsyncThunk(
  'workouts/addWorkout',
  async (workoutData: FormWorkout) => {
    const result = await handleAddWorkout(workoutData)
    if (!result) {
      return 'No response from handleAddWorkout'
    }
    const { data, error } = result
    if (error) {
      return error.message
    }
    return data && data.length > 0 ? data[0] : null
  }
)

export const updateSet = createAsyncThunk(
  'workouts/updateSet',

  debounce(async (data: UpdateWorkoutParams) => {
    await handleEditWorkout(data)
  }, 300)
)

export const deleteWorkout = createAsyncThunk(
  'workouts/deleteWorkout',
  async (workoutId: string): Promise<string> => {
    const { error } = await handleDeleteWorkout(workoutId)
    if (error) throw new Error(error.message)
    return workoutId
  }
)

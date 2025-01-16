import { supabase } from '../supabase'

export async function handleGetOverview() {
  const [workouts, sets] = await Promise.all([
    supabase.from('workouts').select('*'),
    supabase.from('sets').select('*'),
  ])

  if (workouts.error || sets.error) {
    throw new Error(workouts.error?.message || sets.error?.message)
  }

  const totalWorkouts = workouts.data?.map((i) => i.id).length
  const activeDays = workouts.data?.filter((i) => {
    const workoutDate = new Date(i.workout_date)
    const now = new Date()
    return (
      workoutDate.getMonth() === now.getMonth() &&
      workoutDate.getFullYear() === now.getFullYear()
    )
  }).length
  const personalRecord =
    sets.data?.reduce((max, set) => (set.weight > max ? set.weight : max), 0) ||
    0

  return [
    {
      title: 'Total Workouts',
      icon: '💪',
      statistic: totalWorkouts,
      text: 'Since you started',
    },
    {
      title: 'Active Days',
      icon: '📅',
      statistic: activeDays,
      text: 'This month',
    },
    {
      title: 'Personal Records',
      icon: '🏆',
      statistic: personalRecord,
      text: 'Heaviest weight lifted',
    },
  ]
}

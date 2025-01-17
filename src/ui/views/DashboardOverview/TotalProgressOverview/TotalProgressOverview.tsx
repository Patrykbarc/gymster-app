import { memo, useEffect } from 'react'
import { createSelector } from 'reselect'
import styled from 'styled-components'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { fetchOverview } from '../../../../utils/redux/slices/overview/actions/fetchOverview'
import { RootState } from '../../../../utils/redux/store'
import { StatisticsCard } from '../../../components/StatisticsCard/StatisticsCard'

const TotalProgressOverviewContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  width: 100%;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const selectOverviewAndWorkouts = createSelector(
  [
    (state: RootState) => state.overview.overview,
    (state: RootState) => state.workouts.status,
  ],
  (overview, workoutsStatus) => ({ overview, workoutsStatus })
)

const MemoizedStatisticsCard = memo(StatisticsCard)

export function TotalProgressOverview() {
  const dispatch = useAppDispatch()
  const { overview, workoutsStatus } = useAppSelector(selectOverviewAndWorkouts)

  useEffect(() => {
    if (workoutsStatus === 'succeeded') {
      dispatch(fetchOverview())
    }
  }, [workoutsStatus, dispatch])

  return (
    <TotalProgressOverviewContainer>
      {overview.map((item) => (
        <MemoizedStatisticsCard
          key={item.title}
          title={item.title}
          statistic={item.statistic.toString()}
          description={item.text}
          icon={item.icon}
        />
      ))}
    </TotalProgressOverviewContainer>
  )
}

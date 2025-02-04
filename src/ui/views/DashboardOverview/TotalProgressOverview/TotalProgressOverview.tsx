import styled from 'styled-components'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
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

export function TotalProgressOverview() {
  const { overview, status } = useAppSelector((state) => state.overview)

  if (status === 'loading') {
    return (
      <TotalProgressOverviewContainer>
        Loading...
      </TotalProgressOverviewContainer>
    )
  }

  return (
    <TotalProgressOverviewContainer>
      {overview.map((item) => (
        <StatisticsCard
          key={item.id}
          title={item.title}
          statistic={item.statistic.toString()}
          description={item.text}
          icon={item.icon}
        />
      ))}
    </TotalProgressOverviewContainer>
  )
}

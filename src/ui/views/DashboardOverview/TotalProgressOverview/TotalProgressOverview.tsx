import styled from 'styled-components'
import { StatisticsCard } from '../../../components/StatisticsCard/StatisticsCard'
import { MOCKED_OVERVIEW_DATA } from './helpers/mocked-overview-data'

const TotalProgressOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  width: 100%;
  gap: ${({ theme }) => theme.spacing.large};

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export function TotalProgressOverview() {
  return (
    <TotalProgressOverviewContainer>
      {MOCKED_OVERVIEW_DATA.map((item) => (
        <StatisticsCard
          key={item.title}
          title={item.title}
          icon={item.icon}
          statistic={item.statistic}
        >
          {item.text}
        </StatisticsCard>
      ))}
    </TotalProgressOverviewContainer>
  )
}

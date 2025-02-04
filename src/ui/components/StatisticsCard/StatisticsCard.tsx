import styled from 'styled-components'
import { CardOverview } from '../../../utils/redux/slices/overview/overviewSlice'
import { Card } from '../Card/Card'

type Overview = CardOverview['overview'][number]

type CardProps = {
  title: Overview['title']
  statistic: Overview['statistic']
  description: Overview['text']
  icon?: Overview['icon']
}

export const CardContainer = styled(Card)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.sm};

    width: 100%;

    .title {
      font-size: ${({ theme }) => theme.typography.fontSizes.xl};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
      color: ${({ theme }) => theme.colors.gray[600]};
    }
    .description {
      font-size: ${({ theme }) => theme.typography.fontSizes.base};
      color: ${({ theme }) => theme.colors.gray[500]};
    }
    .statistic {
      font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
      margin-top: ${({ theme }) => theme.spacing.sm};
      font-weight: ${({ theme }) => theme.typography.weight.black};
    }
  }

  .statistic-container {
    display: flex;
    place-content: center end;
    .icon-container {
      display: flex;
      place-content: center;
      font-size: 3em;
    }
  }
`

export function StatisticsCard({
  title,
  statistic,
  description,
  icon,
}: CardProps) {
  return (
    <CardContainer>
      <div className="title-container">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="statistic">{statistic}</p>
      </div>
      <div className="statistic-container">
        <div className="icon-container">{icon}</div>
      </div>
    </CardContainer>
  )
}

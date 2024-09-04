import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card } from '../Card/Card'

type CardProps = {
  title: string
  statistic: string
  children: ReactNode
  icon?: string | ReactNode
}

const TitleContainer = styled.p`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

export function StatisticsCard({
  title,
  statistic,
  children,
  icon,
}: CardProps) {
  return (
    <Card>
      <TitleContainer>
        {title}
        <span>{icon}</span>
      </TitleContainer>
      <h3>{statistic}</h3>
      {children}
    </Card>
  )
}

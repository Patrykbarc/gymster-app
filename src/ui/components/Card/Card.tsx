import { ReactNode } from 'react'
import styled from 'styled-components'

type CardProps = {
  title: string
  statistic: string
  children: ReactNode
  icon?: string | ReactNode
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;

  gap: ${({ theme }) => theme.spacing.large};

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: ${({ theme }) => theme.shadows.small};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  }
`

const TitleContainer = styled.p`
  display: flex;
  justify-content: space-between;

  width: 100%;
`

export function Card({ title, statistic, children, icon }: CardProps) {
  return (
    <CardContainer>
      <TitleContainer>
        {title}
        <span>{icon}</span>
      </TitleContainer>
      <h3>{statistic}</h3>
      {children}
    </CardContainer>
  )
}

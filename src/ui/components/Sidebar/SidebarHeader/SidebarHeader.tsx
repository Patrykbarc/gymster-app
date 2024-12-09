import styled from 'styled-components'

const SidebarHeaderContainer = styled.p`
  font-weight: ${({ theme }) => theme.typography.weight.black};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray['900']};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  letter-spacing: 0.02em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['300']};
`

export function SidebarHeader() {
  return <SidebarHeaderContainer>GymsterApp</SidebarHeaderContainer>
}

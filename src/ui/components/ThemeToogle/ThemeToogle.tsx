import { Moon, Sun } from 'lucide-react'
import styled from 'styled-components'
import { useTheme } from '../../../utils/hooks/useTheme'
import { Button } from '../Button/Button'

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray['600']};
`

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <Button $variant="link" onClick={toggleTheme}>
      <IconWrapper>
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </IconWrapper>
    </Button>
  )
}

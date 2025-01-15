import { Moon, Sun } from 'lucide-react'
import styled from 'styled-components'
import { useTheme } from '../../../utils/hooks/useTheme'
import { Button } from '../Button/Button'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.sm};

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <Wrapper>
      <Button $variant="link" onClick={toggleTheme}>
        <div className="icon-wrapper">
          {isDarkMode ? <Sun size={32} /> : <Moon size={24} />}
        </div>
      </Button>
    </Wrapper>
  )
}

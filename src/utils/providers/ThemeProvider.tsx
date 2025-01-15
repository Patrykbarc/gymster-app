import { ReactNode, useEffect, useState } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'
import { RESET } from '../../styles/theme/constants/reset'
import { theme } from '../../styles/theme/theme'
import { ThemeContext } from './contexts/ThemeContext'

const GlobalStyle = createGlobalStyle`
  ${RESET}
  a,
  a:visited {
    color: ${({ theme }) => theme.colors.gray['600']};
    text-decoration: none;
  }

  body {
    color: ${({ theme }) => theme.colors.gray['600']};
    background-color: ${({ theme }) => theme.colors.gray['50']};
  }

  button {
    color: inherit; 
  }
`

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved
      ? JSON.parse(saved)
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const themeConfig = theme(isDarkMode)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={themeConfig as DefaultTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

import { COLORS, DARK_COLORS } from './constants/colors'
import { TYPOGRAPHY } from './constants/typography'

export type ThemeType = typeof theme

export function theme(isDark?: boolean) {
  return {
    colors: isDark ? { ...DARK_COLORS } : { ...COLORS },
    typography: { ...TYPOGRAPHY },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    sizes: {
      sm: '1.5rem',
      md: '4rem',
      lg: '8rem',
      full: '100%',
      auto: 'auto',
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      round: '50%',
    },
    shadows: {
      sm: isDark
        ? 'rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px'
        : 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      md: isDark
        ? 'rgba(0, 0, 0, 0.3) 0px 10px 15px -3px, rgba(0, 0, 0, 0.2) 0px 4px 6px -2px'
        : 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      lg: isDark
        ? 'rgba(0, 0, 0, 0.3) 0px 20px 25px -5px, rgba(0, 0, 0, 0.2) 0px 10px 10px -5px'
        : 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    },
    transitions: {
      quick: '0.1s ease-in-out',
      normal: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
    },
    zIndex: {
      dropdown: 1000,
      sticky: 1020,
      modal: 1050,
      tooltip: 1070,
    },
    breakPoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    _brand: 'DefaultTheme' as const,
  } as const
}

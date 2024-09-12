export type ThemeType = typeof theme

export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#e3e3e4',
    gray: '#c7c7c7',
    success: '#28a745',
    danger: '#dc3545',
    light: '#f4f4f5',
    dark: '#343a40',
    background: '#f2f2f2',
    text: '#212529',
  },
  fontSizes: {
    xs: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  spacing: {
    xs: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  sizes: {
    small: '1.5rem',
    medium: '4rem',
    large: '8rem',
    full: '100%',
    auto: 'auto',
  },
  borderRadius: {
    none: '0',
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    round: '50%',
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.1)',
    medium: '0 2px 4px rgba(0, 0, 0, 0.15)',
    large: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
  buttons: {
    primary: {
      background: '#007bff',
      color: '#ffffff',
      border: '1px solid #007bff',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      transition: '0.3s ease-in-out',
    },
    secondary: {
      background: '#6c757d',
      color: '#ffffff',
      border: '1px solid #6c757d',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      transition: '0.3s ease-in-out',
    },
  },
  typography: {
    headings: {
      h1: {
        fontSize: '2em',
        fontWeight: 700,
        // lineHeight: '2.5em',
      },
      h2: {
        fontSize: '1.5em',
        fontWeight: 600,
        // lineHeight: '2em',
      },
      h3: {
        fontSize: '1.25em',
        fontWeight: 500,
        // lineHeight: '1.75em',
      },
    },
    body: {
      normal: {
        fontSize: '1em',
        fontWeight: 400,
        // lineHeight: '1.5em',
      },
      small: {
        fontSize: '0.875em',
        fontWeight: 400,
        // lineHeight: '1.25em',
      },
    },
  },
  breakPoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
} as const

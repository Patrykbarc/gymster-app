export type ThemeType = typeof theme

export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#e3e3e4',
    muted: '#71717a',
    gray: '#c7c7c7',
    white: '#ffffff',
    success: '#28a745',
    danger: '#dc3545',
    light: '#f2f2f2',
    dark: '#343a40',
    text: '#212529',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
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
    sm: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    md: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    lg: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
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
    fontWeights: {
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
      thin: 300,
    },
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

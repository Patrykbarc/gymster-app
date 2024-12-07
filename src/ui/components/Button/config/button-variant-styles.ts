import { css } from 'styled-components'

export const BUTTON_VARIANT_CONFIG = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary['500']};
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary['600']};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary['500']};
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary['600']};
    }
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success['500']};
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      background-color: ${({ theme }) => theme.colors.success['600']};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger['500']};
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      background-color: ${({ theme }) => theme.colors.danger['600']};
    }
  `,
  link: css`
    background: none;
    padding: 0 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.light};
    }
  `,
  outline: css`
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.gray['300']};
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray['200']};
    }
  `,
}

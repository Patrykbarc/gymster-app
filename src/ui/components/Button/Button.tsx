import styled, { css } from 'styled-components'

export type ButtonProps = {
  $variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'link' | 'outline'
  $noHover?: boolean
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.light};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.light};
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
    border: 1px solid ${({ theme }) => theme.colors.gray};
    &:hover {
      background-color: ${({ theme }) => theme.colors.light};
    }
  `,
}

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  display: flex;
  align-items: center;
  height: 2.5rem;
  max-width: fit-content;

  ${({ $variant = 'primary' }) => variantStyles[$variant]};

  ${({ $noHover }) =>
    $noHover &&
    css`
      &:hover {
        opacity: 1;
        background-color: inherit;
        cursor: default;
      }
    `}

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;

    background: ${({ $variant, theme }) =>
      $variant === 'outline' && theme.colors.light};
  }
`

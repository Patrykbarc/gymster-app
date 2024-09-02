import styled, { css } from 'styled-components'

const buttonVariants = {
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
}

export const Button = styled.button<{ $variant: keyof typeof buttonVariants }>`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  display: inline-block;

  ${({ $variant }) => buttonVariants[$variant] || buttonVariants.primary}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    cursor: not-allowed;
    opacity: 0.6;
  }
`

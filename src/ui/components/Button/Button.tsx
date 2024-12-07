import styled, { css } from 'styled-components'
import { BUTTON_VARIANT_CONFIG } from './config/button-variant-styles'

export type ButtonProps = {
  $variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'link' | 'outline'
  $noHover?: boolean
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

  ${({ $variant = 'primary' }) => BUTTON_VARIANT_CONFIG[$variant]};

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
      $variant === 'outline' && theme.colors.gray['100']};
  }
`

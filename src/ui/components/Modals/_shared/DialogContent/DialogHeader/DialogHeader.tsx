import { ReactElement } from 'react'
import styled from 'styled-components'
import { useValidComponent } from '../../../../../../utils/hooks/useValidComponent'
import { DialogDescription } from './DialogDescription/DialogDescription'
import { DialogTitle } from './DialogTitle/DialogTitle'

export type ReactElements =
  | ReactElement<typeof DialogTitle>
  | ReactElement<typeof DialogDescription>

export type DialogHeaderProps = {
  children?: ReactElements | Array<ReactElements>
}

export const StyledDialogHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['100']};
`

export function DialogHeader({ children }: DialogHeaderProps) {
  const { validChildren } = useValidComponent(children, [
    DialogTitle,
    DialogDescription,
  ])

  return <StyledDialogHeader>{validChildren}</StyledDialogHeader>
}

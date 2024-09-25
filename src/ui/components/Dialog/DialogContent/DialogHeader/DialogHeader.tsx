import { ReactElement } from 'react'
import styled from 'styled-components'
import { useValidComponent } from '../../../../../utils/hooks/useValidComponent'
import { DialogTitle } from '../DialogTitle/DialogTitle'
import { DialogDescription } from './DialogDescription/DialogDescription'

export type ReactElements =
  | ReactElement<typeof DialogTitle>
  | ReactElement<typeof DialogDescription>

export type DialogHeaderProps = {
  children?: ReactElements | Array<ReactElements>
}

export const StyledDialogHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`

export function DialogHeader({ children }: DialogHeaderProps) {
  const { validChildren } = useValidComponent(children, [
    DialogTitle,
    DialogDescription,
  ])

  return <StyledDialogHeader>{validChildren}</StyledDialogHeader>
}

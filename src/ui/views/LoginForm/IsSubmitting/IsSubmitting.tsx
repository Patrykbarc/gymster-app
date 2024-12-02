import { Loader } from '../../../components/Loader/Loader'

import { DialogOverlay } from '../../../components/Modals/_shared/DialogOverlay/DialogOverlay'

type IsSubmittingProps = {
  isSubmitting: boolean
}

export function IsSubmitting({ isSubmitting }: IsSubmittingProps) {
  return (
    isSubmitting && (
      <DialogOverlay $opacity="60%">
        <Loader />
      </DialogOverlay>
    )
  )
}

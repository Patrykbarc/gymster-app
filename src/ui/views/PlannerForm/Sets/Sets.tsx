import { ReactNode } from 'react'
import { AddSetButton, AddSetButtonProps } from './AddSetButton/AddSetButton'
import { SetsTitles } from './SetsTitles/SetsTitles'

type SetsProps = {
  children: ReactNode
  append: AddSetButtonProps['append']
  fields: AddSetButtonProps['fields']
}

export function Sets({ children, append, fields }: SetsProps) {
  return (
    <>
      <div>
        <SetsTitles />
        {children}
      </div>
      <AddSetButton append={append} fields={fields} />
    </>
  )
}

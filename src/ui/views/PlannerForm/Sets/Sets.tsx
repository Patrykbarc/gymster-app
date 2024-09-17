import { ReactNode } from 'react'
import { AddSetButton } from './AddSetButton/AddSetButton'
import { SetsTitles } from './SetsTitles/SetsTitles'

type SetsProps = {
  children: ReactNode
  append: (set: { set: number; weight: number; reps: number }) => void
  fields: { id: string; set: number; weight: number; reps: number }[]
}

export function Sets({ children, append, fields }: SetsProps) {
  return (
    <>
      <div>
        <SetsTitles />
        {children}
      </div>
      <AddSetButton
        append={() => append({ set: fields.length + 1, weight: 1, reps: 1 })}
        fields={fields}
      />
    </>
  )
}

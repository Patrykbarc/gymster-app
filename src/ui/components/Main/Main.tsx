import { ReactNode } from 'react'
import { Wrapper } from '../Wrapper/Wrapper'

type MainProps = {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <main>
      <Wrapper>{children}</Wrapper>
    </main>
  )
}

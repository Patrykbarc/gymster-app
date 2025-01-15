/* eslint-disable */
import 'styled-components'
import { theme } from './theme'

type Theme = ReturnType<typeof theme>

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

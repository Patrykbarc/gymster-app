import styled from 'styled-components'
import { Button } from '../../../../../components/Button/Button'
import { Label } from '../../../../../components/Label/Label'

type SetFieldProps = {
  isFirstIndex: boolean
  set: number
}

const Set = styled(Button)`
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
`

export function SetField({ isFirstIndex, set }: SetFieldProps) {
  return (
    <div>
      {isFirstIndex && <Label $cursor="default">Sets</Label>}
      <Set as="div" $variant="link" $noHover>
        {set + 1}.
      </Set>
    </div>
  )
}

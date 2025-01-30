import { useId } from 'react'
import styled from 'styled-components'

type SwitchProps = {
  $checked: boolean
  onChange: (checked: boolean) => void
  $label?: string
  $direction?: 'row' | 'column'
}

export function Switch({
  $checked,
  onChange,
  $label,
  $direction = 'row',
}: SwitchProps) {
  const id = useId()

  return (
    <Container $direction={$direction} onClick={() => onChange(!$checked)}>
      {$label && <label className="label">{$label}</label>}
      <SwitchContainer id={id} $checked={$checked}>
        <SwitchKnob $checked={$checked} />
      </SwitchContainer>
    </Container>
  )
}

const Container = styled.div<{ $direction: SwitchProps['$direction'] }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  .label {
    cursor: inherit;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-right: 2.2rem;
  }
`

const SwitchContainer = styled.div<{ $checked: boolean }>`
  width: 35px;
  height: 16px;
  background: ${({ theme, $checked }) =>
    $checked ? theme.colors.gray['400'] : theme.colors.gray['200']};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  scale: 1.1;
`

const SwitchKnob = styled.div<{ $checked: boolean }>`
  position: absolute;
  left: ${({ $checked }) => ($checked ? '19px' : '1px')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 1px;

  background: ${({ theme, $checked }) =>
    $checked ? theme.colors.gray['800'] : theme.colors.gray['400']};
  transition: left 0.2s;
`

import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`

const Dot = styled.div<{ $delay: string }>`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${pulse} 1.4s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay};
`

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Dot $delay="0s" />
      <Dot $delay="0.2s" />
      <Dot $delay="0.4s" />
    </LoaderWrapper>
  )
}

import styled from 'styled-components'

export const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  height: fit-content;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;

  padding: ${({ theme }) => theme.spacing.lg};

  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray['100']};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray['300']};
  }
`

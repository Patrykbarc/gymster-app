import { Property } from 'csstype'
import { motion } from 'framer-motion'
import styled from 'styled-components'

type Props = {
  $opacity?: Property.Opacity
}

export const DialogOverlay = styled(motion.div).attrs<Props>(() => ({
  id: 'dialog-overlay',
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2, ease: 'easeInOut' },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $opacity }) => `rgba(0,0,0, ${$opacity || '0.75'})`};
  z-index: ${({ theme }) => theme.zIndex.modal};

  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`

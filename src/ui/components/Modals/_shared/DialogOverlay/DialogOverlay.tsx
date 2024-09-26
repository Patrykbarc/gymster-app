import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DialogOverlay = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2, ease: 'easeInOut' },
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  z-index: ${({ theme }) => theme.zIndex.modal};
`

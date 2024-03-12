import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from './AllSvgs'

const Power = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 49%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.4rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.8);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 500px) {
    left: 45%;
  }
`

const PowerButton = () => {
  return (
    <Power
      initial={{
        y: -200,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
      animate={{
        y: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 }
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Button Home"
    >
      <Link href={'/'}>
        <PowerBtn fill="currentColor" />
      </Link>
    </Power>
  )
}

export default PowerButton

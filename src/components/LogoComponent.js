import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from './Themes'

const Logo = styled(motion.h1)`
  display: inline-block;
  color: ${props => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 3rem;
  top: 1.5rem;
  z-index: 3;
  margin: 0;
  @media (max-width: 500px) {
    left: calc(1rem + 4vw);
  }
`

const LogoComponent = props => {
  return (
    <Logo
      color={props.theme}
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
    >
      KSN
    </Logo>
  )
}

export default LogoComponent

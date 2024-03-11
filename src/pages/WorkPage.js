import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//theme
import { DarkTheme } from '../components/Themes'

//components
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import PowerButton from '../components/PowerButton'
import AmongusParticle from '../components/AmongusParticle'

import { Work } from '../data/WorkData'
import Card from '../components/Card'
import { YinYang } from '../components/AllSvgs'

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  display: flex;
  align-items: center;
  user-select: none;
`

const Main = styled(motion.ul)`
  position: absolute;
  top: 10rem;
  left: 49%;
  transform: translate(-50%, 0);
  padding-bottom: 5rem;
  display: grid;
  gap: 1.5rem;

  color: white;
  @media (max-width: 430px) {
    top: 7.3rem;
    left: 2rem;
    transform: translate(0%, 0);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

//html
const WorkPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <ThemeProvider theme={DarkTheme}>
        <LogoComponent theme="dark" />

        <SocialIcons theme="dark" />
        <PowerButton alt="Go to HomePage" />
        <AmongusParticle />
        {/* <Box> */}
        <Main variants={container} initial="hidden" animate="show">
          {Work.reverse().map(d => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        {/* <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate> */}
        {/* </Box> */}
      </ThemeProvider>
    </motion.div>
  )
}

export default WorkPage

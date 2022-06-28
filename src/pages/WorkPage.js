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
import SoundBar from '../components/SoundBar'

import { Work } from '../data/WorkData'
import Card from '../components/Card'
import { YinYang } from '../components/AllSvgs'

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  height: 500vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;
`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
  @media (max-width: 500px) {
    top: 7.3rem;
    left: -0.3rem;
  }
`
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
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
  const ref = useRef(null)
  const yinyang = useRef(null)

  useEffect(() => {
    let element = ref.current

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate)
    }
  }, [])

  return (
    <motion.div exit={{ opacity: 0 }}>
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <LogoComponent theme="dark" />
          <SoundBar />
          <SocialIcons theme="dark" />
          <PowerButton alt="Go to HomePage" />
          <AmongusParticle />

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.reverse().map(d => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>
        </Box>
      </ThemeProvider>
    </motion.div>
  )
}

export default WorkPage

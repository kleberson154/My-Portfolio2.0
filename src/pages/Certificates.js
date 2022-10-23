import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//theme
import { lightTheme } from '../components/Themes'

//components
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import PowerButton from '../components/PowerButton'
import ParticleComponent from '../components/ParticleComponent'
import SoundBar from '../components/SoundBar'

import { Certificate } from '../data/WorkData'
import CardCert from '../components/CardCert'
import { YinYang } from '../components/AllSvgs'

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const Main = styled(motion.div)`
  position: absolute;
  top: 4rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  @media (max-width: 1348px) {
    top: 6rem;
    left: 8rem;
    right: 2rem;
  }

  @media (max-width: 500px) {
    top: 6rem;
    left: 4rem;
    right: 1rem;
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
const Certificates = () => {
  const ref = useRef(null)
  const yinyang = useRef(null)

  useEffect(() => {
    let element = ref.current

    const rotate = () => {
      element.style.transform = `translateY(${-window.pageYOffset}px)`

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
      <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme="light" />
          <SoundBar />
          <SocialIcons theme="light" />
          <PowerButton alt="Go to HomePage" />
          <ParticleComponent />

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Certificate.map(d => (
              <CardCert key={d.id} data={d} />
            ))}
          </Main>

          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={lightTheme.text} />
          </Rotate>
        </Box>
      </ThemeProvider>
    </motion.div>
  )
}

export default Certificates

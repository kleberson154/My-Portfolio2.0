import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//theme
import { DarkTheme } from '../components/Themes'

//components
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import PowerButton from '../components/PowerButton'
import SpaceParticle from '../components/SpaceParticle'
import { keyframes } from 'styled-components'

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 92vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(-55px) translateX(-15px)}
100% { transform: translateY(-10px)};
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  user-select: none;

  img {
    width: 100%;
    height: auto;
  }
`

const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  @media (max-width: 500px) {
    width: 70vw;
    height: 60vh;
    position: relative;
    top: 14rem;
    left: 5rem;
  }
`

//html
const AboutPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <LogoComponent theme="dark" />

          <SocialIcons theme="dark" />
          <PowerButton alt="Go to HomePage" />
          <SpaceParticle />

          <Spaceman>
            <img src="/images/spaceman.png" alt="spaceman" />
          </Spaceman>

          <Main
            initial={{
              opacity: 0,
              y: 200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
          >
            I&apos;m a Full-Stack Developer located in Brazil. I love creating
            simple and beautiful websites with great user experience and
            optimized.
            <br /> <br />
            I&apos;m interested in all the full-stack stuff, like trying new
            things and building projects big or small. I&apos;m a freelancer for
            fun.
            <br /> <br />
            My focus as a developer is to improve my career and to specialize in
            javascript and improve it every day
          </Main>
        </Box>
      </ThemeProvider>
    </motion.div>
  )
}

export default AboutPage

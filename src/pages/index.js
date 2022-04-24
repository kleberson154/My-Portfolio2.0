import Head from 'next/head'
import { useState } from 'react'

//styles
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../components/Themes'
import GlobalStyles from '../styles/GlobalStyles'
import styled, { keyframes } from 'styled-components'

//Components
import PowerButton from '../components/PowerButton'
import SocialIcons from '../components/SocialIcons'
import { YinYang } from '../components/AllSvgs'
import Logo from '../components/LogoComponent'
import Intro from '../components/Intro'

//Framer-motion
import { motion } from 'framer-motion'
import SoundBar from '../components/SoundBar'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`
const Container = styled.div`
  padding: 2rem;
`

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 4vw);
  text-decoration: none;
  z-index: 1;
`
const Work = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 3vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    justify-content: center;
    gap: 2rem;
    left: 1rem;
  }
`

const About = styled.a`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`

const Skill = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const Center = styled(motion.button)`
  position: absolute;
  top: ${props => (props.click ? '85%' : '50%')};
  left: ${props => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 5s linear;
  }

  & > :last-child {
    display: ${props => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => (props.click ? '50%' : '0%')};
  height: ${props => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

export default function Home() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>kleberson A.</title>
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&family=Pacifico&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <MainContainer>
          <DarkDiv click={click} />

          <Container>
            <PowerButton />
            <Logo theme={click ? 'dark' : 'light'} />
            <SoundBar />
            <SocialIcons theme={click ? 'dark' : 'light'} />

            <Center
              click={click}
              initial={{ opacity: '0' }}
              animate={{ opacity: '1' }}
              transition={{ duration: 1, delay: 1 }}
            >
              <YinYang
                onClick={() => handleClick()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="currentColor"
              />
              <h2>Click Here</h2>
            </Center>

            <Contact href="mailto:kleberson55@hotmail.com" target="_blank">
              <motion.h2
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
                Say hi..
              </motion.h2>
            </Contact>
            <Work href="/WorkPage">
              <motion.h2
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
                Work
              </motion.h2>
            </Work>
            <BottomBar>
              <About href="/AboutPage" click={click}>
                <motion.h2
                  initial={{
                    y: 200,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                    y: 0,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About
                </motion.h2>
              </About>
              <Skill href="/MySkillsPage">
                <motion.h2
                  initial={{
                    y: 200,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  animate={{
                    y: 0,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  My Skills
                </motion.h2>
              </Skill>
            </BottomBar>
          </Container>

          {click ? <Intro click={click} /> : null}
        </MainContainer>
      </ThemeProvider>

      <GlobalStyles />
    </motion.div>
  )
}

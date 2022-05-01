import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//theme
import { lightTheme } from '../components/Themes'
import { Design, Develope } from '../components/AllSvgs'

//components
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import PowerButton from '../components/PowerButton'
import ParticleComponent from '../components/ParticleComponent'
import SoundBar from '../components/SoundBar'

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 92vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    height: 8rem;
  }
`

const Tab = styled(motion.div)`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
  position: relative;
  left: -1rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 9rem;
    left: 23%;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 0 2rem;
  width: 30vw;
  height: 60vh;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color ease 0.5s;

  h2 {
    transition: color ease 0.5s;
  }
  svg {
    transition: fill ease 0.5s;
  }
  div {
    transition: color ease 0.5s;
  }

  &:hover {
    background-color: ${props => props.theme.text};
    h2 {
      color: ${props => props.theme.body};
    }
    div {
      color: ${props => props.theme.body};
    }
    svg {
      fill: ${props => props.theme.body};
    }
  }
  @media (max-width: 900px) {
    width: 18rem;
    padding: 0 1rem;
    justify-content: space-around;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  color: ${props => props.theme.text};

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.2em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 0;
  }
`
const Liskill = styled.li`
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 17px;
  }
`

const Ulskill = styled.ul`
  padding: 0;
  margin-left: 0;
`

//html
const MySkillsPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme="light" />
          <SoundBar />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticleComponent />

          <Tab
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
            <Main>
              <Title>
                <Design width={40} height={40} /> Designer
              </Title>
              <Description>
                I love to create design which speaks, Keep it clean, minimal and
                simple.
              </Description>
              <Description>
                <strong>I LIKE TO DESIGN</strong>
                <ul>
                  <li>Web Design</li>
                  <li>UI/UX Design</li>
                </ul>
              </Description>
              <Description>
                <strong>Tools</strong>
                <ul>
                  <li>Figma</li>
                </ul>
              </Description>
            </Main>
            <Main>
              <Title>
                <Develope width={40} height={40} /> FullStack Developer
              </Title>
              <Description>
                I am a specialized JavaScript developer with skills in the main
                Front-End and Back-End frameworks
              </Description>
              <Description>
                <strong>SKILLS</strong>
                <Ulskill>
                  <Liskill>
                    Html, Css, Js, React, NextJs, ChakraUI, Tailwind,
                    Styled-Components, Firebase, NodeJs, ExpressJS, MySQL.
                  </Liskill>
                </Ulskill>
              </Description>
              <Description>
                <strong>Tools</strong>
                <ul>
                  <li>VScode, Github, Codepen etc.</li>
                </ul>
              </Description>
            </Main>
          </Tab>
        </Box>
      </ThemeProvider>
    </motion.div>
  )
}

export default MySkillsPage

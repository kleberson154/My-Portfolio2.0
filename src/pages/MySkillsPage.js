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

//style
const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 92vw;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 500px) {
    height: 8rem;
  }
`

const Tab = styled(motion.div)`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5.5rem 0 5.5rem;
  gap: 3rem;
  position: absolute;

  top: 140px;

  @media (max-width: 875px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 500px) {
    padding: 0 1rem 0 5.5rem;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 0 2rem;
  width: 100%;
  height: auto;
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
  @media (max-width: 1050px) {
    font-size: calc(0.5em + 1vw);
    padding: 0;
  }
`
const Liskill = styled.li`
  font-size: calc(0.2em + 1vw);
  @media (max-width: 1050px) {
    font-size: calc(0.5em + 1vw);
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
        {/* <Box> */}
        <LogoComponent theme="light" />

        <SocialIcons theme="light" />
        <PowerButton alt="Go to HomePage" />
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
              <Develope width={40} height={40} /> FullStack Developer
            </Title>
            <Description>
              Sou um desenvolvedor especializado em JavaScript com habilidades
              nos principais Frameworks de front-end e back-end.
            </Description>
            <Description>
              <strong>HABILIDADES</strong>
              <Ulskill>
                <Liskill>
                  Html, Css, JavaScript, TypeScript, React, NextJs, Java,
                  NodeJs, PostgreSQL, MongoDB, MySQL, ExpressJS, RESTful, JWT,
                  Tailwild, Styled-Components, Bootstrap, Sass.
                </Liskill>
              </Ulskill>
            </Description>
            <Description>
              <strong>FERRAMENTAS</strong>
              <Ulskill>
                <Liskill>VScode, Github, Codepen etc.</Liskill>
              </Ulskill>
            </Description>
          </Main>
          <Main>
            <Title>
              <Design width={40} height={40} /> Designer
            </Title>
            <Description>
              Adoro criar um design que fala: "Mantenha-o limpo, minimalista e
              simples.
            </Description>
            <Description>
              <strong>I LIKE TO DESIGN</strong>
              <Ulskill>
                <Liskill>
                  Web Design, Font-Awesome, UI/UX Design, React-Icons,
                  Framer-Motion
                </Liskill>
              </Ulskill>
            </Description>
            <Description>
              <strong>Tools</strong>
              <Ulskill>
                <Liskill>Figma</Liskill>
              </Ulskill>
            </Description>
          </Main>
        </Tab>
        {/* </Box> */}
      </ThemeProvider>
    </motion.div>
  )
}

export default MySkillsPage

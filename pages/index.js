import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/components/Themes'
import GlobalStyles from '../styles/GlobalStyles'
import styled, { keyframes } from 'styled-components'
import PowerButton from './PowerButton'
import SocialIcons from './SocialIcons'
import { YinYang } from '../src/components/AllSvgs'
import { useState } from 'react'

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
const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.theme.text};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 3rem;
  top: 1.5rem;
  z-index: 3;
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

const Center = styled.button`
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
  transition: all 2s ease;

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
    <div>
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

      <>
        <ThemeProvider theme={lightTheme}>
          <MainContainer>
            <DarkDiv click={click} />

            <Container>
              <PowerButton />
              <Logo>KSN</Logo>
              <SocialIcons theme={click ? 'dark' : 'light'} />
              <Center click={click}>
                <YinYang
                  onClick={() => handleClick()}
                  width={click ? 120 : 200}
                  height={click ? 120 : 200}
                  fill="currentColor"
                />
                <h2>Click Here</h2>
              </Center>

              <Contact href="mailto:kleberson55@hotmail.com" target="_blank">
                <h2>Say hi..</h2>
              </Contact>
              <Work href="/WorkPage">
                <h2>Work</h2>
              </Work>
              <BottomBar>
                <About href="/WorkPage" click={click}>
                  <h2>About</h2>
                </About>
                <Skill href="/WorkPage">
                  <h2>My Skills</h2>
                </Skill>
              </BottomBar>
            </Container>
          </MainContainer>
        </ThemeProvider>

        <GlobalStyles />
      </>
    </div>
  )
}

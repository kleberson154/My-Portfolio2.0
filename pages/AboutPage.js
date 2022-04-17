import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/components/Themes'
import GlobalStyles from '../styles/GlobalStyles'

const AboutPage = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>hei</ThemeProvider>

      <GlobalStyles />
    </>
  )
}

export default AboutPage
